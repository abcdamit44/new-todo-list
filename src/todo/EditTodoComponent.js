import React, { useState } from 'react'

const EditTodoComponent = ({ name, id, updateName }) => {
    const [newName, setNewName] = useState(name)
    return (
        <>
            <input type='text' placeholder="Edit Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => updateName(id, newName)}>Update Name</button>
        </>
    )
}

export default EditTodoComponent