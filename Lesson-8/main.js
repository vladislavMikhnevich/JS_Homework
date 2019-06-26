function Animal(name) {
    var foodAmount = 50;

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

    this.animalFeed = function() {
        return 'Насыпаем в миску ' + this.dailyNorm() + ' корма.';
    };
}

function Cat(name) {

    Animal.apply(this, arguments);

    var feed = this.animalFeed;

    this.stroke = function() {

        console.log('Гладим кота');
        return this;
    };

    this.animalFeed = function() {

        console.log(feed.call(this) + '\nКот Доволен ^_^');
        return this;
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.dailyNorm(40));
console.log(barsik.dailyNorm(550));

console.log(barsik.animalFeed().stroke().animalFeed());