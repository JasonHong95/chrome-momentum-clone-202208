const clock = document.querySelector("h2#clock");

function getClock() {
   const date = new Date();
   //    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock(); //사이트가 로딩되는 즉시 시간을 바로 보여주고 그 후 1초마다 계속 호출
setInterval(getClock, 1000);
