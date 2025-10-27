// Sorted the array  
let k=[1,3,2]
k.sort((a,b)=>a-b); // ascending and descending order
console.log(k)

// Sorted the String
let k1="script"
sorted=k1.split("");
sorted.sort(); // ascending order
console.log(sorted.reverse()) // descending order

// Bubble Sort
let ar=[1,3,2,2,5,4]
for(i=0;i<ar.length;i++){
    for(j=i+1;j<ar.length;j++){
        if(ar[i]>ar[j]){  // Condition check and Ascending and Descending Order
            bkp=ar[i]   // to get the Bigest value in  Backup the value to read
            ar[i]=ar[j] // change the value of ar[i]
            ar[j]=bkp   // change the value of ar[j]
        }
    }
}
console.log(ar)



// let k2=[1,3,2,5,4,6]
// for(i=0;i<k2.length;i++){
//     for(j=i+1;j<k2.length;j++){
//         if(k2[i]<k2[j]){
//             let bkp=k2[i]
//             k2[i]=k2[j]
//             k2[j]=bkp;
//         }
//     }
// }
// console.log(k2)