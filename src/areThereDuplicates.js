//Implement a function called areThereDuplicates() which
//accepts a variable number of arguments, and checks whether there are
//any dupliates among the arguments passed in. You can solve this 
//using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates() {
    //let inputArray = arr.toString();
    let frequencyCounter1 = {};

    let hasDuplicates = false;

    for(let val of arguments) {
        console.log(val);
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        if(frequencyCounter1[val] >1) //if the frequency ever gets to more than 1,
        {                             //then we have a duplicate
            console.log('true');
            return true;
        }
    }

    console.log(hasDuplicates);
    return hasDuplicates;
}

//examples:
//areThereDuplicates(1,2,3) //false
//areThereDuplicates(1,2,2); //true
areThereDuplicates('a', 'b', 'c', 'a'); //true
