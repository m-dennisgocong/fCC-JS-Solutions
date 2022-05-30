/*  
    #1
    convert celsius to farenheit 
    formula: f = c(9/5) + 32
*/
function convertToF(celsius) { 
    let fahrenheit = (celsius * 9/5)+32;
    return fahrenheit;
}

/* #2 reverse a string 
  I didn't convert the string to an array, I use recursion instead to avoid using loops
*/
function reverseString(str) {
    if(str.length>0){
      return str[str.length - 1] + reverseString(str.substring(0,str.length-1));//get the last character and pass the remaining string
    }
    else{
      return "";
    } 
}

/* #3 Factorialize a Number 
  I still use recursion it's the best way to solve the problem
*/
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
    wordLength.sort(function(a, b){return a - b}); //sort ascending order
    return wordLength[wordLength.length-1];
}

// #5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
    const largeNumbers = [];
    for(let i=0;i<arr.length;i++){
      arr[i].sort(function(a, b){return a - b}); //sort ascending order
      //console.log(arr[i][arr[i].length-1])
      largeNumbers.push(arr[i][arr[i].length-1]) //push the last element which is the largest number
    }
  return largeNumbers;
}

/* #6 Confirm the Ending 
  check if the a string(first argument) ends with given target string(second argument)
*/
function confirmEnding(str, target) {
  return str.substring(str.length - target.length,str.length) == target ? true:false;
}

/* #7 Repeat a string
  I use recursion again 
*/
function repeatStringNumTimes(str, num) {
    if(num>0){
      return str + repeatStringNumTimes(str, num-1);
    }
    else{
      return "";
    } 
}

/* #8 Truncate a String */
function truncateString(str, num) {
    return str.length > num? str.substring(0,num)+"...": str;
}

/* 
    #9 Finders Keepers
    func:num => num % 2 === 0
    findElement([1, 3, 5, 9], num => num % 2 === 0));
*/
function findElement(arr, func) {
    let num = 0;
    while(arr.length>num){
      if(func(arr[num])){
        return arr[num];
      }
      num++;
    }
}

// #10 Boo who - check if it's boolean primitive
function booWho(bool) {
    return (typeof bool) === "boolean" ? true:false;
}

// #11 Title Case a Sentence - Capitalized the first character of each word 
function titleCase(str) {
  let lowercase = str.toLowerCase();
  let arr = lowercase.split(" ");
  for(let i=0;i<arr.length;i++){
   arr[i]=(arr[i].charAt(0).toUpperCase()) + arr[i].substring(1,arr[i].length);
  }
  return arr.join(" ");
}

/* #12 Slice and Splice - array insertion 
  I recommend using splice() and slice() method 
  End up torturing myself with out using them 
*/
function frankenSplice(arr1, arr2, n) {
  const temp = [];
  if(arr2.length===0){
    temp.push(...arr1);
  }
  else{
    for(let i=0;i<arr2.length;i++){
      if(i === n){
        temp.push(...arr1);
      }
      temp.push(arr2[i]);
    }
  }
  return temp;
}

// #13 Falsy Bouncer - remove the falsy value: false, null, 0, "", undefined, and NaN
function bouncer(arr) {
  let temp=[];
  //console.log(Boolean(NaN))
  for(let i=0;i<arr.length;i++){
    if(!Boolean(arr[i])){  
    }else{
    temp.push(arr[i]);
    }
  }
  return temp;
}

// #14 Where do I Belong - return the postion of the num(second argument) 
function getIndexToIns(arr, num) {

  if(arr.length === 0){ 
    return 0;
  }
  arr.sort(function(a,b){return a-b}); //sort ascending order
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=num){
      return i;
    }
  }
  return arr.length;
}

/* #15 Mutation  
  compare the two array, return true 
  if all element of second array are present in the first array
*/ 
function mutation(arr) {
  let arr1 =arr[0].toLowerCase();
  let arr2 =arr[1].toLowerCase();
  let objw = {};
  for(let i=0;i<arr1.length;i++){
    objw[arr1[i]] = i;//create object property name = arr1[i] with the value = i
  }
  for(let i=0;i<arr2.length;i++){
    if(!objw.hasOwnProperty(arr2[i])){
      return false;
    }
  }
  return true;
}

/* #16 Chunky Monkey 
  split the array(first argument) into a groups of size(second argument) and
  add the last remaining of the array
*/
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  //splice the array until the length is less the the size of the group
  while(arr.length > size){
    newArr.push(arr.splice(0,size));
  }
  newArr.push(arr);
  return newArr;
}