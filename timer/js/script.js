//let timerId = setTimeout(sayHello, 3000);
//clearTimeout(timerId);

//let timerId = setInterval(sayHello, 3000);
//clearTimeout(timerId);

//function sayHello() {
//  console.log('Hello World!');
//}

//let timerId = setTimeout(function log() {
//    console.log('Hello!');
//    setTimeout(log, 2000);
//});

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let position = 0,
        id = setInterval(frame, 10);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.first')) {
        console.log('Hello!');
    }
});
