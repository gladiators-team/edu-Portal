'use strict'
let formLogin = document.getElementById('formLogin');
let login = document.getElementById('login');

function checkUser(event) {
  event.preventDefault();
    let userName = event.target.username.value;
  let userPassword = event.target.password.value;

  let userinfo = JSON.parse(localStorage.getItem('userData'));
  if (userinfo) {
    for (let index = 0; index < userinfo.length; index++) {

      if ((userinfo[index].name === userName) && (userinfo[index].password === userPassword)) {
        alert('correct login');
        window.location.assign("/homepage/index.html");
        break;
      } else {
        alert('uncorrect password');
        break;
      }
    }


  }
}
formLogin.addEventListener('submit', checkUser);
