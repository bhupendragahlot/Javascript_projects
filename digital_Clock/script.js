const clock = document.getElementById('Clock');

setInterval(function () {
    let currentTime = new Date();
    clock.innerHTML = currentTime.toLocaleTimeString();
}, 1000);



const date = document.getElementById('Date');

setInterval(function () {
    let currentDate = new Date();
    date.innerHTML = currentDate.toLocaleDateString();
}, 1000);
