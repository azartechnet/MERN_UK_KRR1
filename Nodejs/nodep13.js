let count=0;
const intervalId=setInterval(()=>{
    if(count==15)
    {
        clearInterval(intervalId)
        console.log("TimeUp")
    }
    else
    {
        const now=new Date();
        const hour=now.getHours();
        const minute=now.getMinutes();
        const time=hour+":"+minute;
        console.log(time)
        count++;
    }
},2000)