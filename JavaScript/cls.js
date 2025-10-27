// JavaScript Background Working For Code
// Three ways to working
// CallStack,EventLoop,CallBack Queue
// It is Based on Two ways to work on this -> 1.Synchronous  and  2.Asynchronous
// CallStack -> Function Execution Code
// EventLoop -> Intermediate
// CallBack Queue -> Waiting for Intermediate Response
 
setTimeout(()=>{                           //Time set to Print Ex:(Login page Loading For 2sec)
    console.log("setTimeout Function")     //Asynchronous
},)
// setInterval(()=>{                          //setInterval is loop It stop for use Button in Realtime web
//     console.log("setInterval Function")
// },2000)
// Promise -> is Used to convert for Synchronous to Asynchronous,It is wanted to convert for Synch to Asynch 
let prom=new Promise((res,err)=>{
    res("I'm Successfull Response1")
})
let prom1=new Promise((res,err)=>{
    err("I'm Successfull Response2")
})
let prom2=new Promise((res,err)=>{
    res("I'm Successfull Response3")
})

// Pending Fullfilled Reject
// Pending -> to process was Pending
// FullFilled -> Compleate the Process
// Reject -> Process have Error
prom.then((res)=>{
    console.log("Response : "+res)
})
.catch((err)=>{
    console.log("Error : "+err)
})




// Await -> is used for Promise, use only Function For Asynchronous Function
// It same Work for .THEN 
// It difference for .THEN and AWAIT it's only for Readability
async function getResponse(){
    let res=await prom;       //wait for the response
    console.log("Await : "+res)
}
getResponse()
console.log("Normal line")      //Synchronous
console.log("Normal line")
console.log("Normal line")

// All AllSettled Race
// All -> More Then  one Promise used
// If anyone Rejected is all are Rejected
// AllSettled -> If Anyone Rejected it Proper Reason why this rejected
// // All AllSettled Race
Promise.all([prom,prom1,prom2]).then((res)=>{
    console.log("All Promises resolved : ",res)
    

}).catch((err)=>{
    console.log("Error : ",err)
})

Promise.allSettled([prom,prom1,prom2]).then((res)=>{
    console.log("All Promises resolved : ",res)
    let fi=res.filter((e,i,array)=>{                //Using Filter Method
        return e.status=="fulfilled"
    })
    console.log(fi)

})

// Grouping   

let arr=[
  { status: 'fulfilled', value: "I'm Successfull Response1" },
  { status: 'rejected', reason: "I'm Successfull Response2" },
  { status: 'fulfilled', value: "I'm Successfull Response3" }
]
let obj={}
for(i=0;i<arr.length;i++){
    if(obj[arr[i].status]){
        obj[arr[i].status].push(arr[i])
    }
    else{
        obj[arr[i].status]=[arr[i]]
        
    }
}
console.log(obj)


