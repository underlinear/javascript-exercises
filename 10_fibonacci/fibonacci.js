const fibonacci = function(number) {
    if(number<0)
    {
        return "OOPS";
    }
    else if(number==0)
    {
        return 0;
    }
    let target = +number;
    let a = 1;
    let b = 0;
    let c = 1;
    for(let i=1;i<target;i++)
    {
        c=a+b;
        b=a;
        a=c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
