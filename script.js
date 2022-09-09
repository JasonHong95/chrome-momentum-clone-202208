const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 반복되는 string들을 대문자 변수로 저장하면 오류를 줄일 수 있다.
// string은 오타가 나도 오류 검출이 안되나 변수명이 오타가 나면 에러가 뜨기 때문에 문제점을 알기 쉽다.

function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME); // HTML form에 "hidden" class 추가
   const username = loginInput.value;
   //    greeting.innerText = "Hello " + username; // string과 변수를 합치는 입력방법 1

   greeting.innerText = `Hello ${username}`; // string과 변수를 합치는 입력방법 2
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
