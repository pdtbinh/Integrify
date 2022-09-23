import { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Users, User } from "./components/Users";

const appStyle = {
  'display': 'flex',
  'flexDirection': 'row',
  'alignItems': 'center',
  'justifyContent': 'center',
}

// Requirement 1: Use functional React component
function App() {

  // Requirement 2: Use React useState
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const fetched = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(fetched.data)
  }

  // Requirement 3: Use React useEffect
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Router>
      <div style={appStyle}>
        <Routes>
          <Route exact path='/' element={<Users users={users}/>}/>
          <Route exact path='/:id' element={<User users={users}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;