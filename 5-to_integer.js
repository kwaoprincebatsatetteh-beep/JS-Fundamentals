const args = process.argv.slice(2);
let num1 = parseInt(args[0]);

if(num1.isInteger ===false || isNaN(num1)){
    console.log('Not a number');
}else{
    console.log(`My number: ${num1}`)
}