import React, { useState } from 'react'
import UserList from "./UserList";

const AddUser = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        note: ""
    }); 

    const [users, setUsers] = useState([]); 

    const [submitted, setSubmitted] = useState(false); 
    const [valid, setValid] = useState(false); 

    const handleFirstNameInputChange = event => {
        setValues({...values, firstName: event.target.value})
    }
    const handleLastNameInputChange = event => {
        setValues({...values, lastName: event.target.value})
    }
    const handleEmailInputChange = event => {
        setValues({...values, email: event.target.value })
    }
    const handleNoteInputChange = event => {
        setValues({...values, note: event.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault(); 
        if(values.firstName && values.lastName && values.email){
            setValid(true); 
            setUsers(values); // do I need to explicitly type out the entire object ? 
        }
        
        setSubmitted(true); 
        setUsers(values); 
    }

  return (
    <div className="form-container">
    <form className="register-form" onSubmit={handleSubmit} >
      
      {submitted && valid && <div className="success-message">Success! Thank you for registering</div>}
      <input
        onChange={handleFirstNameInputChange}
        value={values.firstName}
        id="first-name"
        className="form-field"
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}
      <input
        onChange={handleLastNameInputChange}
        value={values.lastName}
        id="last-name"
        className="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
     
     {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span> }
      <input
        onChange={handleEmailInputChange}
        value={values.email}
        id="email"
        className="form-field"
        type="text"
        placeholder="Email"
        name="email"
      />
      {submitted && !values.email && <span id="email-error">Please enter an email address</span> }
      <input
        onChange={handleNoteInputChange}
        value={values.note}
        id="note"
        className="form-field"
        type="text"
        placeholder="Type Note here"
        name="note"
      />
      {/* Uncomment the next line to show the error message */}
     
      <button className="form-field" type="submit">
        Add User
      </button>
    </form>

    <div>
        {/* <UserList props={users} /> */}

        {console.log(users)}
    </div>

  </div>
  )
}

export default AddUser; 