let user = {
  userName: "",
  passWord: "",
  retypePassWord: "",
};
let name = document.getElementById("name");
let age = document.getElementById("age");
let address = document.getElementById("address");
let password = document.getElementById("password");
let repass = document.getElementById("repass");

function signup() {
  if (name.value === "") {
    name.style.borderColor = "red";
  } else if (age.value === "") {
    age.style.borderColor = "red";
  } else if (address.value === "") {
    address.style.borderColor = "red";
  } else if (password.value === "") {
    password.style.borderColor = "red";
  } else if (repass.value === "") {
    repass.style.borderColor = "red";
  } else {
      addValue();
  }
}
function addValue() {
  user.userName = name.value;
  user.age = age.value;
  user.address = address.value;
  user.passWord = password.value;
  user.retypePassWord = repass.value;
  console.log(user);
}

function checkLogin() {
  let nameLogin = document.getElementById("nameLogin");
  let passwordLogin = document.getElementById("passwordLogin");
  if (nameLogin.value != user.userName) {
    confirm("Tên đăng nhập ko đúng");
  } else if (passwordLogin.value != user.passWord) {
    confirm("Mật khẩu sai");
  }
}
function login() {
  checkLogin();
}
