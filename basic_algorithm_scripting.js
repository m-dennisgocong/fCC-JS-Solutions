/*  
    #1
    convert celsius to farenheit 
    formula: f = c(9/5) + 32
*/
function convertToF(celsius) { 
    let fahrenheit = (celsius * 9/5)+32;
    return fahrenheit;
}

// #2 reverse a string
function reverseString(str) {
    if(str.length>0){
      return str[str.length - 1] + reverseString(str.substring(0,str.length-1));
    }
    else{
      return "";
    } 
}

// #3 Factorialize a Number
function factorialize(num) {
    if(num>0){
      return num * factorialize(num-1);
    }
    else if(num===0){
      return 1;
    }
    else{
      return "whole number only"
    }
  }
  /*
    #4 Find the Longest Word in a String 
    Return the length of the longest word in the provided sentence.
  */
function findLongestWordLength(str) {
    let wordLength=[];
    let arr = str.split(" "); 
    for(let i=0;i<arr.length;i++){
        wordLength.push(arr[i].length);//push each word length
    }
    wordLength.sort(function(a, b){return a - b});
    return wordLength[wordLength.length-1];
}

// #5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
    const largeNumbers = [];
    for(let i=0;i<arr.length;i++){
      arr[i].sort(function(a, b){return a - b});
      //console.log(arr[i][arr[i].length-1])
      largeNumbers.push(arr[i][arr[i].length-1])
    }
    return largeNumbers;

}
// #6 Confirm the Ending
function confirmEnding(str, target) {
  return str.substring(str.length - target.length,str.length) == target ? true:false;
}