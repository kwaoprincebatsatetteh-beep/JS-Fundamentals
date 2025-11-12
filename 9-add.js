//const args = proces.argv.splice(2)
//let num1 = parseInt(args[0])
//let num2 = parseInt(args[1])
const [,, num1, num2] = process.argv;
const add = (a,b) =>{
return a+b;
}

let results = add(parseInt(num1),parseInt(num2))
console.log(results);