var td = document.getElementsByTagName('td');
    table = document.getElementsByClassName('table')[0];
    button = document.getElementsByClassName('newTr')[0];

button.onclick = function (event) {
    table.children[0].insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
    event.stopPropagation();
};

table.onclick = test;

function test(event) {
    var target = event.target;

    for (var i = 0; i < td.length; i++) {
        if (target !== td[i]) {
            continue;
        }
        var cells = td[i].textContent;
        td[i].innerHTML = '<input>';
        var input = document.getElementsByTagName('input')[0];
        input.focus();
        input.value = cells;
        input.onblur = function () {
            input.parentNode.textContent = input.value;
        };
        input.onkeypress = function (event) {
            if (event.keyCode !== 13) {
                return;
            }
            input.blur();
        };
    }
}

