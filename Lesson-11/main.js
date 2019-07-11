// TASK 1

function filterArr(arr) {
    var newArr = arr.filter(function (number) {
        return number > 0;
    });
    return newArr;
}

filterArr([-1, 0, 2, 34, -2]);


// TASK 2

function findArr(arr) {
    var newArr = arr.find(function (number) {
        return number > 0;
    });
    return newArr;
}

findArr([-1, 0, 2, 34, -2]);

// TASK 3

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('шалаш'));
console.log(isPalindrome('привет'));
console.log(isPalindrome('шалаШ'));

// TASK 4

function areAnagrams(word, test) {
    return word.toLowerCase().split("").sort().join("") === test.toLowerCase().split("").sort().join("");
}

console.log(areAnagrams('кот', 'окт'));
console.log(areAnagrams('кот', 'акт'));

// TASK 5

function divideArr(arr, size) {
    var result = [];

    for (var i = 0, leng = arr.length; i < leng; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));




