// Array Iteration Method
// It is a Looping Concept
// It is without using a Treditional For Loop
// It is a Array Iteration Method Using Array Iterative Inbuilt Function
// Iterative Inbuilt Function -> MAP FILTER FIND REDUCE FLATMAP FOREACH
// Syntax for same but Behaviour was change 
// 
// MAP -> It is maniplate the each element in the  array
// To Extract the specific Object in the array

// Array Iteration
let r=[1,3,4,5]
let n=[];
for(i=0;i<r.length;i++){
    n.push(r[i]+5)
}
console.log(n)
// Array Iteration of object
let p=[{name:"h",age:20},{name:"i",age:30},{name:"j",age:40},{name:"f",age:40},{name:"g",age:30}]
let h=[]
    for(i=0;i<p.length;i++){
        h.push({age: p[i]})
        
}
console.log(h)

// Array Iteration object use in Map and Arrow Function 
console.log("---Map---")
let a1=p.map((l,d,array)=>{
    return {age: l.age} // Get the particular Element
})
    
console.log(a1)

// Filter
console.log("---Filter---")
let a2=p.filter((l,d,array)=>{
    return l.age>30 // Assign the Conditions
})
console.log(a2)
// Find
console.log("---Find---")
let a3=p.find((l,d,array)=>{
    return l.age>20 // Assign the Conditions
})   
console.log(a3)

// Reduce Method Array is +,-,*,/,.......
let m=[1,3,3,4,]
let z=m.reduce((prev,curn)=>{   
    return prev + curn          // apply for Arithmetic
},0)                            // 0 is Previous Initil  value
console.log("Reduce Method : "+z)
// flatmap
console.log("---FlatMap---")
let a4=[1,2,3,4]
let result5=a4.flatMap((e,i,arrayA)=>{
    return [e+4];
})
console.log(result5)
// foreach
console.log("---ForEach---")
a1.forEach((e,i,array)=>{
    e.age+=1
})
console.log(a1)



// // object 
// console.log("----- OBject-----")
// let obj={};
// for(i=0;i<p.length;i++){
//     if(obj[p[i].age]){
//         obj[p[i].age].push(p[i])
//     }
//     else{
//         obj[p[i].age]=[p[i]]
//     }
// }
// console.log(Object.values(obj))



// let a=[1,2,3,4,5]
// let result=a.map((e,i,array)=>{
//     return e+5; // maniplate
// })
// console.log(result)

// // array of Object
// let a1=[{name:"johan",age:30},{name:"sam",age:0},{name:"stark",age:40}]
// let result1=a1.map((e,i,array)=>{
//     return {age :e.age};
// })
// console.log(result1)


// let result2=a1.filter((e,i,array)=>{
//     return e.age>=0;
// })
// console.log(result2)

// let result3=a1.find((e,i,array)=>{
//     return e.age>0;
// })
// console.log(result3)

// let a2=[1,2,3,4]
// let result4=a2.reduce((pre,e,i,array)=>{
//     return pre+e;
// },0)
// console.log(result4)

// let result5=a2.flatMap((e,i,array)=>{
//     return [e+4];
// })
// console.log(result5)

// a1.forEach((e,i,array)=>{
//     e.age+=1
// })
// console.log(a1)






















