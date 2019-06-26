// Task 1

function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
}

var barsik = new Cat('Barsik');

barsik.feed()

// Task 2

﻿
﻿
function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

barsik = null;

