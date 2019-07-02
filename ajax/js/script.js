//оператор разворота
/*let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.loglog(internet);

function log(a, b, c) {
    console.loglog(a);
    console.loglog(b);
    console.loglog(c);
    console.log(a + b + c);
}

let numbers = [2, 5, 7];

log(...numbers);*/

/*-----------------JSON---------------*/
/*let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16',
        color: '#fff'
    }
};

console.log(JSON.stringify(options));
console.log(JSON.parse(JSON.stringify(options)));*/

/*-----------------AJAX----------------*/

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method (get/post), url, async (true), login, pass);

    request.open('GET', 'js/current.json');

    //настройка http-запросов
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(body);

    //status (404, 0, 200, 403)
    //statusText (not found, okay)
    //responseText ~ response
    //readyState

    //readystatechange ~ load
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Error";
        }
    });

}); 

/*---------------------------------*/

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response)
                        }
                        else {
                            reject();
                        
                        }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")
});
