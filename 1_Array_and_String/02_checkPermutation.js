//Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(str1, str2){
    return str1.split("").sort().join("") == str2.split("").sort().join("")
  }
  
  checkPermutation("abcdef", "bcafed") //true
  checkPermutation("aa", "as") //false
  checkPermutation("asdfghjk", "fjkhgsad") //true
  checkPermutation(".,/123 45 67", " ,.32/15476.") //false