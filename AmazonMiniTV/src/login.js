import "./login.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
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

function regFun() {
  let userData = {
    regName: regName.value,
    regPassword: regPassword.value
  };
  let jsonData = JSON.stringify(userData);
  localStorage.setItem("userData", jsonData);
  regResult.innerText = "Registration Successful!";
}

function loginFun() {
  let jsonData = localStorage.getItem("userData");
  let actualData = JSON.parse(jsonData);

  if (
    loginName.value === actualData.regName &&
    loginPassword.value === actualData.regPassword
  ) {
    loginResult.innerText = "Login Successful";
  } else {
    loginResult.innerText = "Wrong username/Password!";
  }
}
