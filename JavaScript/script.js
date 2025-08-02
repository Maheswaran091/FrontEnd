// Variable 
// Local Global Block
// primitive data types
// Number String Boolean Symbol Null Undefined

var varNumber=10                //Variable declered
varNumber=11                    //Update the value
var varname="String"           //Declered the string & symbol 
varname="Variable varString"   //Update the string
var varnulls=null
var varundefined


let letNumber=20               //Variable declered
letNumber=21                   //Update the value
let letname="String"           //Declered the string & symbol
letname="Variable letString"   //Update the String
let letnulls=null
let letundefined;

const constantNumber=30        //Variable declered
const constname="String"       //Declered the string  & symbol
const constnulls=null
const constundefined=undefined

console.log("Variable var :",varNumber)
console.log("Variable var :",varname)
console.log("Variable var :",varnulls)
console.log("Variable var :",varundefined)

console.log("Variable let :",letNumber)
console.log("Variable let :",letname)
console.log("Variable var :",letnulls)
console.log("Variable var :",letundefined)

console.log("Variable const :",constantNumber)
console.log("Variable const :",constname)
console.log("Variable var :",constnulls)
console.log("Variable var :",constundefined)




//Non-Primitive Data type -mutable data
//Array Object
//Array - It is a collection of data
let list=[12,21,31,41,"String",] 

console.log("index :",list[4])
list[3]=12                      //add the value, string....
list[8]=34                      //Update the value, boolean...
list[5]=null
list[6]=undefined
list[7]=true
list[20]= "Integer"              // Any index add for the value
list[7]=false
console.log("Element Length :",list.length);  // Element Length
console.log("Array :",list)

//Shallow copy -> applicable for Non-prmitive data type
let d = list;
d[1] = 54;
console.log("Shallow Copy :",d[1]);
console.log("Shallow Copy :",list[1]);

//Object - Key Value Pair -set name
let student={name:"Maheswaran" ,rollno:"091"}  //object Declered
//Object.seal(student);                          //Seal the object 
//Object.freeze(student);                        //Freeze the object
student["rollno"]="114";                       //update the values
student["Marks"]="[40,50,60,70]";             //add the new key & value
console.log(student["Roll NO :","rollno"])    // index call the value
console.log("Keys :",Object.keys(student))    //Key
console.log("Values :",Object.values(student)) // Value
console.log(student)
//Operators :
//Unary & Binary
//Unary ->  a++ -Post increment & decremment , ++a Pre Increment & Decrement

let h=10; 
let i=h++;
console.log(i)
console.log("Post Increment :",h) //post increment

let j=20; 
let k=++j;
console.log(j)
console.log("Pre Incremant :",k) //pre increment

let l=30; 
let m=l--;
console.log(m)
console.log("Post Decrement :",l) //Post Decrement

let n=40; 
let o=--n;
console.log(n)
console.log("Post Decrement :",o) //Pre Decrement


//Binary
//Arithmetic Logical relational Bitwise Assignment 

//Arithmetic -> + - * / %
console.log("a"+"a")        
console.log("Point Numbers :",0.1+0.12)        
        
console.log("2"%"a")
console.log("Sum :","2"+"2")
console.log("Sub :","2"-2)
console.log("Mul :","2"*"2")    
console.log("div :","2"/"2")  
console.log("Rem :","2"%"8")
console.log("0 is Not devided for any thing : ",0/7)
        
        
//null Arithmetic         
console.log("null add :","2"+null)                           
console.log("null sub  :",22-null)    
console.log("null mul  :","2"*null) 
console.log("null div  :","2"/null)    
console.log("null rem  :","2"%null)         
console.log("null add  :",null+null)                  
console.log("null sub  :",null-null)         
console.log("null mul  :",null*null)         
console.log("null div  :",null/null)                       
console.log("null rem  :",null%null)         
console.log("null undefined add   :",null+undefined)        
console.log("null undefined sub   :",null-undefined)                  
console.log("null undefined mul   :",null*undefined)            
console.log("null undefined div   :",null/undefined)      
console.log("null undefined rem   :",null%undefined)         
                
              
                
        
//Undefined Arithmetic         
console.log("undefined add :","2"+undefined)                           
console.log("undefined sub  :",22-undefined)    
console.log("undefined mul  :","2"*undefined) 
console.log("undefined div  :","2"/undefined)    
console.log("undefined rem  :","2"%undefined)         
console.log("undefined null add  :",undefined+null)                  
console.log("undefined null sub  :",undefined-null)         
console.log("undefined null mul  :",undefined*null)         
console.log("undefined null div  :",undefined/null)                       
console.log("undefined null rem  :",undefined%null)         
console.log("undefined add   :",undefined+undefined)        
console.log("undefined sub   :",undefined-undefined)                  
console.log("undefined mul   :",undefined*undefined)            
console.log("undefined div   :",undefined/undefined)      
console.log("undefined rem   :",undefined%undefined)        
                
                        
//Boolean Arithmetic                
//true Arithmetic                
console.log("true add :","2"+true)                           
console.log("true sub  :",22-true)    
console.log("true mul  :","2"*true) 
console.log("true div  :","2"/true)    
console.log("true rem  :","2"%true)         
console.log("true null add  :",true+null)                  
console.log("True null sub  :",true-null)         
console.log("true null mul  :",true*null)         
console.log("true null div  :",true/null)                       
console.log("true null rem  :",true%null)         
console.log("true undefined add   :",true+undefined)        
console.log("true undefined sub   :",true-undefined)                  
console.log("True undefined mul   :",true*undefined)            
console.log("True undefined div   :",true/undefined)      
console.log("True undefined rem   :",true%undefined)              
                
                        
//False Arithmetic                
console.log("false add :","2"+false)                           
console.log("false sub  :",22-false)    
console.log("false mul  :","2"*false) 
console.log("false div  :","2"/false)    
console.log("false null add  :",false+null)                  
console.log("false null sub  :",false-null)         
console.log("false null mul  :",false*null)         
console.log("false null div  :",false/null)                       
console.log("false null rem  :",false%null)         
console.log("false undefined add   :",false+undefined)        
console.log("false undefined sub   :",false-undefined)                  
console.log("false undefined mul   :",false*undefined)            
console.log("false undefined div   :",false/undefined)      
console.log("false undefined rem   :",false%undefined)               
                
//Array  Arthmetic                                 
console.log("Array Arithmetic add :",[12]+[23])               
console.log("Array Arithmetic sub :",[12]-[23])                                    
console.log("Array Arithmetic mul :",[12]*[23])               
console.log("Array Arithmetic div :",[12]/[23])                 
console.log("Array Arithmetic rem :",[12]%[23])                    
console.log("Array Arithmetic add list :",[12,23,34]+[12,23,53])                        
console.log("Array Arithmetic mul :",[12,23,34]*[12,23,53])                      
              
//Object  Arthmetic              
console.log("Object Arithmetic add :",{name:"Mahes"}+{rollno:"091"})            
console.log("Object Arithmetic mul :",{dept:"CSE"}*{section:"B"})                
                   
//Relational -> > < >= <= == !=
// It is the Comparison operators, Used to compare two values and return a boolean result (true or false)            
//Number and Number 
console.log("//-------NUMBER AND NUMBER-------//")              
console.log("Grater then :",2>13);                    
console.log("Less then :",2<13)            
console.log("Grater then Equal :",2>=13)                
console.log("Grater then Equal :",2<=13)              
console.log("Dobule Equal :",2==13)                                         
console.log("Not Equal :",2!=13)                
                        
                          
//Number and String 
console.log("//-------NUMBER AND STRING-------//")              
console.log("Grater then :",31>"Integer");                    
console.log("Less then :",41<"Script")            
console.log("Grater then Equal :",63>="Python")                
console.log("Grater then Equal :",32<="Java")              
console.log("Dobule Equal :",2=="C")                                         
console.log("Not Equal :",2!="C++")               
                
//Number and Boolean 
console.log("//-------NUMBER AND Boolean True-------//")              
console.log("Grater then :",31>true);                    
console.log("Less then :",41<true)            
console.log("Grater then Equal :",63>=true)                
console.log("Grater then Equal :",32<=true)              
console.log("Dobule Equal :",2==true)                                         
console.log("Not Equal :",2!=true)                             
//False             
console.log("//-------NUMBER AND Boolean True-------//")              
console.log("Grater then :",31>false);                    
console.log("Less then :",41<false)            
console.log("Grater then Equal :",63>=false)                
console.log("Grater then Equal :",32<=false)              
console.log("Dobule Equal :",2==false)                                         
console.log("Not Equal :",2!=false)                
                          
//Number and Null 
console.log("//-------NUMBER AND Null-------//")              
console.log("Grater then :",31>null);                    
console.log("Less then :",41<null)            
console.log("Grater then Equal :",63>=null)                
console.log("Grater then Equal :",32<=null)              
console.log("Dobule Equal :",2==null)                                         
console.log("Not Equal :",2!=null)            
                
//Number and Undefined 
console.log("//-------NUMBER AND Undefined-------//")              
console.log("Grater then :",31>undefined);                    
console.log("Less then :",41<undefined)            
console.log("Grater then Equal :",63>=undefined)                
console.log("Grater then Equal :",32<=undefined)              
console.log("Dobule Equal :",2==undefined)                                         
console.log("Not Equal :",2!=undefined)                              
              
//String and String
console.log("//-------STRING AND STRING-------//")              
console.log("Grater then :","java">"Python");                    
console.log("Less then :","C"<"C++")            
console.log("Grater then Equal :","Java">="Script")                
console.log("Grater then Equal :","hypertext"<="markup")              
console.log("Dobule Equal :","Language"=="Cascading")                                         
console.log("Not Equal :","Style"!="Sheet")               
                        
//String and Boolean True
console.log("//-------STRING AND BOOLEAN TRUE-------//")              
console.log("Grater then :","java">true);                    
console.log("Less then :","C"<true)            
console.log("Grater then Equal :","Java">=true)                
console.log("Grater then Equal :","hypertext"<=true)              
console.log("Dobule Equal :","Language"==true)                                         
console.log("Not Equal :","Style"!=true)                        
              
//False
console.log("//-------STRING AND FALSE-------//")              
console.log("Grater then :","java">false);                    
console.log("Less then :","C"<false)            
console.log("Grater then Equal :","Java">=false)                
console.log("Grater then Equal :","hypertext"<=false)              
console.log("Dobule Equal :","Language"==false)                                         
console.log("Not Equal :","Style"!=false)                 
                             
//String and Null
console.log("//-------STRING AND NULL-------//")              
console.log("Grater then :","java">null);                    
console.log("Less then :","C"<null)            
console.log("Grater then Equal :","Java">=null)                
console.log("Grater then Equal :","hypertext"<=null)              
console.log("Dobule Equal :","Language"==null)                                         
console.log("Not Equal :","Style"!=null)                
                
//String and Undefined
console.log("//-------STRING AND UNDEFINED-------//")              
console.log("Grater then :","java">undefined);                    
console.log("Less then :","C"<undefined)            
console.log("Grater then Equal :","Java">=undefined)                
console.log("Grater then Equal :","hypertext"<=undefined)              
console.log("Dobule Equal :","Language"==undefined)                                         
console.log("Not Equal :","Style"!=undefined)                           
                        
//Boolean True and True  
console.log("//-------True AND True-------//")              
console.log("Grater then :",true>true);                    
console.log("Less then :",true<true)            
console.log("Grater then Equal :",true>=true)                
console.log("Grater then Equal :",true<=true)              
console.log("Dobule Equal :",true==true)                                         
console.log("Not Equal :",true!=true)                      
              
//Boolean True and False  
console.log("//-------TRUE AND FALSE-------//")              
console.log("Grater then :",true>false);                    
console.log("Less then :",true<false)            
console.log("Grater then Equal :",false>=true)                
console.log("Grater then Equal :",false<=true)              
console.log("Dobule Equal :",true==false)                                         
console.log("Not Equal :",true!=false)                
                             
              
//Boolean True and Null  
console.log("//-------TRUE AND NULL-------//")              
console.log("Grater then :",true>null);                    
console.log("Less then :",true<null)            
console.log("Grater then Equal :",true>=null)                
console.log("Grater then Equal :",true<=null)              
console.log("Dobule Equal :",true==null)                                         
console.log("Not Equal :",true!=null)                 
                        
//Boolean True and Undefined  
console.log("//-------TRUE AND UNDEFINED-------//")              
console.log("Grater then :",true>undefined);                    
console.log("Less then :",true<undefined)            
console.log("Grater then Equal :",true>=undefined)                
console.log("Grater then Equal :",true<=undefined)              
console.log("Dobule Equal :",true==undefined)                                         
console.log("Not Equal :",true!=undefined)                  
                                    
//Boolean False and Null  
console.log("//-------FALSE AND NULL-------//")              
console.log("Grater then :",false>null);                    
console.log("Less then :",false<null)            
console.log("Grater then Equal :",false>=null)                
console.log("Grater then Equal :",false<=null)              
console.log("Dobule Equal :",false==null)                                         
console.log("Not Equal :",false!=null)                
                                        
//Boolean False and Undefined  
console.log("//-------FALSE AND UNDEFINED-------//")              
console.log("Grater then :",false>undefined);                    
console.log("Less then :",false<undefined)            
console.log("Grater then Equal :",false>=undefined)                
console.log("Grater then Equal :",false<=undefined)              
console.log("Dobule Equal :",false==undefined)                                         
console.log("Not Equal :",false!=undefined)                          
                                          
// Null and Null  
console.log("//-------NULL AND NULL-------//")              
console.log("Grater then :",null>null);                    
console.log("Less then :",null<null)            
console.log("Grater then Equal :",null>=null)                
console.log("Grater then Equal :",null<=null)              
console.log("Dobule Equal :",null==null)                                         
console.log("Not Equal :",null!=null)                 
                                      
// Null and Undefined  
console.log("//-------NULL AND UNDEFINED-------//")              
console.log("Grater then :",null>undefined);                    
console.log("Less then :",null<undefined)            
console.log("Grater then Equal :",null>=undefined)                
console.log("Grater then Equal :",null<=undefined)              
console.log("Dobule Equal :",null==undefined)                                         
console.log("Not Equal :",null!=undefined)                 
                       
              
//Logical Operator -> AND-&&   OR-||                
console.log()                            
              
                
                        
              
                
                             
              
                
                        
              
                
                             
              
                
                        
              
                
                                  