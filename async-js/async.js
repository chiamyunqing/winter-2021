//js event loop: https://www.youtube.com/watch?v=EI7sN1dDwcY

//async http request
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get','data.json',async);
xhr.send();

//3 seconds have passed
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp);

//listeners are registered after the send() functionn
function listener() {
    console.log('greetings');
}
xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);


//race condition
setTimeout(function delayed() {
    function listener() {
        console.log('greetings');
    }
    xhr.addEventListener('load', listener);
    xhr.addEventListener('error', listener);
}, 0);
