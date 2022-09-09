const clock = document.querySelector("h2#clock");

function getClock() {
   const date = new Date();
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   //date가 num이기 때문에 String으로 변환해서 .padStart로 "0" 텍스트(string) 추가
   clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
