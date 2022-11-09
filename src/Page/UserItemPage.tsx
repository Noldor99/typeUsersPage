import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../types/types'

interface UserItemPageParams {
  id: string;
}

const UserItemPage:FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
      fetchUser()
  }, [])

  async function fetchUser() {
      try {
          const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
          setUser(response.data)
      } catch (e) {
          alert(e)
      }
  }

  return (
    <Container className='mt-3'>
    <Card className="text-center">
      <Card.Header> <h3>Страница пользователя {user?.name}</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        {user?.email}
        </Card.Text>
        <Card.Text>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
        </Card.Text>
        <Button 
          className='d-flex' 
          variant="primary"
          onClick={() => navigate('/users')}
          >Go back</Button>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default UserItemPage