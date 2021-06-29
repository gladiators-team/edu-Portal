'use strict'

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
  if (data) {
    for (let i = 0; i < data.length; i++) {
      let divElement = document.createElement('div');
      divElement.id = 'productContent';
      let pElement0 = document.createElement('p');
      let pElement1 = document.createElement('p');
      let pElement2 = document.createElement('p');
      let pElement3 = document.createElement('p');
      pElement0.id = i;
      pElement0.id = 'deleteButton';
      pElement0.textContent = 'x';
      pElement1.textContent = data[i][0];
      pElement2.textContent = data[i][1];
      pElement3.textContent = data[i][2];
      divElement.appendChild(pElement0);
      divElement.appendChild(pElement1);
      divElement.appendChild(pElement2);
      divElement.appendChild(pElement3);
      tableCart.appendChild(divElement);
    }
  }
}
renderData();

function deleteCourse(event) {
  if (event.target.id === 'deleteButton') {
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
