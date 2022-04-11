import React, { useState, useEffect } from 'react'
import TodoComponent from './TodoComponent';
import "./todoStyle.css"

const getLocalItems = () => {
    let items = localStorage.getItem("lists")
    if (items) {
        return JSON.parse(localStorage.getItem("lists"))
    }
    else {
        return [];
    }
}
const Todos = () => {
    const [todos, setTodos] = useState(getLocalItems);
    const [name, setName] = useState('');

    const createTodo = () => {
        if (name === "") {
            alert("Please enter value")
        } else {

            const todo = {
                name,
                complete: false,
                id: Math.random(),
            }
            setTodos([...todos, todo]);
            setName('')
        }
    }
    const toggleTask = (id) => {
        const updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo;
        })
        setTodos(updateTodos)
    }
    const deleteTodo = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos(updateTodos)

    }
    const updateName = (id, newName) => {
        const updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.name = newName;
            }
            return todo;
        })
        setTodos(updateTodos)
    }
    const emptyList = () => {
        setTodos([])
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(todos))
    }, [todos])

    return (
        <div className="todo-main">
            <img src="images/todo.png" alt="" />
            <div className="form-control">
                <input type="text" placeholder='✍ Add Items' value={name} onChange={e => setName(e.target.value)} />
                <button onClick={createTodo}>Create Todo</button>
            </div>
            <div className="result">
                {
                    todos.map(todo => <TodoComponent key={todo.id} {...todo} toggleTask={toggleTask} deleteTodo={deleteTodo} updateName={updateName} />)
                }

            </div>
            <button onClick={emptyList}
                style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "10px 15px",
                    outline: "none",
                    border: "none",
                    borderRadius: "2px",
                    fontWeight: "600",
                    cursor: "pointer"
                }}>
                Clear List
            </button>
        </div >
    )
}

export default Todos
