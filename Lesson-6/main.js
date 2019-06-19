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

function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    this.setDailyNorm = function(amount) {

        if (amount > 500) {
            throw new Error('Нельзя насыпать корма, больше чем 500 гр.');
        }

        if (amount < 50) {
            throw new Error('Нельзя насыпать корма, меньше чем 50 гр.');
        }
        foodAmount = amount;
    };

    this.getDailyNorm = function() {
        return foodAmount;
    };

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
}

var barsik = new Cat('Barsik');

barsik.setDailyNorm(49);
barsik.feed();
