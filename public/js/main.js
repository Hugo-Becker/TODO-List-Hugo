// SELECTOR
let todoInput=document.querySelector('.todo-input');
let addTodoButton=document.querySelector('.add-todo');
let todoList=document.querySelector('.todo-list')
let todoDiv=document.querySelectorAll('.todo-div')
let editCount=0
let stillTodo=document.querySelector('.still-todo')
let done=document.querySelector('.done')
let seeAll=document.querySelector('.see-all')




// EVENTLISTENER
// add todo
addTodoButton.addEventListener('click',addTodoFunction);
document.addEventListener('keydown',function (e) {
    if(e.key==='Enter'){
        addTodoFunction()
    }
});

// check todo
todoList.addEventListener('click',CheckEditDeleteFunction)


// SHOW STILL DO
stillTodo.addEventListener('click',showTodo)
// SHOW DONE
done.addEventListener('click',hideTodo)
// SHOW ALL
seeAll.addEventListener('click',showAll)








// FUNCTIONS

// add to do
function addTodoFunction(event) {

    if (todoInput.value!="") {
        // DIV
        let todoDiv=document.createElement('div')
        todoDiv.classList.add('todo-div','current')
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
    


}

// CHECK TRACK EDIT
function CheckEditDeleteFunction(e) {

    let item=e.target; 
    // console.log(item);

    if(item.classList[0]==='todo-delete'){
        let todo=item.parentElement
        todo.remove()
    }

    if(item.classList[0]==='todo-check'){

        let todo=item.parentElement
        todo.classList.replace('current','checked')
        
    }

    if(item.classList[0]==='todo-edit'&&editCount==0){
        editCount=1
        const todo=item.parentElement
        const li=todo.querySelector('.todo-li')
        li.style.display='none'
        const inputEdit=document.createElement('input')
        inputEdit.classList.add('edit-input')
        inputEdit.type='text'
        inputEdit.value=li.innerText
        inputEdit.style.color='grey'
        todo.insertBefore(inputEdit,li)
        // validate change
        if(li.style.display==='none'){
            item.addEventListener('dblclick',function(){
                li.style.display='block'
                li.innerText=inputEdit.value
                inputEdit.remove()
                editCount=0
                })
        }
        
    }


     
    
}


// SHOW STILL TO DO
function showTodo(params) {

    let checkedTodo=document.querySelectorAll('.checked')

    checkedTodo.forEach(e=>{
        e.classList.add('muted')
    })

    let currentTodo=document.querySelectorAll('.current')
    currentTodo.forEach(e=>{
        e.classList.remove('muted')
    })


   




    
}

function hideTodo(params) {

    let currentTodo=document.querySelectorAll('.current')

    currentTodo.forEach(e=>{
        e.classList.add('muted')
    })

    let checkedTodo=document.querySelectorAll('.checked')
    checkedTodo.forEach(e=>{
        e.classList.remove('muted')
    })

    
}

function showAll(params) {

    let allTodoDivs=document.querySelectorAll('.todo-div')
    allTodoDivs.forEach(e=>{

        e.classList.remove('muted')

    })


    
}




