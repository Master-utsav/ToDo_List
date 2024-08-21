const cursor = new MouseFollower({
  el: null,
  container: document.body,
  className: 'mf-cursor',
  innerClassName: 'mf-cursor-inner',
  textClassName: 'mf-cursor-text',
  mediaClassName: 'mf-cursor-media',
  mediaBoxClassName: 'mf-cursor-media-box',
  iconSvgClassName: 'mf-svgsprite',
  iconSvgNamePrefix: '-',
  iconSvgSrc: '',
  dataAttr: 'cursor',
  hiddenState: '-hidden',
  textState: '-text',
  iconState: '-icon',
  activeState: '-active',
  mediaState: '-media',
  stateDetection: {
      '-pointer': 'a,button',
      '-hidden': 'iframe'
  },
  visible: true,
  visibleOnState: false,
  speed: 0.55,
  ease: 'expo.out',
  overwrite: true,
  skewing: 0,
  skewingText: 2,
  skewingIcon: 2,
  skewingMedia: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  stickDelta: 0.15,
  showTimeout: 20,
  hideOnLeave: true,
  hideTimeout: 300,
  hideMediaTimeout: 300
});




let todos = [];

function addTodo() {  

    const todoTitle = document.querySelector("#inp-text").value;

    if (todoTitle !== '') {
        todos.push({
            title: todoTitle,
            completed: false
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

function strik(index){
  const checkBox = document.querySelector(`#check-box${index}`);
  const taskText = document.querySelector(`#taskInputEdit${index}`);

 todos[index].completed =!todos[index].completed;
  
 if (checkBox.checked) {
  taskText.classList.add('completed');
 } else {
  taskText.classList.remove('completed');
 }

}


function createTodoComponent(todos,index){
   
  const div = document.createElement("div")
   div.innerHTML=`<div class="Tasks">
    <input type="checkbox" id="check-box${index}" onchange="strik(${index})" ${todos.completed ? "checked" : ""} value="${todos.title}"/>
        <input type="text" id="taskInputEdit${index}" value="${todos.title}" readonly>
        <button onclick="tdone(${index})"><img src="assets/check-line (1).svg" alt=""></button>
        <button onclick="taskedit(${index})"><img src="assets/pencil.svg" alt=""></button>
        <button onclick="taskdelete(${index})"><img src="assets/delete.svg" alt=""></button>
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




//animation part



