// SELECTOR
todoInput=document.querySelector('.todo-input');
addTodoButton=document.querySelector('.add-todo');
todoList=document.querySelector('.todo-list')
todoDiv=document.querySelector('.todo-div')




// EVENTLISTENER
// add todo
addTodoButton.addEventListener('click',addTodoFunction);
// check todo
todoList.addEventListener('click',CheckEditDeleteFunction)





// FUNCTIONS

// add to do
function addTodoFunction(event) {
    // DIV
    let todoDiv=document.createElement('div')
    todoDiv.classList.add('todo-div')
    todoList.appendChild(todoDiv)
    // LI
    let todoLi=document.createElement('li')
    todoLi.innerText=todoInput.value
    todoLi.classList.add('todo-li')
    todoDiv.appendChild(todoLi)
    // CHECK BUTTON
    let todoCheck=document.createElement('button')
    todoCheck.innerHTML='<i class="fas fa-check-circle"></i>'
    todoCheck.classList.add('todo-check')
    todoDiv.appendChild(todoCheck)
    // EDIT BUTTON
    let todoEdit=document.createElement('button')
    todoEdit.innerHTML='<i class="far fa-edit"></i>'
    todoEdit.classList.add('todo-edit')
    todoDiv.appendChild(todoEdit)
    // DELETE BUTTON
    let todoDelete=document.createElement('button')
    todoDelete.innerHTML='<i class="far fa-trash-alt"></i>'
    todoDelete.classList.add('todo-delete')
    todoDiv.appendChild(todoDelete)

    // empty onput
    todoInput.value=""


}


function CheckEditDeleteFunction(e) {

    let item=e.target; 
    // console.log(item);

    if(item.classList[0]==='todo-delete'){
        let todo=item.parentElement
        todo.remove()
    }

    if(item.classList[0]=='todo-check'){

        let todo=item.parentElement
        let li = todo.querySelector('.todo-li')
        li.innerText.style.textDecoration='line-through'




    }


     
    
}


