

  let todos = [];

function addTodo() {  

    const todoTitle = document.querySelector("#inp-text").value;

    if (todoTitle !== '') {
        todos.push({
            title: todoTitle
        });
        document.querySelector("#inp-text").value = '';
         render();
    } else {
        console.error("Input field is empty or not found");
    }
    
};

function taskdelete(index){
 todos.splice(index,1);
 render();
}

function taskedit(index){
 const inpuEle = document.querySelector(`#taskInputEdit${index}`);

 if(inpuEle){
    inpuEle.removeAttribute("readonly");
    inpuEle.focus();

    const length = inpuEle.value.length;
    inpuEle.setSelectionRange(length, length);
 }
}

function tdone(index){
  const edited=document.querySelector(`#taskInputEdit${index}`);
    if(edited) {
    edited.value = edited.value;
    edited.setAttribute("readonly", "readonly");
   }
  
 }

function createTodoComponent(todos,index){
   
  const div = document.createElement("div")
   div.innerHTML=`<div class="Tasks">
        <input type="text" id="taskInputEdit${index}" value="${todos.title}" readonly>
        <button onclick="tdone(${index})"><img src="./assets/check-line (1).svg" alt=""></button>
        <button onclick="taskedit(${index})"><img src="./assets/pencil.svg" alt=""></button>
        <button onclick="taskdelete(${index})"><img src="./assets/delete.svg" alt=""></button>
     </div>`

  return div;
}


function render(){
  document.querySelector("#task-cards").innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        const element = createTodoComponent(todos[i], i);
        document.querySelector("#task-cards").appendChild(element);
      }
}





