//1. Display numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//--------------------------------------------------------------------------------------------

//2. Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}
//--------------------------------------------------------------------------------------------

//3. Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
    let result = i * 7;
    console.log(`7 * ${i} = ${result}`);
}
//--------------------------------------------------------------------------------------------

//4. Print all the multiplication tables with numbers from 1 to 10
const nums = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 };
for (const num in nums) {
    for (i = 1; i <= 10; i++) {
        let result = i * nums[num];
        console.log(`${nums[num]} * ${i} = ${result}`);
    }
}
//--------------------------------------------------------------------------------------------

//5. Calculate the sum of numbers from 1 to 10
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum = nums.reduce(reducer);
//console.log(sum); --- output: 55

//--------------------------------------------------------------------------------------------

//6. Calculate 10!
let tens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const factorialize = (product, value) => product * value;
let result = tens.reduce(factorialize);
//console.log(result); --- output 3628800

//--------------------------------------------------------------------------------------------

//7. Calculate the sum of odd numbers greater than 10 and less than 30
let odds = [];
for (let i = 11; i < 30; i += 2) {
    odds.push(i);
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum = odds.reduce(reducer);
//console.log(sum); --- output: 200

//--------------------------------------------------------------------------------------------

//8. Calculate the sum of numbers in an array of numbers
let anyNumbers = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum = anyNumbers.reduce(reducer);
//console.log(sum); --- output: 10

//--------------------------------------------------------------------------------------------

//9. Calculate the average of the numbers in an array of numbers
let someNumbers = [57, 14, 27, 23, 9];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum = someNumbers.reduce(reducer);
const averageNumb = () => sum / someNumbers.length;
//console.log(averageNumb()); --- output: 26

//--------------------------------------------------------------------------------------------

//10. Create a function that receives an array of numbers and returns an array containing only the positive numbers
const variousNumbers = [-13, 258, 2, -14, 23, -27, 123, -57, 67];
const posNumb = (value) => {
    return value >= 0;
};
const positiveNumbers = variousNumbers.filter(posNumb);
//console.log(positiveNumbers); --- output: [ 258, 2, 23, 123, 67 ]

//--------------------------------------------------------------------------------------------

//11. Find the maximum number in an array of numbers
const allNumb = [1, 527, 37, 9, 1054, 2, -4, 57];
const maxNumb = Math.max(...allNumb);
//console.log(maxNumb); --- output: 1054

//--------------------------------------------------------------------------------------------

//12. Create a function that will return a Boolean specifying if a number is prime
const primeOrNot = (number) => {
    let isPrime = true;
    if (number === 1) {
        return `1 is neither prime nor composite number`;
    } else if (number > 1) {
        //looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            //The condition number % i == 0 checks if the number is divisible by numbers other than 1 and itself.
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    } else {
        return false;
    }
};

/*console.log(primeOrNot(1)); --- output: 1 is neither prime nor composite number
console.log(primeOrNot(10)); --- output: false
console.log(primeOrNot(11)); --- output: true*/

//--------------------------------------------------------------------------------------------

//13. Calculate the sum of digits of a positive integer number
const digitSum = (num) => {
    let numArr = num.toString().split(''); //converting the number into a string and then to an array
    //now we convert numbers into integers
    const integerTransform = (a, b) => {
        return parseInt(a) + parseInt(b);
    };
    let sum = numArr.reduce(integerTransform);
    if (sum <= 9) {
        return sum;
    } else {
        let newNumArr = sum.toString().split('');
        return newNumArr.reduce(integerTransform); //for cases like sum of 1+2+3+4=10 so 1+0=1
    }
};
/*console.log(digitSum(1234)); --- output: 1 (1+2+3+4=10, 1+0=1)
console.log(digitSum(9434)); --- output: 2 (9+4+3+4=20, 2+0=2)*/

//--------------------------------------------------------------------------------------------

//14. Print the first 100 prime numbers
const first100Primes = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i == 1 || i == 0) {
            continue;
        }

        flag = 1;

        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            console.log(i + ' ');
        }
    }
};
//first100Primes(541);

//--------------------------------------------------------------------------------------------

//15. Rotate an array to the left 1 position
let arr = [1, true, 'banana', 1984, 'Constance', 24];
let arr2 = arr.shift();
arr.push(arr2);
//console.log(arr); --- output: [ true, 'banana', 1984, 'Constance', 24, 1 ]

//--------------------------------------------------------------------------------------------

//16. Reverse an array
const myArray = ['hello', 'there', 30, true];
const reversedArray = myArray.reverse();
//console.log(reversedArray); --- output: [ true, 30, 'there', 'hello' ]

//--------------------------------------------------------------------------------------------

//17. Create a function that will merge two arrays and return the result as a new array
const arrConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};
//console.log(arrConcat([true, 14, 'Elba'], [false, 'Jim', 78])); -- output: [ true, 14, 'Elba', false, 'Jim', 78 ]

//--------------------------------------------------------------------------------------------

//18. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const noRepeatElem = (arr1, arr2) => {
    return arr1
        .concat(arr2)
        .filter((item) => !arr1.includes(item) || !arr2.includes(item));
};
//console.log(noRepeatElem([1, 2, 3, 4, 5], [2, 78, 1, 324, 5])); -- output: [ 3, 4, 78, 324 ]

//--------------------------------------------------------------------------------------------

//19. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const distinctNumbers = (arr) => {
    let distinctArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!distinctArr.includes(arr[i])) {
            distinctArr.push(arr[i]);
        }
    }
    return distinctArr;
};
//console.log(distinctNumbers([-1, 2, 9, 57, -1, 10, 324, 7, 9])); --- output: [-1, 2, 9, 57, 10, 324, 7]

//--------------------------------------------------------------------------------------------

//20. Create a function that will return the number of words in a text
const wordsNumber = (arr) => {
    return arr.toString().split(' ').length;
};
/*console.log(
    wordsNumber([
        'Here is a random text and we need a function that will return the number of words in it.',
    ])
); --- output: 19*/
