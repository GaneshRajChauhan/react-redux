let firstfunction=()=>{
   
    console.log("done");
   
}
function handleRequest(num1,callback)
{
    for(var i=0;i<=num1;i++)
    {
        console.log("doing");
    }
    callback();
}


handleRequest(1000,firstfunction);
console.log ("ganesh");