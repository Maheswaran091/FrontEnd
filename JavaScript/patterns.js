// Pattern Problems
// Lower Left Pattern 
console.log("----Lower Left Pattern----")
let row=5;
let cols=1;
let star=""
for(i=1;i<=row;i++){
    for(j=1;j<=cols;j++){
        star+="* "
    }
    star+='\n'
    cols+=1
    
}

console.log(star)

// Upper Left Pattern 
console.log("----Upper Left Pattern----")
let row1=5;
let cols1=row1*2-1;
let star1=""
for(i=1;i<=row1;i++){
    for(j=1;j<=cols1;j++){
        star1+="* "
    }
    star1+='\n'
    cols1-=2
    
}

console.log(star1)

// Lower Right Pattern
console.log("----Lower Right Pattern----")
let row3=5;
let cols3=1;
let space=row3*2-2;
let star3=""
for(i=1;i<=row3;i++){
    for(k=1;k<=space;k++){
        star3+="  "
    }
    for(j=1;j<=cols3;j++){
        star3+="* "
    }
    star3+='\n'
    cols3+=2
    space-=2
    
}

console.log(star3)


// Upper Right Pattern 
console.log("----Upper Right Pattern----")
let row4=7;
let cols4=1;
let space4=row4*2-2;
let star4=""

for(i=1;i<=row4;i++){
    for(j=1;j<=cols4;j++){
        star4+=" "
    }
    for(k=i;k<=row4;k++){
        star4+="* "
    }
    star4+="\n"
    cols4+=2
}
console.log(star4)


// Pyramid Upper Pattern 
console.log("----Pyramid Upper Pattern----")
let row5=5;

let star5="";
for(i=row5;i>=0;i--){
    space5=i*2-1;
    
    for(j=1;j<=i;j++){
        star5+="  "
    }
    
    for(k=space5;k<=9;k++){
         star5+="* "
     }
    
    star5+="\n";
    
    
}
console.log(star5)

//Pyramid Down Pattern
console.log("----Pyramid Down Pattern----")
let row6 =6;
let star6="";
let num=1;

 for(i=1;i<=row6;i++){
    for(l=0;l<=row6;l++){

    }
    space6=(i*2)-1
    for(j=1;j<=i;j++){
        star6+="  "
    }
    for(k=space6;k<=9;k++){
    star6+="* "
    }
    star6+='\n'
}

console.log(star6)

// Pyramid Upper and Lower Pattern
console.log("----Pyramid Upper and Lower Pattern----")
let row7=5;

let star7="";
for(i=row7;i>=0;i--){
    space7=i*2-1;
    
    for(j=1;j<=i;j++){
        star7+="  "
    }
    
    for(k=space7;k<=9;k++){
         star7+="* "
     }
    
    star7+="\n";
}
 for(i=1;i<=row7;i++){
    for(l=0;l<=row7;l++){

    }
    space7=(i*2)-1
    for(j=1;j<=i;j++){
        star7+="  "
    }
    for(k=space7;k<=9;k++){
    star7+="* "
    }
    star7+='\n'
}
    
console.log(star7)

//Pattern Taks
// Pyramid Pattern Number
console.log("----Pyramid Pattern Number : 1----")
let row8=9;
let cols8=1;
let result8=""
for(i=1;i<=row8;i++){
    for(j=1;j<=row8-i;j++){
        result8+=" "
    }
    for(k=1;k<=i;k++){
        result8+=i+" ";
    }
    result8+="\n";
    cols8+=2;
}
console.log(result8)

// Pyramid Pattern Number
console.log("----Pyramid Pattern Number : 2----")
let row9=9;
let cols9=1;
let result9=""
for(i=1;i<=row9;i++){
    let num=1;
    for(j=1;j<=row9-i;j++){
        result9+=" "
    }
    for(k=1;k<=i;k++){
        result9+=(num++) +" ";
    }
    result9+="\n";
    cols9+=2;
}
console.log(result9)

// Pyramid Pattern Up Star
console.log("----Pyramid Pattern Star : 3----")
let row10=9;
let cols10=1;
let result10=""
for(i=1;i<=row10;i++){
    for(j=1;j<=row10-i;j++){
        result10+=" "
    }
    for(k=1;k<=i;k++){
        result10+="*" +" ";
    }
    result10+="\n";
    cols10+=2;
}
console.log(result10)

// Pyramid Pattern Number
console.log("----Pyramid Pattern Star : 4----")
let row11=9;
let result11=""
let space11=row11*1-1
for(i=1;i<=row11;i++){
    for(l=1;l<=space11;l++){
        result11+="  "
    }
    for(j=1;j<=i;j++){
        result11+=j+" "
    }
    for(k=i-1;k>=1;k--){
        result11+=k+ " ";
    }
    result11+="\n";
    
    space11-=1
}
console.log(result11)

// Pyramid Pattern Number 9 to 1
console.log("----Pyramid Pattern Number : 5----")
let row12=9;
let result12=""
let space12=row12*1-1
for(i=row12;i>=1;i--){
    for(l=1;l<=space12;l++){
        result12+="  ";
    }
    for(j=i;j<=row12;j++){
        result12+=j+" ";
    }
    for(k=row12-1;k>=i;k--){
        result12+=k+ " ";
    }
    result12+="\n";
    
    space12-=1
}
console.log(result12)

// Pyramid Pattern Down
console.log("----Pyramid Pattern Star:6----")
let row13=9;
let cols13=1;
let result13=""
for(i=row13;i>=1;i--){
    for(j=1;j<=row13-i;j++){
        result13+=" "
    }
    for(k=1;k<=i;k++){
        result13+="*"+" ";
    }
    result13+="\n";
    cols13+=2;
}
console.log(result13)


// Pyramid Pattern Number
console.log("----Pyramid Pattern Number:7----")
let row15=9;
let cols15=1;
let result15=""
for(i=row15;i>=1;i--){
    for(j=1;j<=row15-i;j++){
        result15+=" "
    }
    for(k=1;k<=i;k++){
        result15+=i+" ";
    }
    result15+="\n";
    cols15+=2;
}
console.log(result15)













