import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
       <ul></ul>
       
      </header>
    </div>
  )
}

export default App
