'use strict'
let showUserName = document.getElementById('showUserName');

function showName() {
  let userName = JSON.parse(localStorage.getItem('userData'));
  if (userName) {
    for (let i = 0; i < userName.length; i++) {
      showUserName.textContent = userName[i].name;
    }
  }
}
showName();

let showDataCart = document.getElementById('showDataCart');
let tableCart = document.getElementById('tableCart');
function renderData() {
  let data = JSON.parse(localStorage.getItem('cart'));
  console.log(data);
  if (data) {
    for (let i = 0; i < data.length; i++) {
      let trElement = document.createElement('tr');
      let tdElement0 = document.createElement('td');
      let tdElement1 = document.createElement('td');
      let tdElement2 = document.createElement('td');
      let tdElement3 = document.createElement('td');
      tdElement0.id = i;
      tdElement0.textContent = 'x';
      tdElement1.textContent = data[i][0];
      tdElement2.textContent = data[i][1];
      tdElement3.textContent = data[i][2];
      trElement.appendChild(tdElement0);
      trElement.appendChild(tdElement1);
      trElement.appendChild(tdElement2);
      trElement.appendChild(tdElement3);
      tableCart.appendChild(trElement);
    }
  }
}
renderData();

function deleteCourse(event) {
  console.log(event.target.id);
  cartItems.splice(0, 1);
  console.log(cartItems);
}

tableCart.addEventListener('click', deleteCourse);
let cartItems = [];

let cartData = JSON.parse(localStorage.getItem('cart'));
if (cartData) {
  cartItems = cartData;
}
console.log(cartItems);