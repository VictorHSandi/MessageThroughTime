from flask import Flask
from flask import request
from flask import json
from flask import jsonify
from PIL import Image
import pytesseract
import argparse
import cv2
import os

app = Flask(__name__)


def decode_binary_string(s):
    return "".join(chr(int(s[i * 8 : i * 8 + 8], 2)) for i in range(len(s) // 8))


# Function to process image
def process_image():
    # construct the argument parse and parse the arguments
    image = cv2.imread("test1.jpg")
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (3, 3), 0)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    # Morph open to remove noise
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=1)

    # Perform text extraction
    data = pytesseract.image_to_string(opening, lang="eng", config="--psm 6 ")
    data = data.replace("o", "0")
    data = data.replace("O", "0")
    data = data.replace("#", "")
    data = data.replace("9", "")
    data = data.replace("4", "1")
    data = data.replace("00", "0")
    data = data.replace("111", "1 1")
    data = data.replace("11", "1")
    split = data.splitlines()

    result = [[], [], [], [], [], [], [], [], [], [], [], [], []]
    for y in range(13):
        for x in range(len(split)):
            # print(result)
            if split[x].split(" ")[y] == "":
                result[y].append("0")
            else:
                result[y].append(split[x].split(" ")[y])

    for line in result:
        if len(line) % 8 != 0:
            line.append("0")

    final = ""
    for line in result:
        final = final + (decode_binary_string("".join(line)))
    print(final)


@app.route("/")
def hello_world():
    return "Hello, World!"


# Get the image from the user and process it
@app.route("/process", methods=["POST"])
def image_processor():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"})

    file = request.files["file"]
    file.save("test1.jpg")
    process_image()
    return jsonify({"success": "File uploaded"}), 200
