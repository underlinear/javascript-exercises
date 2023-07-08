const reverseString = function(myString) {
    let copyString = myString;
    for(let i=0;i<myString.length;i++)
    {
        myString = myString.substring(0,i)
        +copyString[(myString.length-i)-1]
        +myString.substring(i+1)
    }
    return myString
};

// Do not edit below this line
module.exports = reverseString;
