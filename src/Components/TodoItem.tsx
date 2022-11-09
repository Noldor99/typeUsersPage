import React, { FC, useState } from 'react'
import { ITodo } from '../types/types';
import { Container, Form, InputGroup, ListGroup } from 'react-bootstrap';


interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
 
  const [checked, setChecked] = useState(todo.completed);

  return (
      <Container className='mt-3'>
        <InputGroup className="mb-1 ">
          <InputGroup.Checkbox 
            aria-label="Checkbox for following text input" 
            checked={checked}
            onClick={()=>setChecked(!checked)}
            />
          <Form.Control  
          value={`${todo.id}. ${todo.title}`}
          /> 
            
        </InputGroup>
      </Container>
  );
};

export default TodoItem
