const timer = document.getElementById("timer");
const timerData = ()=> timer.textContent -= 1;
let idInetrval = setInterval(() => {
    if (timer.textContent > 0) {
        timerData();
    }
    else {
        alert(`Вы победили в конкурсе!`);
        clearInterval(idInetrval);
    }
}, 1000);