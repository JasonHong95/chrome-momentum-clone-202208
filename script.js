const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
   const username = loginInput.value;
   console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);

// Form태그 안에 있는 Button을 누르거나 type이 submit인 input을 클릭하면 자동으로 submit을 하기때문에
// 브라우저가 새로고침하지 않고 User 정보를 저장하기 위해서는 JS로 submit 되는 걸 막아줘야 한다.
