//Map & Set
// Map
// which used in the Array Iteration methods
// Which is act as Class
// Similar for Object. It is Not delete the keys and values 
console.log("---Map---")
let m=new Map();
m.set("name",'Sam')// to add the Keys and values
console.log(m)
m.set("age","30") 
console.log(m)
console.log(Array.from(m.values()))//to get values (Array.from->is remove the (Output :(Map Iterator))
console.log(Array.from(m.keys()))//to get Keys (Array.from->is remove the (Output :(Map Iterator))
console.log(Array.from(m.entries())) //to get Keys & Values (Array.from->is remove the (Output :(Map Iterator))
console.log(m.get("name")) // Get the Key and Values
m.delete("age") // To remove the key and values
console.log(m)
console.log(m.has("age")) // To find the Key and values in Object
m.clear() // To clear the Entire Object
console.log(m)


// SET -> Set is not Accecpted for Duplicate values
console.log("---Set---")
let a=[2,3,4,1,5,4,7,9,5,6,9,0,5,1]
let s=new Set(a)
console.log(s)
console.log(s.size)





