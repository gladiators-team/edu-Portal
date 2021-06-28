'use strict'
let formLogin = document.getElementById('formLogin');
let login = document.getElementById('login');
let alert = document.getElementById('alert');


function checkUser(event) {
  event.preventDefault();
    let userName = event.target.username.value;
  let userPassword = event.target.password.value;

  let userinfo = JSON.parse(localStorage.getItem('userData'));
  if (userinfo) {
    for (let index = 0; index < userinfo.length; index++) {

      if ((userinfo[index].name === userName) && (userinfo[index].password === userPassword)) {
      
        
        window.location.assign("/index.html");
        break;
      } else {
        Swal.fire('Incorrect Name Or Password')
        break;
      }
    }


  }
}
formLogin.addEventListener('submit', checkUser);
