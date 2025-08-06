//Statements 
//Contitional Itrative Switch Jump
//Conditional -> IF Else
//{}-multiple group of statements used
// ------------CONTDITIONAL AND ITERATIVE----------
if(2>7){
    console.log("This condition is True...")


}
else{
    console.log("This condition is False...")

}



//null
if(null){
    console.log("Null : True")

}
else{
console.log("Null : False")

}

//Undefined
if(undefined){
    console.log("undefined : True")

}
else{
console.log("undefined : False")

}

// Empty space
if(""){
    console.log("Empty space : True")

}
else{
console.log("Empty space : False")

}
// If is not assign the curly breshes

console.log("----If is not assign the curly breshes---- ")
if(2>4)
;
console.log(" IF : not assign the curly breshes second line ")

// If is  assign curly breshes
console.log("----If is  assign curly breshes----")
if(2>4){
;
console.log("assign the curly breshes second line ")
}
else{
console.log("Else : assign the curly breshes second line False ")

}



// If Else -> True or False 
// Type of IF -> Ladder Nested 
//Ladder ->  Priority based
// used for Else If ->once line True is not for next line condition print
console.log("----Ladder IF : Used Else If----")
// const prompt= require("prompt-sync")();
// let mark=parseInt(prompt("Enter Your Mark :"));
let mark=100
if(mark>=90 & mark<=100){

    console.log("Your Grade : A")
}
else if(mark>=80 & mark<=90){
    console.log("Your Grade : B") 
}
else if(mark>=70 & mark<=80){
    console.log("Your Grade : C")
}
else if(mark>=60  & mark<=70){
    console.log("Your Grade : D")
}
else if(mark<60){
    console.log("No Grade :Fail")
}
// console.log("Type of mark is String Or Number :"+typeof mark)


//Ladder If -> only used for IF is Print for all
console.log("----Ladder IF : Used Only IF----")
// let mark2=parseInt(prompt("Enter Your Mark :"));
let mark2=100
if(mark2>=90){

    console.log("Your Grade : A")
}
if(mark2>=80){
    console.log("Your Grade : B") 
}
if(mark2>=70){
    console.log("Your Grade : C")
}
if(mark2>=60){
    console.log("Your Grade : D")
}
if(mark2<=59){
    console.log("No Grade :Fail")
}
// console.log("Type of mark is String Or Number :"+typeof mark)


// NESTED IF -> if{if} - placing one IF inside the another IF (or) ELSE block
console.log("----NESTED IF----")
console.log("----JOB VACANCY----")
let percentage=60;
let internship="yes";
let certificate="yes";
if(percentage==60){
    if(internship=="yes"){
        if(certificate=="No"){
            console.log("JOB :Yes you are Eligible")
        }
        else{
            console.log("JOB : You are not Eligible")
        }
    }
    else{
        console.log("JOB : You are not Eligible")
    }
    
}  
else{
    console.log("JOB : You are not Eligible")
}


//ITRETIVE statement ->Repeatedly execuutes the code 
//for while do-while 
// for - Excutes the code in number of times
// Syntax -> Initialize;Conditional;Increment
console.log("----ITERATIVE->FOR----")  
for(let i=0;i<5;i++){
    
    console.log("Iteration : "+i)
}
let numbers=[1,2,3,4,5]
console.log("----ITERATIVE->FOR->Array----") 
for(let i=3;i<5;i++){
    
    console.log("Iteration : "+numbers[i])
}
let candy="String"
console.log("----ITERATIVE->FOR->String----") 
for(let i=1;i<=5;i++){
    
    console.log("Iteration " +i+" : "+candy+" : "+i)
}

// While-> Conditionl only used
console.log("----ITERATIVE->WHILE----")
let i=0
while(i<numbers.length){
    console.log("While Array : "+numbers[i])
    i++;
}

// DO-While-> first run and next while
console.log("----ITERATIVE->DO-WHILE----")

let m=[21,23,24,554];

do{
    console.log("Do While Array element : "+m+m.length)
    i++;
}
while(m<m.length);

