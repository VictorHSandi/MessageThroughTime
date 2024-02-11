var int_str = "";
var set = [];

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Method to take input from another method call
exports.takeInput = function (input) {
  set = [];
  int_str = input;
  console.log(`You said:\n${input}\nin Binary that is:\n${text2Binary(input)}`);
  format(text2Binary(int_str));
  pdf(set);
};

readline.question(`Enter Message: \n`, (input) => {
  int_str = input;
  console.log(`You said:\n${input}\nin Binary that is:\n${text2Binary(input)}`);
  format(text2Binary(int_str));
  pdf(set);

  readline.close();
});
function text2Binary(input) {
  let binaryResult = "";

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    let binaryValue = "";

    for (let j = 7; j >= 0; j--) {
      binaryValue += (charCode >> j) & 1;
    }

    binaryResult += binaryValue + " ";
  }

  return binaryResult.trim();
}
function format(string) {
  string = string.replaceAll(" ", "");
  arr = string.split("");

  // console.log(arr.length);
  let temp = [];
  for (let i = 0; i < arr.length; ++i) {
    temp.push(arr[i]);
    if ((i + 1) % 32 == 0) {
      set.push(temp.join("\n"));
      temp = [];
    }
  }
  set.push(temp.join("\n"));
}

function pdf(set) {
  const pdf = require("../node_modules/pdfjs/lib");

  const fs = require("fs");

  // if file exists, delete it
  if (fs.existsSync("./services/output.pdf")) {
    console.log("deleting file");
    fs.unlinkSync("./services/output.pdf");
  }

  const doc = new pdf.Document({
    font: require("../node_modules/pdfjs/font/Helvetica"),
    width: 612,
    height: 792,
    paddingLeft: 0,
    paddingRight: 0,
    padding: 0,
  });

  doc.pipe(fs.createWriteStream("output.pdf"));

  const table = doc.table({
    widths: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    
  });

  for (let x = 0; x < set.length; ++x) {
    // console.log(set.length);
    const row = table.row();
    for (let i = 0; i < 14; ++i) {
      if (i < set.length) {
        // console.log("###")
        // console.log(set[i]);
        // console.log("###")
        row.cell(set[i], {
          fontSize: 19,
          backgroundColor: 0xffffff,
          textAlign: "center",
          minHeight: doc._cursor.startY - doc._cursor.bottom,
          
        });
      }
    }

    // console.log(x);
    // console.log(set.length);
    x = x + 14;
  }

  doc.end();
}