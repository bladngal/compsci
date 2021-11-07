function sameFrequency(num1, num2) {
    let numArray1 = num1.toString(); 
    let numArray2 = num2.toString();
    //let numArray1 = Array.from(num1);
    //let numArray2 = Array.from(num2);
    

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of numArray1){ //34
        console.log(val);
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        //console.log(frequencyCounter1[val]);
        
    }
    for(let val of numArray2){
        //console.log(val);
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    //console.log(frequencyCounter1)
    let isSame = true;
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let property in frequencyCounter1) {
        //console.log("hi");
        //console.log(frequencyCounter1[property]);
        if(frequencyCounter1[property] !== frequencyCounter2[property]){
            isSame = false;
            console.log(isSame);
            return isSame;
        }
    }
    console.log(isSame);
    return isSame;


}


//sample input:
//sameFrequency(182, 281) //true
//sameFrequency(34,14) //false
//sameFrequency(3589578, 5879385) //true
sameFrequency(22, 222) // false