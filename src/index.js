let tasks=document.getElementById('tasks');
let input=document.getElementById('new-task-description');
let form=document.getElementById('create-task-form');
let tasklist=[];
form.addEventListener("submit", function(){
  let submittedTask="";
  submittedTask=input.value;
  taskList.push(submittedTask);
  addList(taskList);
});

function addList(a){let list="";
 for(let i=0; i<a.length; i++){
   list+=`<li>`+a[i]+`</li>`;}
   tasks.innerHTML=list;}