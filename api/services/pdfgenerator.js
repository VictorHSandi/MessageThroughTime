var int_str = "";
var set = [];

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


readline.question(`Enter Message: \n`, input => {
    int_str = input;
    console.log(`You said:\n${input}\nin Binary that is:\n${text2Binary(input)}`);
    format(text2Binary(int_str));
    pdf(set);

    readline.close();
  });
function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('');
}
function format(string) {
    string = string.replaceAll("0", "0");
    string = string.replaceAll("1", "1");

    arr = string.split('');

    // console.log(arr.length);
    let temp = [];
    for (let i = 0; i < arr.length; ++i){
        temp.push(arr[i]);
        if (((i+1) % 28) == 0){
            set.push(temp.join("\n"));
            temp = [];
        }
    }
    set.push(temp.join("\n"));
    
}


function pdf(set) {
    const pdf = require("../node_modules/pdfjs/lib");

    const fs = require("fs");
    
    const doc = new pdf.Document({
        font:    require('../node_modules/pdfjs/font/Times-Bold'),
        width: 612,
        height: 792,
        paddingLeft: 0,
        paddingRight: 0,
        padding: 0,
        
      })
    doc.pipe(fs.createWriteStream('output.pdf'))
      
    {
        const table = doc.table({ widths: [null, null, null, null, null, null, null, null, null, null, null, null, null, null], 
            borderWidth: 0.5 });
        const row = table.row();
        for (let i = 0; i < 14 || i+1 == set.length; ++i){
            row.cell(set[i], {
                fontSize: 20,
                padding: 1,
                backgroundColor: 0xdddddd,
                textAlign: "center",
                minHeight: doc._cursor.startY - doc._cursor.bottom,
              });
    
        }
        
          
      }
    doc.end()
}

