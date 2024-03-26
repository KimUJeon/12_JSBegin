const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);
// setInterval 과 유사한 기능임- 한번만 사용
// setTimeout(sayHello, 5000);