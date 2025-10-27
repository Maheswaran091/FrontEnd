// JSON to Stringfy
// JSON -> Object
obj={Success:[{status:"fulfilled"}],failiure:[{status:"rejected"}]}
console.log(JSON.stringify(obj)) // convert to JSON to Stringfy

// Stringify to JSON
let stringObj='{"Success":[{"status":"fulfilled"}],"failiure":[{"status":"rejected"}]}'
console.log(JSON.parse(stringObj)["Success"])