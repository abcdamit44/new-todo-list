import React, { useState } from 'react'
import EditTodoComponent from './EditTodoComponent'

const TodoComponent = ({ name, complete, id, toggleTask, deleteTodo, updateName }) => {
    const [showUpdate, setShowUpdate] = useState(false)
    return (
        <>
            <div className='todo-list'>
                {name}
                <button onClick={() => toggleTask(id)}
                    style={{
                        backgroundColor: complete ? 'lightgreen' : 'lightsalmon',
                        padding: '5px 10px',
                        outline: "none",
                        border: "1px solid royalblue",
                        margin: "0 10px"
                    }}>
                    {complete ? 'Competed' : 'Not Complete'}
                </button>

                <div style={{ display: 'flex' }}>
                    <button onClick={() => deleteTodo(id)} style={{
                        backgroundColor: "red",
                        color: "white",
                        outline: "none",
                        border: "none",
                        padding: "5px 7px",
                        fontSize: "10px",
                        borderRadius: "3px"
                    }}>X</button>
                    <button style={{
                        backgroundColor: "royalblue",
                        color: "white",
                        outline: "none",
                        border: "none",
                        padding: "5px 7px",
                        fontSize: "10px",
                        borderRadius: "3px",
                        margin: '0 10px'
                    }} onClick={() => setShowUpdate(!showUpdate)}>Edit</button>

                    {showUpdate ? <EditTodoComponent updateName={updateName} name={name} id={id} /> : null}
                </div>

            </div>
        </>
    )
}

export default TodoComponent
