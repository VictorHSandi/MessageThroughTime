const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
readline.question(`Enter Message: \n`, input => {
    console.log(`You said:\n ${input}\nin Binary that is:\n${text2Binary(input)}`);
    readline.close();
  });
function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('');
}
function format(string) {
    return string.split('').join('\n');
}


const pdf = require("../node_modules/pdfjs/lib");

const fs = require("fs");

const doc = new pdf.Document({
    font:    require('pdfjs/font/Helvetica'),
    paddingLeft: 0,
    paddingRight: 0,
    padding: 0,
    
  })
doc.pipe(fs.createWriteStream('output.pdf'))
  
{
    const table = doc.table({ widths: [null, null, null, null, null, null, null, null, null, null, null, null, null, null], 
        borderWidth: 0.5 });
    const row = table.row();
    row.cell(format(text2Binary(input)), {
        fontSize: 20,
        padding: 1,
        backgroundColor: 0xdddddd,
        textAlign: "center",
        minHeight: doc._cursor.startY - doc._cursor.bottom,
      });
    row.cell("a\na\na\na\na", {
        fontSize: 20,
        padding: 1,
        backgroundColor: 0xeeeeee,
        textAlign: "center",
        minHeight: doc._cursor.startY - doc._cursor.bottom,
      });
    row.cell("a\na\na\na\na", {
        fontSize: 20,
        padding: 1,
        backgroundColor: 0xdddddd,
        textAlign: "center",
        minHeight: doc._cursor.startY - doc._cursor.bottom,
      });
      
  }
doc.end()