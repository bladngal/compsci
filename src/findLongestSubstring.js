//write a function which accepts a string and returns the length
//of the longest substring with all distinct characters.
// e.g. findLongestSubstring('thisisawesome') // 6

function findLongestSubstring(searchString){
    let stringObj = {};
    let startPtr = 0;
    let endPtr = 0;
    let maxLength = 0;
    let tempLength = 0;
    var tempChar;

    //search until the end of the string
    while(endPtr < searchString.length){
        //grab the character, here named tempChar for clarity's sake
        tempChar = searchString[endPtr];
        //console.log(tempChar);
        //if the object doesn't have it yet, initialize it at 0 then add 1,
        //otherwise just add one to the count
        stringObj[tempChar] = (stringObj[tempChar] || 0) + 1;
           
        //if there is more than one of that character, we need to go to where we 
        //first encountered it and move one character to the right and start over
        if(stringObj[tempChar] > 1) {
            while(searchString[startPtr] != tempChar){
                //TODO remove the values as I walk the string
                //this will avoid false duplicates in future strings
                
                stringObj[searchString[startPtr]] --;
                startPtr++;
            }
            //startPtr IS now pointing at the duplicate, so we 
            //need to remove that entry and move the pointer over by one 
            stringObj[searchString[startPtr]] --;
            startPtr++;
            //console.log('startPtr:', startPtr);
            //console.log('stringObj:', stringObj);
        }
        tempLength = endPtr - startPtr + 1;
        maxLength = Math.max(tempLength, maxLength);
        //console.log('maxLength:', maxLength);
        //move endPtr to the next spot
        endPtr++;
        //console.log('endPtr:', endPtr);
    } // end while

    tempLength = endPtr - startPtr;
    maxLength = Math.max(tempLength, maxLength);
    console.log('maxLength:', maxLength);
    return maxLength;
}


//findLongestSubstring('') // 0
//findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
//findLongestSubstring('thecatinthehat') // 7
//findLongestSubstring('bbbbbb') // 1
//
//findLongestSubstring('longestsubstring') // 8
//                    0123456789012345

//findLongestSubstring('s1234s67890s'); // 10

