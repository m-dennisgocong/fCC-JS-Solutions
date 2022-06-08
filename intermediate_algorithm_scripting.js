
// #1 Sum All Numbers in a Range
function sumAll(arr) {
    arr.sort(function(a, b){return a - b});
    let sum = 0;
    for(let i=arr[0];i<=arr[1];i++){
      sum += i;
    }
    return sum;
}
/* other solution if I don't use sort and for loops

function sumAll(arr) {
  let start = arr[0];
  let end = arr[1];
  if(arr[0]>arr[1]){
    [start,end] = [arr[1],arr[0]];
  }
  let sum = 0;
  while(start<=end){
    sum += start;
    start++;
  }
  return sum;
}

*/

// #2 Diff Two Arrays - return the symmetric difference of the two arrays
function diffArray(arr1, arr2) {
    const newArr = [];
    
    for(let i =0;i<arr2.length;i++){
      if(arr1.indexOf(arr2[i]) < 0){
        newArr.push((arr2[i]));
      }
    }
  
    for(let i =0;i<arr1.length;i++){
      if(arr2.indexOf(arr1[i]) < 0){
        newArr.push((arr1[i]));
      }
    }
  
    return newArr;
}

/* #3 Seek and Destroy -  
Remove all elements from the initial array that are of the same value on the second arguments.
*/
function destroyer(arr,...args) {
  for(let i=0;i<args.length;i++){
    while(arr.indexOf(args[i]) != -1){//stop when there is no more matching value
      if(arr.indexOf(args[i]) >= 0){
        arr.splice(arr.indexOf(args[i]),1)
      }
    }
  }
  return arr;
}

// #4 Wherefore art thou 
function whatIsInAName(collection, source) {

  const arr = [];
  const keys = Object.keys(source)

  for(let i=0;i<collection.length;i++){
    let check = false; 
    for(let y=0;y<keys.length;y++){
      if(keys[y] in collection[i]){
        if(source[keys[y]] === collection[i][keys[y]]){
          check = true; // it's true if the key's and it's value is in the collection
        }else{
          //break the loop and set the check value to false;
          check = false;
          break;
        }
      }
      else{
        // break the loop and set it to false so it won't add to array
        check = false;
        break;
      }
    }
    if(check == true){
      arr.push(collection[i])
    }
  }
  return arr;
}

/*
  #5 Spinal Tap Case
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
*/
function spinalCase(str) {
  let space = /[\s_]/g;
  let withDash = str.replace(space,"-");//replace the space and underscore with dash
  let capitalLetter = /[A-Z]/;
  let temp = [];
  for(let i=0;i<withDash.length;i++){
    if(capitalLetter.test(withDash[i])){//if character is Capital letter add dash to temp array
      temp.push("-");
    }
    temp.push(withDash[i]);
  }
  let word = temp.join("")
  word = word.replace(/^-+|-+$/g,"");//don't let the string start or end with dash
  word = word.replace(/-+/g,"-");//no duplicate dash   
  return word.toLowerCase();
}

// #6 Pig Latin
function translatePigLatin(str) {

  if(/^[aeiou]/.test(str) === true){
    return str + "way";
  }
  else{
    if(/[aeiou]+/.test(str) === false){
      return str + "ay";
    }
    for(let i=0;i<str.length;i++){
      if(/[aeiou]/.test(str[i])){
        return str.slice(i) + str.slice(0,i) + "ay" 
      }
    }
  }
}

// #7 Search and Replace
function myReplace(str, before, after) {
  let wordBefore = new RegExp(before,'g');//regex
  
  //preserve the first character case in the orginal word(before) when replacing it
  if(before.charAt(0) === before.charAt(0).toUpperCase()){ 
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }else{
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(wordBefore, after);
}

// #8 DNA Pairing
function pairElement(str) {
  let arr = [];
  for(let i=0;i<str.length;i++){
    if(str[i] === "A"){
      arr.push([str[i],"T"]);
    }
    else if(str[i] === "T"){
      arr.push([str[i], "A"]);
    }else if(str[i] === "C"){
      arr.push([str[i], "G"]);
    }else{
      arr.push([str[i], "C"])
    }
  }
  return arr;
}

// Missing Letters
function fearNotLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<str.length;i++){
    if((letters.indexOf(str.charAt(i))) >= 0){
      let index = letters.indexOf(str.charAt(i))
      if(letters.charAt(index + 1) != str.charAt(i+1)){
        return letters.charAt(index + 1);
      }
    }
  }
  return undefined;
}