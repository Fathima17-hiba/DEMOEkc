const sum=(a,b)=>
    {
        console.log("sum is" ,a+b);
    }
    const prod=(a,b)=>
    {
        console.log("product is", a *b ,);
    }
    const fact=(a)=>
        {
            f=1
            for(i=1;i<=a;i++)
                f=f*i
            console.log(`factorial of ${a} is ${f}`);
        }
        module.exports={sum,product,fact}