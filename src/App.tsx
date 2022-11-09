import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import TodoItem from './Components/TodoItem'
import UserItem from './Components/UserItem'
import TodoItemPage from './Page/TodoItemPage'
import UsersPage from './Page/UsersPage'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import UserItemPage from './Page/UserItemPage'
import TodosPage from './Page/TodosPage'

const App = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/users">UsersPage</Nav.Link>
            <Nav.Link as={Link} to="/todos">TodosPage</Nav.Link>
            {/* <Nav.Link as={Link} to="/users/:id">UserItemPage</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/todos/:id">TodoItemPage</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/users/:id' element={<UserItemPage/>}/>
        {/* <Route path='/todos/:id' element={<TodoItemPage/>}/> */}
      </Routes>
      
    </div>
  )
}

export default App