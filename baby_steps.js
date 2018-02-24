var sum = 0;

for (idx=2; idx<process.argv.length; idx++){
    sum = sum + Number(process.argv[idx])
}

console.log(sum)