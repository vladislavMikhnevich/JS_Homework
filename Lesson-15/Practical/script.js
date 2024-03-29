var container = document.getElementById('container');
firstPar = document.createElement('p');
secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://yandex.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.body.getElementsByTagName('button')[0];
    linkPar1 = firstPar.children;

button.onclick = function () {
    for (var i = 0; i < linkPar1.length; i++) {
        linkPar1[i].classList.add('red');
    }
};

container.onclick = function (event) {
    if (event.target.tagName === 'A' && event.target.parentElement === secondPar) {
        event.preventDefault();

        if (localStorage.getItem(event.target.innerHTML)) {
            return alert(JSON.parse(localStorage.getItem(event.target.innerHTML)).path);
        }

        else {
            localStorage.setItem(event.target.innerHTML, JSON.stringify({path: event.target.href}));
            alert('Ссылка добавлена в хранилище');
        }
    }
};

window.onload = function () {
    localStorage.clear();
};
