var f1=require('fs')
f1.open('sample.txt','r',function(err,data){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }
    console.log("FileOpen")
})