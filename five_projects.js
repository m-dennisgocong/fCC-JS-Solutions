/*
    My solution for the 5 JavaScript Projects to gain Certification 
*/


// #1 Palindrome Checker
function palindrome(str) {
    let regex = /[a-z0-9]/ig
    let groupWord = str.match(regex);
    let wordOrginal = groupWord.join("").toLowerCase();
    let wordReverse = groupWord.reverse().join("").toLowerCase();
    for(let i = 0; i<wordReverse.length;i++){ 
      if(wordOrginal[i] != wordReverse[i]){
        console.log(wordOrginal[i]+" "+wordReverse[i])
        return false;
      }
    }
    
    return true;
  }