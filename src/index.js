let tasks=document.getElementById('tasks');
let input=document.getElementById('new-task-description');
let form=document.getElementById('create-task-form');
let tasklist=[];
form.addEventListener("submit", function(){
  let submittedTask="";
  submittedTask=input.value;
  taskList.push(submittedTask);
});

function addList(a){let list="";
 for(let i=0; i<taskList.length; i++){
   list+=
 }