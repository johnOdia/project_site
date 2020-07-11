//challenge 1
let array = []

const render = () => {
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            array.push(i)
        }
    }
    let sum = array.reduce((a, b) => a + b, 0)
    alert(`The sum of the multiples of 3 & 5 less than 1000 is ${sum}!`);
}

//challenge 2
const insert = () => {
    let num = prompt('Enter a number!');
    let str = num.toString();
    let output = [str[0]];
    for (let i = 1; i < num.length; i++) {
        if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
            output.push('-', num[i]);
        }
        else {
            output.push(num[i]);
        }
    }
    alert('Here\'s your Dashed number: ' + output.join(''));
}

//challenge 3
let freq = 0;
let modeFreq = 1
let arrayItem;

const mode = () => {
    alert('separate all items in the array with a comma (",")')
    let userInput = window.prompt('Enter an array!').split(',');
    for (let i = 0; i < userInput.length; i++) {
        for (let j = i; j < userInput.length; j++) {
            if (userInput[j] === userInput[i]) {
                freq++;
            }
            if (freq > modeFreq) {
                modeFreq = freq;
                arrayItem = userInput[i];
            }
        }
        freq = 0;
    }
    alert(`The mode is: ${arrayItem} (${modeFreq} times!)`);
}

