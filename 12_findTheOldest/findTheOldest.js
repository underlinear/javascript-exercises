const findTheOldest = function(peopleArray) {
    let age=[];
    for(let i = 0;i<peopleArray.length;i++)
    {
        if(peopleArray[i].yearOfDeath==null)
        {
            age.push(2023-peopleArray[i].yearOfBirth);
            continue;
        }
        age.push(peopleArray[i].yearOfDeath-peopleArray[i].yearOfBirth);
    }
    let high = age[0];
    let indexOfHighest = 0;
    for(let j = 1;j < peopleArray.length-1;j++)
    {
        if(high < age[j])
        {
            high = age[j];
            indexOfHighest = j;
        }
    }
    const oldest = peopleArray[indexOfHighest];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
