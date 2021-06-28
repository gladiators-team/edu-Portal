

'use strict';
let showCourses=document.getElementById('showCourses');
let loginToCnfirme=document.getElementById('loginToCnfirme');
let addcourse = document.getElementById('addcourse')
let displayData=document.getElementById('displayData');
let design=document.getElementById('showCourses1');
let showCourses2=document.getElementById('showCourses2');
let showCourses3=document.getElementById('showCourses3');



function Add(name, discription, cost,  instructor, image,department) {
  this.name = name;
  this.discription = discription;
  this.cost = cost;
  this.department;department;
  this.image = image;
  this.instructor = instructor;
  Add.all.push(this);
}
Add.all=[];
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
  
   
    let nameTitle = document.createElement('h2');
    showCourses.appendChild(nameTitle);
    nameTitle.textContent = `${this.name}`;
  
    let ul = document.createElement('ul');
    showCourses.appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li)
    li.textContent=this.discription;
    
    let li2 =document.createElement('li');
    ul.appendChild(li2)
    li2.textContent=this.cost;
    
    let img =document.createElement('img');
    img.src=this.image;
    showCourses.appendChild(img);  
  

  

}

function formSubmission(event) {
  event.preventDefault();
  let name = event.target.CourseName.value;
  let description = event.target.description.value;
  let instructor = event.target.instructor.value;
  let img = event.target.courseImage.value.split(',');
  let cost = event.target.cost.value;
  let department= event.target.select.value;
  let newAdd = new Add(name,description, cost,  instructor, img,department);
  newAdd.render();
  localStorage.setItem('course',JSON.stringify(newAdd));
  console.log(newAdd);
}

addcourse.addEventListener('submit', formSubmission);

console.log(Add.department);
function bt1(e){
  Add.render();
}
if (Add.department ==="design") {
  console.log('hello')
  design.addEventListener('click',bt1);
  
}