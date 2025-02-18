const fs=require("fs")
fs.writeFile("output123.txt","this is from node",(err)=>{
    if(err)
        console.log(err.message);
    else
    console.log("data saved sucessfully");
})