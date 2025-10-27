// ---STRING INBUILT FUNCTION---
 
let str="  Hello world  ";
// split
console.log('----Split Function----')
console.log(str.split("w")) //Split the words
console.log(str.split("l")) //Split the words Same double letter Print one "" String
console.log(str.split("")) //Assingn Empty string Split all the words

// Upper and Lower case
console.log("----Upper and Lower Case----")
console.log(str.toUpperCase()) //Upper case for all words
console.log(str.toLowerCase()) //Lower case for all words

// First and Last Index
console.log("----First and Last Index ----")
console.log(str.indexOf('w')) //Find the start to end (Case Sensitive)
console.log(str.lastIndexOf('w')) //Find the End to Start (Count will be start) 
console.log(str.search("/m/i")) // RegEx


// Replace the word
console.log(str.replace("Hello world","JavaScript")) // replace the Word not affect the main string 

// slice word Accepted the negative values
console.log(str.slice(1,5)) //slice the word starting
console.log(str.slice(-5,-1)) // slice the word in end to start 
//substring
console.log(str.substring(1,3)) // not accepted the negative values

// Word Index
console.log(Array.from(str.matchAll("l"))) //find the Word Index 

// Add the Word in start and End 
console.log(str.padStart(str.length+4,"Java")) //Added to start 
console.log(str.padEnd(str.length+4,"Java")) //Added to End

// Repeat the Word
console.log(str.repeat(3))

// Find the particular Word
console.log(str.includes("ld")) //true or false
console.log(str.startsWith("He"))
console.log(str.endsWith("He"))

//Remove the Space start and end
console.log(str.trim())

// Get the Word
console.log(str.charAt(2)) // input the index

// 3a2b4c
let words="3a2b4d"
let result="" 
let digit=0;
for(i=0;i<words.length;i++){
    if(!isNaN(words[i])){
        digit=parseInt(words[i])
    }
    else{
        result+=words[i].repeat(digit);
        digit=0; //reset the digit value
    }
}
console.log("Inbuilt Function Problems of -> 3a2b4c :"+result)




// ---ARRAY INBUILT FUNCTION---

console.log('---- Array Inbuilt Function ----')

let a=[20,30,40,50]
console.log(a)

// Add and Remove the Element
a.push(5); // add the element in last
console.log(a)
a.unshift(1); // add the element in first
console.log(a)
a.pop(); // Remove the element in last
console.log(a)
a.shift(); // Remove the element in first
console.log(a)
a.splice(1,2,1,2,3) // Add and remove the Element in Randomly
console.log(a)
a.copyWithin(1,3,5) // copy the element in within the array past
console.log(a)
a.fill(12,1,4); // To fill the element in particular range
console.log(a)
console.log(a.indexOf(12)); // To find the element in first index
console.log(a.lastIndexOf(50)) // To find the element in last index and count will be start
console.log(a.join(" ")) // change Array to String 

let b=[1,2,3,[4,5,[6,7]]]

console.log(b.flat(Infinity)) //Remove the Array []


// // Sorted the array  
// let k=[1,3,2]
// k.sort((a,b)=>b-a); // ascending and descending order
// console.log(k)

// // Sorted the String
// let k1="script"
// sorted=k1.split("");
// sorted.sort(); // ascending order
// console.log(sorted.reverse()) // descending order

// // Bubble Sort
// // let k2=[1,3,2,5,4,6]
// // for(i=0;i<k2.length;i++){
// //     for(j=i+1;j<k2.length;j++){
// //         if(k2[i]<k2[j]){
// //             let bkp=k2[i]
// //             k2[i]=k2[j]
// //             k2[j]=bkp;
// //         }
// //     }
// // }
// // console.log(k2)

// let ar=[1,3,2,2,5,4]
// for(i=0;i<ar.length;i++){
//     for(j=i+1;j<ar.length;j++){
//         if(ar[i]>ar[j]){  // Condition check and Ascending and Descending Order
//             bkp=ar[i]   // to get the Bigest value in  Backup the value to read
//             ar[i]=ar[j] // change the value of ar[i]
//             ar[j]=bkp   // change the value of ar[j]
//         }
//     }
// }
// console.log(ar)


// let g=[4,2,3,1]
// for(i=0;i<g.length;i++){
//     for(j=i+1;j<g.length;j++){
//         if(g[i]<g[j]){
//             bkp=g[i]
//             g[i]=g[j]
//             g[j]=bkp
//         }
//     }
// }
// console.log(g)

