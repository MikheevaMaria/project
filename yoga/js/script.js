window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let deadline = '2019-07-13';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

   //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Ошибка'
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST'), 'server.php';
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        
        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);

        //readystatechange ~ load
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length ; i++) {
            input[i].value = '';
        }
    });

});

/*-----------------------------*/

/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello!' + this.name);
    }
}

User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

alex.exit();*/

/*-----------------------------*/

/*class user {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log('Hello!' + this.name);
    }
    exit() {
        console.log('Пользователь ' + this.name + ' ушел');
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

alex.exit();*/

/*'use strict';

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    
    console.log(sum());
}

showThis(4, 5);
showThis(5, 5);*/

// window/undefined

/*let obj = {
    a: 20,
    b: 15,
    sum : function() {
        console.log(this);

        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();*/

// this = объект

// Конструктор (new) - this = новый созданный объект

/*let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));*/

// Указания конкретного контекста - call, apply, bind

/*let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }

    showThis();
});*/

/*--------------------------------------------*/
/*let name = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';

//интерполяция
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
};

//fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
}

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDouble(number, basis = 2) {
    //basis = basis || 2; ES5
    console.log(number*basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height*this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());
*/
