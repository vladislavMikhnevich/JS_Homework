function Animal(name) {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.Feed = function() {
        return 'Насыпаем в миску ' + self.dailyNorm() + ' корма.';
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.Feed;
    var self = this;

    this.Feed = function() {
        console.log(animalFeed() + '\nКот Доволен ^_^');
        return self;
    };

    this.stroke = function() {
        console.log('Гладим кота');
        return self;
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.dailyNorm(40));
console.log(barsik.dailyNorm(550));

console.log(barsik.Feed().stroke().Feed().stroke());