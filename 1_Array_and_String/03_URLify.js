//Write a method to replace all space with the string '%20'

function URLify(str){
    return str.trim().replace(/ /g, "%20")
}
  
console.log(URLify("Hello World  "))
console.log(URLify("Hello Wo r l d  "))
console.log(URLify("H e l l o W o r l d  "))