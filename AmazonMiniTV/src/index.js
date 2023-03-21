

let loginIcon = document.getElementById("loginIcon");
loginIcon.addEventListener("click", loginPopup);
let app = document.getElementById("app");

let landingPage = document.getElementById("landingPage");

function loginPopup() {
  app.style.display = "block";
  app.style.position = "fixed";
  app.style.top = "20vh";
  app.style.left = "40vw";
}

let regName = document.getElementById("regName");
let regPassword = document.getElementById("regPassword");
let regResult = document.getElementById("regResult");
let loginName = document.getElementById("loginName");
let loginPassword = document.getElementById("loginPassword");
let loginResult = document.getElementById("loginResult");

let regBtn = document.getElementById("regBtn");
let loginBtn = document.getElementById("loginBtn");

regBtn.addEventListener("click", regFun);
loginBtn.addEventListener("click", loginFun);

function regFun(event) {
  event.preventDefault();
  let userData = {
    regName: regName.value,
    regPassword: regPassword.value
  };
  let jsonData = JSON.stringify(userData);
  localStorage.setItem("userData", jsonData);
  regResult.innerText = "Registration Successful!";
}

function loginFun(event) {
  event.preventDefault();
  let jsonData = localStorage.getItem("userData");
  let actualData = JSON.parse(jsonData);

  if (
    loginName.value === actualData.regName &&
    loginPassword.value === actualData.regPassword
  ) {
    loginResult.innerText = "Login Successful";
    alert('Login Successful')
    app.style.display = "none";
  } else {
    loginResult.innerText = "Wrong username/Password!";
  }
}
