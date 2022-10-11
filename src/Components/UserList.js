import React, {useState} from 'react'

const UserList = props => {
    

  return props.map( user => {
    return <p>{user.firstName}</p>
  })
}

export default UserList