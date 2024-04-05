/* 
Model      => Retrieve, store, process data
View       => User interface
Controller => Manage view and data & handle users actions
*/

const Api = (() => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const todos = fetch(url).then((res) => res.json())
    return {
        todos
    }
})()

const View = (() => {
    const domStr = {
        container: '.todolist_container',
        inputBox: '#user-input',
        addBtn: '#addBtn'
    }

    const creatTemp = (arr) => {
        let temp = ''
        arr.forEach((todo, index) => {
            temp += `<li><span>${todo.title}</span><button class="deleteBtn" data-index="${index}">Delete</button></li>`
        })
        return temp;
    }

    const render = (element, temp) => {
        element.innerHTML = temp
    }

    return {
        domStr,
        creatTemp,
        render
    }
})()

const Model = ((view, api) => {
    const { domStr, creatTemp, render } = view
    const { todos } = api

    class State {
        constructor() {
            this._todoList = []
        }

        getTodoList() {
            return this._todoList
        }

        setTodoList(arr) {
            this._todoList = arr
            const selected_html = document.querySelector(domStr.container)
            const temp = creatTemp(this._todoList)
            render(selected_html, temp)
        }
    }

    return {
        todos,
        State
    }
})(View, Api)

const Controller = ((view, model) => {
    const { domStr, creatTemp, render } = view
    const { todos, State } = model

    const newState = new State()
    const init = () => {
        todos.then(data => newState.setTodoList(data));
    }

    const addTodo = () => {
        const userInput = document.querySelector(domStr.inputBox)
        const btn = document.querySelector(domStr.addBtn)

        btn.addEventListener('click', () => {
            const inputValue = userInput.value.trim();
            if (inputValue !== '') {
                let item = { 
                    title: userInput.value 
                }
                const newTodos = [item, ...newState.getTodoList()] 
                newState.setTodoList(newTodos) 
                userInput.value = "" 
            }
        })
    }

    const deleteTodo = () => {
        const container = document.querySelector(domStr.container);

        container.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            const newTodos = [...newState.getTodoList()];
            newTodos.splice(index, 1);
            newState.setTodoList(newTodos);
        });
    }

    const bootstrap = () => {
        init()
        addTodo()
        deleteTodo()
    }

    return {
        bootstrap
    }

})(View, Model)

Controller.bootstrap();
