'use strict'
let showUserName=document.getElementById('showUserName');

function showName(){
  let userName = JSON.parse(localStorage.getItem('userData'));
  if(userName){
    for(let i=0;i<userName.length;i++){
    showUserName.textContent=userName[i].name;
  }
}
}
showName();