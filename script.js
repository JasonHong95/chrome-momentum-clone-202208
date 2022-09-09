const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
   const username = loginInput.value;
   console.log("Hello ", loginInput.value);
   if (username === "") {
      alert("please write your name.");
   } else if (username.length > 15) {
      alert("Your name is too long");
   } else {
      alert("Welcome");
   }
   // JS로도 작업할 수도있지만 HTML form의 기능을 활용하는 것이 좋다. ex) required, maxlength 등...
}

loginButton.addEventListener("click", onLoginBtnClick);
