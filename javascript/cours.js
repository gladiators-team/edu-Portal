'use strict';

let showCourses = document.getElementById('coursesBox');
let designCourses = [
  ['Creative thinking using Adobe photoshop', 'Tawfeeq Alnajar', '$20', 'Using a conversational tone and an approach that emphasizes the creative process, this book offers inspiration and suggestions on using Photoshop, illustrated with the author\'s own extensive collection of original work.'],
  ['Branding using Adobe illustrator', 'Waleed Afifi', '$25', 'Illustrator is the industry-standard vector graphics application that lets you create logos, icons, sketches, typography and complex illustrations for print, web, interactive, video and mobile devices.'],
  ['Design layout using Adobe Indesign', 'Adham Mhaydat', '$15', 'Adobe InDesign is the industry-leading layout and page design software. Create beautiful graphic designs with typography from the world՚s top foundries and imagery from Adobe Stock. Quickly share content and feedback in PDF. '],
  ['Social Media Design', 'Ahmad Abdulraheem', '$15', 'This course is packed full of exciting, valuable lessons that teach you exactly how to create beautiful graphics that will help turn your online presence into something truly remarkable.'],
  ['WEB AND DIGITAL DESIGN', 'Moayad Alhaj', '$15', 'The course will equip you with all the skills necessary to understand information and interface design, and the ability to plan and design a multi-page website project, for both desktop and mobile.'],
  ['INTERIOR AND PRODUCT DESIGN', 'Afnan shihab', '$15', 'Designing contemporary furniture for volume production or creating one-off bespoke designs - technology, innovation, and style hold the key to success.'],
  ['INDUSTRIAL DESIGN', 'Ghofran Aljabr', '$15', 'ndustrial designers apply design principles to products intended for mass production. Product design must account for the complex nature of a production pipeline, and the design process usually involves multiple components.'],
  ['VISUAL DESIGN', 'Moayad Alhaj', '$20', 'Gain fluency in the fundamental tools of visual communication design — typography, color, and layout. GA’s visual design advisory board curates the innovative teaching approaches.']];
let programmingCourse = [
  ['Introduction to Game Development', 'Tawfeeq Alnajar', '$20', 'The course explores principles of 2D and 3D graphics, animation, sound, and collision detection using frameworks like Unity and LÖVE 2D, as well as languages like Lua and C#.'],
  ['Web Programming with JavaScript', 'Waleed Afifi', '$25', 'Topics include database design, scalability, security, and user experience. Through hands-on projects, you\'ll learn to write and use APIs, create interactive UIs, and leverage cloud services like GitHub and Heroku.'],
  ['Introduction to Computer Science', 'Adham Mhaydat', '$15', 'It aims to provide students with an understanding of the role computation can play in solving problems.'],
  ['Understanding Technology', 'Ahmad Abdulraheem', '$15', 'Designed for students who work with technology every day but don’t necessarily understand how it all works underneath the hood or how to solve problems when something goes wrong,'],
  ['Introduction to Programming with Scratch', 'Moayad Alhaj', '$15', 'Course that is a fundamental course for all students who are new to computer programming. This course introduces a student to the world of Scratch, which is a block-based programming language that was created at MIT.'],
  ['Computer Science for Business', 'Afnan shihab', '$15', 'course with a focus on innovation and cutting-edge technology. To get the best from the course you need to be interested in exploring how organisations work and how they can be improved and in developing clear logical ideas'],
  ['Business Analytics Program', 'Ghofran Aljabr', '$15', 'Beginning with basic descriptive statistics and progressing to regression analysis, you’ll implement analytical techniques in Excel and apply fundamental quantitative methods to real business problems'],
  ['Using Python for Research', 'Moayad Alhaj', '$20', 'This course bridges the gap between introductory and advanced courses in Python. Go deep enough to apply Python skills to research projects.']];
let marketingCourse = [
  ['Digital marketing', 'Tawfeeq Alnajar', '$20', 'This course introduces students to the science of web analytics while casting a keen eye toward the artful use of numbers found in the digital space. '],
  ['Social media marketing', 'Waleed Afifi', '$25', 'Develop an engaging and effective social media strategy for your business Build an inbound social media strategy that delights your customers and grows your bottom line Leverage.'],
  ['Mega Digital Marketing', 'Adham Mhaydat', '$15', 'Find your target audience, easily convince them to become your customer and buy your products. Build a effective website for marketing and sale from scratch (no coding!).'],
  ['Digital Marketing Secrets', 'Ahmad Abdulraheem', '$15', 'This course covers all of Digital Marketing\'s major topics with a focus on Inbound Marketing and Growth Hacking techniques.'],
  ['Facebook Marketing', 'Moayad Alhaj', '$15', 'This course includes everything you need to know to improve and optimize your paid and organic Facebook efforts. This course is meant for marketers looking for actionable and impactful ways to use this popular social network.'],
  ['Digital Marketing Strategy 2021', 'Afnan shihab', '$15', 'Digital marketing is an innovative way to attract a large audience to your online project. By learn varity marketing techniques that you can use, such as social media marketing, content marketing, email marketing, search engine optimization.'],
  ['Search Engine Optimization', 'Ghofran Aljabr', '$15', 'Learn to optimize website content for the best possible search engine ranking. Also, the theory behind Google search and other search engine algorithms.'],
  ['Zero Budget Marketing System', 'Moayad Alhaj', '$20', 'This course shows how to leverage free online resources to drive amazing web traffic and grow your business. Structured method for building a foundation, and then connecting all your sites.']];
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
    pElement3.textContent = courses[i][3];
    divElement2.appendChild(pElement3);
    let button = document.createElement('button');
    button.type = 'submit';
    button.id = i;
    button.textContent = 'Add To Cart';
    divElement2.appendChild(button);
  }
}
let courseTypeId;
function showResults(event) {
  courseTypeId = event.target.id;
  if (courseTypeId) {
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
}


showCourses.addEventListener('click', showResults);

let courseForm = document.getElementById('courseForm');

function addCourse(event) {
  console.log(event);
  if (courseForm.style.visibility === 'hidden') {
    courseForm.style.visibility = 'visible';
  } else {
    courseForm.style.visibility = 'hidden';
  }
  event.preventDefault();
  let courseName = event.target.courseName.value;
  let instructorName = event.target.instructorName.value;
  let cost = `$${event.target.cost.value}`;
  let description = event.target.description.value;
  let courseType = event.target.courseType.value;
  if (courseType === 'design') {
    designCourses.push([courseName, instructorName, cost, description]);
    render(designCourses);
    localStorage.setItem('designCourses', JSON.stringify(designCourses));
    courseTypeId = 'showCourses1';
  } else if (courseType === 'programming') {
    programmingCourse.push([courseName, instructorName, cost, description]);
    render(programmingCourse);
    courseTypeId = 'showCourses2';
  } else if (courseType === 'marketing') {
    marketingCourse.push([courseName, instructorName, cost, description]);
    render(marketingCourse);
    courseTypeId = 'showCourses3';
  }
  Swal.fire({
    icon: 'success',
    title: 'This course has been added',
    showConfirmButton: false,
    timer: 1500,
  })
  courseForm.style.visibility = 'hidden';
  courseForm.reset();
}

courseForm.addEventListener('submit', addCourse);

let showbtn = document.getElementById('showbtn');
function showfom(event) {
  if (courseForm.style.visibility === 'visible') {
    courseForm.style.visibility = 'hidden';
    showbtn.textContent = 'Add Course';
  } else {
    courseForm.style.visibility = 'visible';
    showbtn.textContent = 'close';
  }
}
showbtn.addEventListener('click', showfom);

let cartItems = [];

function addToCart(event) {
  if (event.target.id) {
    if (courseTypeId === 'showCourses1' && !cartItems.includes(designCourses[event.target.id])) {
      cartItems.push(designCourses[event.target.id]);
    } else if (courseTypeId === 'showCourses2' && !cartItems.includes(programmingCourse[event.target.id])) {
      cartItems.push(programmingCourse[event.target.id]);
    } else if (courseTypeId === 'showCourses3' && !cartItems.includes(marketingCourse[event.target.id])) {
      cartItems.push(marketingCourse[event.target.id]);
    }
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
}
renderCourses.addEventListener('click', addToCart);

function getData1() {
  let designData = JSON.parse(localStorage.getItem('designCourses'));
  let programmingData = JSON.parse(localStorage.getItem('designCourses'));
  let marketingData = JSON.parse(localStorage.getItem('designCourses'));
  if (designData) {
    designCourses = designData;
    programmingData = programmingData;
    marketingData = marketingData;
  }
}
getData1();