var f1=require('fs')
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