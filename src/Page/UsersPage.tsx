import axios from 'axios';
import React, { FC, useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import List from '../Components/List';
import UserItem from '../Components/UserItem';
 
import { IUser } from '../types/types';

const UsersPage:FC = () => {
   
   const [users, setUsers] = useState<IUser[]>([])

    const navigate = useNavigate()
  async function fetchUsers(){
    const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(res.data)
  }

  console.log(users)
  useEffect(() => {
    fetchUsers()
  }, []);

 
  return (
    <div>
        <div style={{height:"20px"}}></div>
     <List 
      items={users}
      renderItem ={(user: IUser)=>
        <UserItem
          onClick={(user)=>navigate('/users/'+ user.id)}
          user={user}
          key={user.id}
        />
      }
      /> 
    </div>
  )
}

export default UsersPage
 