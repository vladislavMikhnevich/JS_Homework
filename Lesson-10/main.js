function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
    this._self = this;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if ( amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    };
    this._amount = amount;
    this._foodAmount = this._amount;

};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    var animalFeed = Animal.prototype.feed.apply(this, arguments);
    animalFeed;
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().feed());
