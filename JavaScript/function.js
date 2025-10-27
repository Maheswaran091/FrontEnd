// Function , ArrowFunction, IIFE, CallBack, Pure and Impure, Higher Order, Currying
console.log("---- Function ----")
function addoreven(num){
    if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
addoreven(12)
addoreven(13)

// Arrow Function - is not accept for (duplicate or)  Method overloading
console.log("---- Arrow Function ----")
let arrow=(num,num1)=>{
    return num*num1;
}
let a=arrow(10,20)
console.log(a)

// Immediatly Invoked Function Expression or Anonymous function
// (function() {
//     console.log("Immediatly Invoked Function Expression or Anonymous function");
// })();

// Callback Function -> If You call Parent Function so autometically call child function is called CallBack function
// Ex:Map,Filter,Find,Reduce
console.log("---- CallBack Function ----")
let call=[1,2,3,4]
let arr=call.map((e,i,array)=>{
    return e*5
})
console.log(arr)


//(Pure and Impure Function)
// Pure Function -> It is a Local Variable
console.log("---- Pure Function ----")
function cal1(){
    let k=20
    k=40
    console.log(k)
    // let count1=0
    // count1++;
    // console.log("Count : ",count1);
    // return count1  
}
cal1()
cal1()

// ImPure Function -> It is a Global Variable
console.log("---- ImPure Function ----")
let count=0
function cal(){
    count++;
    console.log("Count : ",count);
     
}
cal()
cal()
cal()

// Higher Order Function -> wanted to call for all function
// To get the Entire function in another function 
console.log("---- Higher Order Function ----")
function parent(s){
    s();            //Entire Function call (child Function)
}
function child(){
    a=10
    b=20
    h=a-b
    console.log("Child Function : "+h)
}
parent(child)  // Call the parent and Child function

// Currying -> Multiple function used for  Function inside
// Function is also return the Function is called Currying Function
// one set of value is constant and another set of value should be change to return the output
console.log("---- Currying Function ----")
function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
let total=mul(1)
console.log(total(3)(3))
console.log(total(33)(33))


function order(q){
    q.sort((a,b)=>a-b); // ascending and descending order
    console.log(q)
}
order([1,4,2,5])

