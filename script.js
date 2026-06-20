let inputBox = document.querySelector('.toDo input')
let btn = document.querySelector('.toDo button')
let listContainer = document.querySelector('.list-container')


btn.addEventListener('click',()=>{
  document.querySelector('.tasksHeading').style.display = 'none';
  if(inputBox.value === ''){
    alert('You must write something!!')
  }else{
    let li = document.createElement('li')
    let div = document.createElement('div');
    div.id = 'tasksDiv'
    let tasksChecked = document.createElement('input');
    tasksChecked.type = 'checkbox'
    let paragraph = document.createElement('p')
    paragraph.innerHTML = inputBox.value;

   // yaha pr strike through lagana hai
   tasksChecked.addEventListener('change',()=>{
  if(tasksChecked.checked == true){
    paragraph.style.textDecorationLine = 'line-through';
   paragraph.style.textDecorationThickness = '3px';
   paragraph.style.textDecorationColor = 'red';
  }else{
   paragraph.style.textDecorationLine = 'none'
  }
})

    div.appendChild(tasksChecked)
    div.appendChild(paragraph)
    let deleteBtn = document.createElement('button');
    let spanBtn = document.createElement('span');
    spanBtn.className ='material-symbols-outlined close';
    spanBtn.innerHTML = 'close'
    deleteBtn.appendChild(spanBtn);

       li.append(div, deleteBtn);
      listContainer.appendChild(li)

       //deletebtn ka function 
       spanBtn.addEventListener('click',()=>{
       li.remove()
        if(listContainer.children.length === 1){
       document.querySelector('.tasksHeading').style.display = 'block';
    }
       })
       
      }
  inputBox.value = ''
 
 
})


//chaho to ye add kr skte hai
// Enter key se task add ho
// Completed task count
// Local Storage (page refresh ke baad tasks na haten)
// Edit task button
