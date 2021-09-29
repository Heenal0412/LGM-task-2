import React, { useState } from "react";
import './App.css'
const App=()=>{

  const [users, setUser] = useState([]);

  const loadUsers = async()=>{
    console.log("Hello");
    const response = await fetch('https://reqres.in/api/users?page=1');

    const json = await response.json();

    setUser(json.data);
  };

  return (
      <React.Fragment>
          <div className="App">
            <header>
                <h1 class="logo">ZippY</h1>
                <button onClick={ loadUsers }>Get Users</button>
            </header>
            
            <ul class="points">

              {users.map(({ id, email, first_name, last_name, avatar })=> (
              <li class="list" key = {id}>
                <img class="dp" src={avatar}></img>
                
                <li class="subli" id="name">Name - {first_name} {last_name}</li>
              
                <li class="subli" id="email">Email - {email}</li>
                
                </li>
                ))}
            </ul>
          </div>
      </React.Fragment>
      );
};

export default App;