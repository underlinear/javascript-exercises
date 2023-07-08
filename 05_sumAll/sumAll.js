const sumAll = function(number1,number2) {
    let start,end
    let result = 0
    if ((number1 < 0 || number2 < 0) || typeof number1 != "number" || typeof number2 != "number")
    {
        return "ERROR"
    }
    if(number1 > number2)
    {
        start=number2
        end=number1
    }
    else
    {
        start=number1
        end=number2
    }
    for(let i=start;i<=end;i++)
    {
        result += i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
