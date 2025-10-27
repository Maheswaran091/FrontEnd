let postsElement=document.querySelector("#posts")
fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    return res.json()
})
.then((data)=>{
    data.forEach(item => {
        postsElement.innerHTML+=`
                            <div>
                                <h1>${item.id} - [API's]</h1>
                                <p>${item.body}</p>
                            </div>
        `
        
    });
})