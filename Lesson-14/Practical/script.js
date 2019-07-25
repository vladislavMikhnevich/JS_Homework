var container = document.getElementById('container');
    firstPar = document.createElement('p');
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://yandex.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.body.getElementsByTagName('button')[0];
    linkPar1 = firstPar.children;
    linkPar2 = secondPar.children;

button.onclick = function (event) {
    for (var i = 0; i < linkPar1.length; i++) {
        linkPar1[i].classList.add('red');
    }
}

container.onclick = function (event) {
    for (var i = 0; i < linkPar2.length; i++) {
        if (linkPar2[i] === event.target) {
            event.preventDefault();
            alert(linkPar2[i].getAttribute('href'));
        }
    }
}

