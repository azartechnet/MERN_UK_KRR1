var fs=require('fs')
var rs=fs.createReadStream("sample1.txt")
var ws=fs.createWriteStream("sample2.txt");
rs.pipe(ws)
console.log("Inserted..")