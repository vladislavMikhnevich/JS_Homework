// TASK 1

function arrayEdit(name) {
    return name.map(function (i) {
        return {name: i};
    });
}

var arr = ['Vasya', 'Vasya', 'Vasya'];

console.log(arrayEdit(arr));

// TASK 2

function clock(arr) {
    console.log('Текущее время ' + arr.join(':'));
}

clock(['00', '13', '24']);

// TASK 3

function vowel(word) {
    var amount = 0;
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

    word.split('').map(function (letter) {
        vowels.map(function (value) {

            if (letter.toLowerCase() === value) {
                amount++;
            }
        });
    });
    return amount;
}

console.log(vowel('Работает'));

// TASK 4

function getText(word) {
    var signs = word.split(/[?!.]+/);

    for (var i = 0; i < signs.length; i++) {
        var words = signs[i];
        var sum = 0;

        for (var j = 0; j < words.length; j++) {
            if (words[j] !== ' ' && words[j] !== ',') {
                sum++;
            }
        }
        console.log(signs[i] + ' : ' + sum + ' букв')
    }
}

var word = 'Здесь есть знаки? Может, быть. Или нет?';

getText(word);



