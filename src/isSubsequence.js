function isSubsequence(targetString, testString) {
    let i=0;
    let j=0;
        
    
    while(j< testString.length){
        if(targetString[i] === testString[j]) i++;
        if(i === targetString.length){
            console.log('true');
            return true;
        } 
        j++;
    
    }
    console.log('false');
    return false;
}

//isSubsequence('hello', 'hello world'); // true
//isSubsequence('sing', 'sting'); //true
//isSubsequence('abc', 'abracadabra'); //true
isSubsequence('abc', 'acb'); //false, not in order
