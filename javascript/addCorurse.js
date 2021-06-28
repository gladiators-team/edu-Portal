

'use strict';
let loginToCnfirme=document.getElementById('loginToCnfirme');
let addcourse = document.getElementById('addcourse')
let displayData=document.getElementById('displayData');



function Add(name, discription, cost,  instructor, image) {
  this.name = name;
  this.discription = discription;
  this.cost = cost;

  this.image = image;
  this.instructor = instructor;
}

function checkUser(event) {
  event.preventDefault();
    let userName = event.target.name.value;
  let userPassword = event.target.password.value;

  let userinfo = JSON.parse(localStorage.getItem('userData'));
  if (userinfo) {
    for (let index = 0; index < userinfo.length; index++) {

      if ((userinfo[index].name === userName) && (userinfo[index].password === userPassword)&&(userinfo[index].isInstructor===true)) {
        coursesNames.style.display = "flex";
        break;
      } else {
        alert('You are not instructor');
        break;
      }
    }


  }
}
loginToCnfirme.addEventListener('submit', checkUser);

Add.prototype.render = function () {
  
  let articleElement = document.createElement('article');
  allCourses.appendChild(articleElement);

  let nameTitle = document.createElement('h2');
  articleElement.appendChild(nameTitle);
  nameTitle.textContent = `${this.name}`;

  let ul = document.createElement('ul');
  displayData.appendChild(ul);
  let li = document.createElement('li');
  ul.appendChild(li)
  li.textContent=this.discription;
  
  let li2 =document.createElement('li');
  ul.appendChild(li2)
  li2.textContent=this.cost;
  
  let img =document.createElement('img');
  img.src=this.image;
    displayData.appendChild(img);



  


}




function formSubmission(event) {
  event.preventDefault();
  let name = event.target.CourseName.value;
  let description = event.target.description.value;
  let instructor = event.target.instructor.value;
  let img = event.target.courseImage.value.split(',');
  let cost = event.target.cost.value;

  let newAdd = new Add(name,description, cost,  instructor, img);
  newAdd.render();

  console.log(newAdd);
}

addcourse.addEventListener('submit', formSubmission);
