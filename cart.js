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

let cartItems = [];
function getData() {
  let cartData = JSON.parse(localStorage.getItem('cart'));
  if (cartData) {
    cartItems = cartData;
  }
}
getData();

function clearCart() {
  while (tableCart.firstChild) {
    tableCart.removeChild(tableCart.firstChild);
  }
}

function renderData() {
  let data = JSON.parse(localStorage.getItem('cart'));
  console.log(data);
  if (data) {
    for (let i = 0; i < data.length; i++) {
      let divElement = document.createElement('div');
      divElement.id = 'productContent';
      let pElement0 = document.createElement('p');
      let h3Element1 = document.createElement('h3');
      let h3Element2 = document.createElement('h3');
      let pElement3 = document.createElement('p');
      pElement0.id = i;
      pElement0.textContent = 'x';
      h3Element1.textContent = data[i][0];
      h3Element2.textContent = data[i][1];
      pElement3.textContent = data[i][2];
      divElement.appendChild(pElement0);
      divElement.appendChild(h3Element1);
      divElement.appendChild(h3Element2);
      divElement.appendChild(pElement3);
      tableCart.appendChild(divElement);
    }
  }
}
renderData();

function deleteCourse(event) {
  if (event.target.id) {
    cartItems.splice(event.target.id, 1);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(cartItems));
    Swal.fire({
      icon: 'success',
      title: 'This course has been deleted',
      showConfirmButton: false,
      timer: 1500,
    })
    clearCart();
    renderData();
  }
}
tableCart.addEventListener('click', deleteCourse);
