const repeatString = function(string,integer) {
    
    let result = "";
    for(let i=0;i<integer;i++)
    {
        result += string;
    }
    return integer >= 0 ? result : "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
