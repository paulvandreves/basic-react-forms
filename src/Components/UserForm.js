import React, {useState} from 'react'

const UserForm = props => {
const [input, setInput] = useState(props.edit ? props.edit.value : ''); 

const handleChange = e => setInput(e.target.value); 

  return (
    <div>UserForm</div>
  )
}

export default UserForm