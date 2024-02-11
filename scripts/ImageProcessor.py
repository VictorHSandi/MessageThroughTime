# # import the necessary packages
# from PIL import Image
# import pytesseract
# import argparse
# import cv2
# import os
# # construct the argument parse and parse the arguments
# ap = argparse.ArgumentParser()
# ap.add_argument("-i", "--image", required=True,
# 	help="path to input image to be OCR'd")
# ap.add_argument("-p", "--preprocess", type=str, default="thresh",
# 	help="type of preprocessing to be done")
# args = vars(ap.parse_args())
#
# # load the example image and convert it to grayscale
# image = cv2.imread(args["image"])
# gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
# # check to see if we should apply thresholding to preprocess the
# # image
# if args["preprocess"] == "thresh":
# 	gray = cv2.threshold(gray, 0, 255,
# 		cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
# # make a check to see if median blurring should be done to remove
# # noise
# elif args["preprocess"] == "blur":
# 	gray = cv2.medianBlur(gray, 3)
# # write the grayscale image to disk as a temporary file so we can
# # apply OCR to it
# filename = "{}.png".format(os.getpid())
# cv2.imwrite(filename, gray)
#
# # load the image as a PIL/Pillow image, apply OCR, and then delete
# # the temporary file
# text = pytesseract.image_to_string(Image.open(filename),config='--psm 5', )
# os.remove(filename)
# print(text)
# # show the output images
# # cv2.imshow("Image", image)
# cv2.imshow("Output", gray)
# cv2.waitKey(0)
import numpy as np
import cv2

# Read the image
image = cv2.imread('digits.png')

# gray scale conversion
gray_img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv2.imshow("Output", gray_img)
cv2.waitKey(0)

# We will divide the image
# into 5000 small dimensions
# of size 20x20
divisions = list(np.hsplit(i, 14) for i in np.vsplit(gray_img, 32))

# Convert into Numpy array
# of size (50,100,20,20)
NP_array = np.array(divisions)

# Preparing train_data
# and test_data.
# Size will be (2500,20x20)
train_data = NP_array[:, :50].reshape(-1, 400).astype(np.float32)

# Size will be (2500,20x20)
test_data = NP_array[:, 50:100].reshape(-1, 400).astype(np.float32)

# Create 10 different labels
# for each type of digit
k = np.arange(10)
train_labels = np.repeat(k, 250)[:, np.newaxis]
test_labels = np.repeat(k, 250)[:, np.newaxis]

# Initiate kNN classifier
knn = cv2.ml.KNearest_create()

# perform training of data
knn.train(train_data,
          cv2.ml.ROW_SAMPLE,
          train_labels)

# obtain the output from the
# classifier by specifying the
# number of neighbors.
ret, output, neighbours, distance = knn.findNearest(test_data, k=3)

# Check the performance and
# accuracy of the classifier.
# Compare the output with test_labels
# to find out how many are wrong.
matched = output == test_labels
correct_OP = np.count_nonzero(matched)

# Calculate the accuracy.
accuracy = (correct_OP * 100.0) / (output.size)

# Display accuracy.
print(accuracy)