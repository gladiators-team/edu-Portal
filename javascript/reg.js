'use strict'
let regForm =document.getElementById('regForm');

function Registraion(name,password,isInstructor,major){
  this.name=name;
  this.password=password;
  this.isInstructor=isInstructor;
  this.major=major;
  Registraion.allData.push(this);
}
Registraion.allData=[];

function getUserData(e){
e.preventDefault();
let name = e.target.fullName.value;
let password= e.target.password.value;
let isInstructor=e.target.checkbox.checked;
let major=e.target.major.value;

 new Registraion(name,password,isInstructor,major);
 saveToLocal();
 Swal.fire('Incorrect Name Or Password');
 window.location.assign("/index.html");
}
regForm.addEventListener('submit',getUserData);

function saveToLocal(){
  
  
  localStorage.setItem('userData',JSON.stringify(Registraion.allData));
}
function saveData() {
  let data = JSON.parse(localStorage.getItem('userData'));
  if(data) {
     

    Registraion.allData=data;
    }
}

saveData();