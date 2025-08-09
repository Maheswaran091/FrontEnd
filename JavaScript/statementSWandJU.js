// Advance FOR LOOP
// FOR loop -> Array -> "of" used
console.log("----Array -> -OF- used----")
let a=[1,2,4,5,6]
for(let number of a){
    console.log("Array OF :"+number)

}


// FOR loop -> Object -> "in" used
console.log("----Object -> -IN- used----")
let obj={n1:"m1",n2:"m2",n3:"M3" }
for(let name in obj){
    console.log("Object IN :"+name+" value : ",obj[name])
  
}


// JUMP 
// Break -> Skipped for Compleate Iteration
console.log("----Break----")
let b=[1,2,3,4,5,6]
for(let num1 of b){
    if(num1 == 3){
        break; //Break Statement
    }
    console.log("Break array : "+num1);

}

// Continue-> Skipped for next line
console.log("----Continue----")
for(let num1 of b){
    if(num1 == 3){
        continue; //Continue Statement
    }
    console.log("Continue array : "+num1); //skip the line

}

console.log("----Continue i++ increment----")
for(let i=0;i<5;i++){
    if(i == 1){
        continue; //Continue Statement
    }
    console.log("hi"); //skip the line
    
}

// Switch  

let day=7;
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
     default:
        console.log("Weekend")     
}

// Duplicates,Unique,Second Largest,Patterns,Sorting ->Array related
// Palindrome,anagram ->String related
// Prime,Fibonacci,Factorial ->Number rel,ated
// Reverse,Frequency ->Array and String

// Duplicate ->find the duplicate numbers
number=[1,2,3,4,5,1,2]
obj={}
for(num of number){
    if(!obj[num]){   // number is not assign for object is undefined
        obj[num]=1  // updated for object num = 1
    } 
    else{
        obj[num]++;
    }


}
for(let a1 in obj){
    if(obj[a1]==1){
       console.log("Duplicate Number :",a1) 
       break;
    }

}
console.log("Duplicate Number :",obj)
