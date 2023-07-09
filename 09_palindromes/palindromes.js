const palindromes = function (stringArg) {
    let newstring = '';
    let string = stringArg.replace(/[^a-zA-Z0-9]/g, '')

    for(let i=0;i<string.length;i++)
    {
        newstring += string[i];
    }
    
    newstring = newstring.split('');
    newstring.reverse();
    let newarray = newstring.join('');
    let reversedstring = newarray.toLowerCase();
    let normalstring = string.toLowerCase();
    console.log(reversedstring);
    console.log(normalstring);
    if(reversedstring.trim()===normalstring)
    {
        return true;
    }
    else{
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
