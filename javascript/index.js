'use strict';

window.addEventListener('scroll', () => {
  let content = document.querySelector('.textBox');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.imgBox1');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active1');
  } else {
    content.classList.remove('active1');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.headingText');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active2');
  } else {
    content.classList.remove('active2');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.pText');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active3');
  } else {
    content.classList.remove('active3');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.service1');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active4');
  } else {
    content.classList.remove('active4');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.service2');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 0.9;
  if (contentPosition < secreenPosition) {
    content.classList.add('active5');
  } else {
    content.classList.remove('active5');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.service3');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active6');
  } else {
    content.classList.remove('active6');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.textBox2');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active7');
  } else {
    content.classList.remove('active7');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.imgBox2');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active8');
  } else {
    content.classList.remove('active8');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.headingText1');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active9');
  } else {
    content.classList.remove('active9');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.pText1');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active10');
  } else {
    content.classList.remove('active10');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.imgBox3');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight;
  if (contentPosition < secreenPosition) {
    content.classList.add('active11');
  } else {
    content.classList.remove('active11');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.headingText2');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active12');
  } else {
    content.classList.remove('active12');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.contentBox1');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active13');
  } else {
    content.classList.remove('active13');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.contentBox2');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active14');
  } else {
    content.classList.remove('active14');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.headingText3');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active15');
  } else {
    content.classList.remove('active15');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.pText2');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active16');
  } else {
    content.classList.remove('active16');
  }
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.form');
  let contentPosition = content.getBoundingClientRect().top;
  let secreenPosition = window.innerHeight / 1.5;
  if (contentPosition < secreenPosition) {
    content.classList.add('active17');
  } else {
    content.classList.remove('active17');
  }
});

let commentForm = document.getElementById('commentForm');
function Comments(name, massege) {
  this.name = name;
  this.massege = massege;
  Comments.allComments.push(this);
}
Comments.allComments = [];

let commentRender = document.getElementById('commentRender');
let renderContainer = document.createElement('div');
renderContainer.classList = 'renderContainer';
commentRender.appendChild(renderContainer);
function renderAll() {
  for (let i = 0; i < Comments.allComments.length; i++) {
    let divElement1 = document.createElement('div');
    divElement1.classList = 'renderBox';
    renderContainer.appendChild(divElement1);
    let divElement2 = document.createElement('div');
    divElement1.appendChild(divElement2);
    let pElement = document.createElement('p');
    pElement.textContent = Comments.allComments[i].massege;
    let headingElement = document.createElement('h3');
    headingElement.textContent = Comments.allComments[i].name;
    divElement2.appendChild(pElement);
    divElement2.appendChild(headingElement);
  }
}

function render(name, massege) {
  let divElement1 = document.createElement('div');
  divElement1.classList = 'renderBox';
  renderContainer.appendChild(divElement1);
  let divElement2 = document.createElement('div');
  divElement1.appendChild(divElement2);
  let pElement = document.createElement('p');
  pElement.textContent = massege;
  let headingElement = document.createElement('h3');
  headingElement.textContent = name;
  divElement2.appendChild(pElement);
  divElement2.appendChild(headingElement);
}
function createComment(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let massege = event.target.massege.value;
  console.log(event);
  let newComment = new Comments(name, massege);
  render(name, massege);
  localStorage.setItem('data', JSON.stringify(Comments.allComments));
  Swal.fire({
    icon: 'success',
    title: 'Thank you for your comment!',
    showConfirmButton: false,
    timer: 1500,
  })
  commentForm.reset();
}
commentForm.addEventListener('submit', createComment);
function updateData() {
  let allData = JSON.parse(localStorage.getItem('data'));
  if (allData) {
    Comments.allComments = allData;
  }
  renderAll();
}
updateData();
