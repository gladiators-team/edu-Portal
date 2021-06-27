'use strict';

let showCourses = document.getElementById('coursesBox');
let designCourses = [
  ['Creative thinking using Adobe photoshop', 'Tawfeeq Alnajar', '$20'],
  ['Branding using Adobe illustrator', 'Waleed Afifi', '$25'],
  ['Design layout using Adobe Indesign', 'Adham Mhaydat', '$15'],
  ['Social Media Design', 'Ahmad Abdulraheem', '$15'],
  ['WEB AND DIGITAL DESIGN', 'Moayad Alhaj', '$15'],
  ['INTERIOR AND PRODUCT DESIGN', 'Afnan shihab', '$15'],
  ['INDUSTRIAL DESIGN', 'Ghofran Aljabr', '$15'],
  ['VISUAL DESIGN', 'Moayad Alhaj', '$20']];
let programmingCourse = [
  ['Introduction to Game Development', 'Tawfeeq Alnajar', '$20'],
  ['Web Programming with JavaScript', 'Waleed Afifi', '$25'],
  ['Introduction to Computer Science', 'Adham Mhaydat', '$15'],
  ['Understanding Technology', 'Ahmad Abdulraheem', '$15'],
  ['Introduction to Programming with Scratch', 'Moayad Alhaj', '$15'],
  ['Computer Science for Business', 'Afnan shihab', '$15'],
  ['Business Analytics Program', 'Ghofran Aljabr', '$15'],
  ['Using Python for Research', 'Moayad Alhaj', '$20']];
let marketingCourse = [
  ['Digital marketing', 'Tawfeeq Alnajar', '$20'],
  ['Social media marketing', 'Waleed Afifi', '$25'],
  ['Mega Digital Marketing', 'Adham Mhaydat', '$15'],
  ['Digital Marketing Secrets', 'Ahmad Abdulraheem', '$15'],
  ['Facebook Marketing', 'Moayad Alhaj', '$15'],
  ['Digital Marketing Strategy 2021', 'Afnan shihab', '$15'],
  ['Digital Marketing', 'Ghofran Aljabr', '$15'],
  ['Zero Budget Marketing System', 'Moayad Alhaj', '$20']];
let renderCourses = document.getElementById('renderCourses');

function render(courses) {
  let divElement = document.createElement('div');
  divElement.classList = 'row';
  if (courses) {
    document.getElementById('renderCourses').innerHTML = "";
    divElement = document.createElement('div');
    divElement.classList = 'row';
  }
  renderCourses.appendChild(divElement);
  for (let i = 0; i < courses.length; i++) {
    let divElement2 = document.createElement('div');
    divElement2.classList = 'column';
    divElement.appendChild(divElement2);
    let hElement = document.createElement('h3');
    hElement.textContent = courses[i][0];
    divElement2.appendChild(hElement);
    let pElement = document.createElement('p');
    pElement.textContent = courses[i][1];
    divElement2.appendChild(pElement);
    let pElement2 = document.createElement('p');
    pElement2.textContent = `price: ${courses[i][2]}`;
    divElement2.appendChild(pElement2);
    let pElement3 = document.createElement('p');
    pElement3.textContent = 'Using a conversational tone and an approach that emphasizes the creative process, this book offers inspiration and suggestions on using Photoshop, illustrated with the author\'s own extensive collection of original work.';
    divElement2.appendChild(pElement3);
    let button = document.createElement('button');
    button.id = `add${i}`;
    button.textContent = 'Add To Cart';
    divElement2.appendChild(button);
  }
}

function clearRender() {

}

function showResults(event) {
  let courses;
  if (event.target.id === 'showCourses1') {
    courses = designCourses;
    render(courses);
  } else if (event.target.id === 'showCourses2') {
    courses = programmingCourse;
    render(courses);
  } else if (event.target.id === 'showCourses3') {
    courses = marketingCourse;
    render(courses);
  }
}


showCourses.addEventListener('click', showResults);
