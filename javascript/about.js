'use strict';
let vewName = document.getElementById('vewName');
let loginName = document.getElementById('loginName');
function showName() {
  let name = JSON.parse(localStorage.getItem('nameUser'));
  if (name) {
    loginName.style.display = 'none';
    vewName.style.display = 'inline-block';
    vewName.textContent = 'Log Out';
  }
}
showName();
function logOut(e) {
  vewName.style.display = 'none';
  loginName.style.display = 'inline-block';
  localStorage.removeItem('nameUser');
}
vewName.addEventListener('click', logOut);
