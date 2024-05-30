const clock = document.querySelector("#clock");

function getClock() {
    const hours = String(new Date().getHours()).padStart(2, "0");
    const mins = String(new Date().getMinutes()).padStart(2, "0");
    const sec = String(new Date().getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${mins}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
