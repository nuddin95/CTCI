/*
Implement  method to compress string based on repeating characters

INPUT: aabbbaacc 
OUTPUT: a2b3a2c2

You should return the compressed version only if it is shorter than the original
*/ 

function compress(st){
    let str = st.toLowerCase()
    let result =""
    let count =1
    for(let i=0; i< str.length; i++){
      if(str[i] === str[i+1]){
        count++
      }else{
        result += (str[i] + count)
        count = 1
      }
    }
    
    return (result.length < str.length ? result : str);
}