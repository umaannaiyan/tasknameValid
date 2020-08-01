
const taskName=document.querySelector("#taskName");
const description=document.querySelector("#description");
const assignee=document.querySelector("#assignee");
const taskDate=document.querySelector("#taskDate");
const status=document.querySelector("#status");
const btnSave=document.querySelector("#btnSave");
const btnReset=document.querySelector("#btnReset");
const btnClose=document.querySelector("#btnClose");

// Collecting task name value
const taskNameValue=document.querySelector("#taskName").value;
const descriptionValue=document.querySelector("#description").value;
const assigneeValue=document.querySelector("#assignee").value;
const taskDateValue=document.querySelector("#taskDate").value;
const statusValue=document.querySelector("#status").value;
const btnSaveValue=document.querySelector("#btnSave").value;
const btnResetValue=document.querySelector("#btnReset").value;
const btnCloseValue=document.querySelector("#btnClose").value;

taskNameValue.value =null;
descriptionValue.value=null;
assigneeValue.value=null;
taskDateValue.value=null;
statusValue.value=null;
btnSaveValue.value=null;
btnResetValue.value=null;
btnCloseValue.value=null;


taskName.addEventListener("input",function(event){
    if (event.target.value && event.target.value.length >= 3) {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
    } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
    }
    });

// alert(taskNameValue);
// Task Name Validation

// Michaels validation

// document.addEventListener('DOMContentLoaded',function ()
// form.addEventListener('submit', function(event) 
//      {
//         var forms = document.getElementsByClassName('needs-validation');
//         var validation = Array.prototype.filter.call(forms, function (form){
//             btnSave.addEventListener(
//                 'click',
//                 function( event){
//                     if(form.checkValidity() === false){
//                         event.preventDefault();
//                         event.stopPropagation();
//                     }
//                     handleAddTask();
//                     form.classList.add('was-validated');
//                     alert("You have successfully Added your task");
//                 },
//                 false
//             );

//         });

//     });


///copied from bootstrap for validation by uma

// (function() {
//     'use strict';
//     document.addEventListener('load', function() {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName('needs-validation');
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         btnSave.addEventListener('click', function(event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated');
//         }, false);
//       });
//     }, false);
//   })();






//Task form validation by Anindha

taskName.addEventListener("input",function(event){
if (event.target.value && event.target.value.length >= 3) {
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
} else {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
}
});



// let descriptionValue=document.querySelector("#description").value;
// let assignee=document.querySelector("#assignee");
// let taskDate=document.querySelector("#taskDate");