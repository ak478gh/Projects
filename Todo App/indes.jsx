let title = document.getElementById('title').value;
let todos = document.getElementById('todos');
let submit = document.getElementById('submit');
console.log('check')
submit.addEventListener('click', ()=> {
    todos.append(addTodo());
})

const addTodo = (title)=> {
    return(<>
        <div id='todo'>
            <h3>{title}</h3>
        </div>
        </>
    )
}

