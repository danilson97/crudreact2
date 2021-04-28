import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    {id:1, name: 'Tania', username: 'tata'},
    {id:2, name: 'Craig', username: 'CR'},
    {id:3, name: 'Ben', username: 'bebe'}
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Adicionar usuário</h2>
        </div>
        <div className="flex-large">
          <h2>Vizualizar Usuários</h2>
          <UserTable users={users}/>
        </div>    
      </div>
    </div>
  )
}

export default App
