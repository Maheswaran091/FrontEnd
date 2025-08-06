// Advance FOR LOOP
// FOR loop -> Array -> "of" used
console.log("----Array -> -OF- used----")
let a=[1,2,4,5,6]
for(let number of a){
    console.log("Array OF :"+number)

}


// FOR loop -> Object -> "in" used
console.log("----Object -> -IN- used----")
let obj={n1:"m1",n2:"m2",n3:"M3"}
for(let name in obj){
    console.log("Object IN :"+name+" value : ",obj[name])
  
}


// JUMP 
console.log("----Break----")
let b=[1,2,3,4,5,6]
for(let num1 of b){
    if(num1 == 3){
        break;
    }
    console.log("Break array : "+num1);

}

console.log("----Continue----")
for(let num1 of b){
    if(num1 == 3){
        continue;
    }
    console.log("Break array : "+num1);

}
