const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
    console.log('Not a Number');
} else {
    console.log('My Number: is ${num}');
}