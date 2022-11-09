import React from 'react'
import { Card, Container, Button, ListGroup} from 'react-bootstrap'
import { IUser } from '../types/types'

 
interface UserItemProps{
  user: IUser
  onClick: (user: IUser)=> void
 
}

const UserItem = ({user, onClick}:UserItemProps) => {
  
  const newLocal = () => {
    if(user.id % 2){
      return 'primary'
    } 

  }


  return (
    <Container className='mt-1'>

    <ListGroup onClick={()=>onClick(user)}>
      <ListGroup.Item 
        action 
        variant={newLocal()}
        >{user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.city
      }</ListGroup.Item>
      {/* <ListGroup.Item action variant="success">Success</ListGroup.Item> */}
    </ListGroup>
   </Container> 
  )
}

export default UserItem