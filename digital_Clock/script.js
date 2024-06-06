const Clock = document.getElementById('Clock');
// const Clock = document.querySelector('#clock'); //same^


setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    Clock.innerHTML =date.toLocaleTimeString();
}, 1000);