const findPowerSum = (total, power, number) => {
    const value = total - Math.pow(number, power);
    if(value < 0) return 0;
    else if(value === 0) return 1;
    else
        return findPowerSum(value, power, number + 1) + findPowerSum(total, power, number + 1)
}

function processData(input) {
    const inputArray = input.split('\n').map(x => parseInt(x));
    const solution = findPowerSum(inputArray[0], inputArray[1], 1);
    console.log(solution);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
