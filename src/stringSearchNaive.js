
//take a long string and do a simple search for a pattern string within, return
//the count of how many times the pattern is found within the long string
function stringSearch(longString, pattern){
    var count = 0;

    for(var i = 0; i<longString.length - pattern.length+1; i++){
        for(var j = 0; j<pattern.length; j++) {
            //console.log(pattern[j], ':', longString[i+j]);
            //if the two do not match, break out of the loop
            if(pattern[j] != longString[i+j]) break;
            //they did match, and if we are on the last letter of the pattern
            //then the whole patter matched and we can increment the counter
            else if(j === pattern.length -1){
                count++;
            } 
        }
    }
    return count;

}

console.log(stringSearch('hellohello', 'hello'));
//console.log(stringSearch('hhhhh', 'hh'));