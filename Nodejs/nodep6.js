var f1=require('fs')
//Synchrous read
var data=f1.readFileSync("sample1.txt")
console.log(data.toString())


//Asynchrous Read with Callbackfunction
f1.readFile('sample1.txt',function(err,d){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(d.toString())
    }
})