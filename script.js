const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
   // 기본값 매개변수
   event.preventDefault(); // 브라우저의 기본 동작을 실행하지 않도록 설정
   console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
//submit event 감지
