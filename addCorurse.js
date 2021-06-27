

'use strict';

let kittenProcoursesNamesfiles = document.getElementById('kittenProfiles');
let addcourse = document.getElementById('addcourse')
let displayData=document.getElementById('displayData');

// console.log(catForm);

function Cat(name, discription, cost,  instructor, image) {
  this.name = name;
  this.discription = discription;
  this.cost = cost;

  this.image = image;
  this.instructor = instructor;
}

Cat.prototype.render = function () {
  // Create a new Element
  // add a text to the new element
  // append the child to the parent
  // this.getAge(3, 12);
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

  let newCat = new Cat(name,description, cost,  instructor, img);
  newCat.render();

  console.log(newCat);
}

addcourse.addEventListener('submit', formSubmission);

// console.log(getRandomNumber(3, 12))