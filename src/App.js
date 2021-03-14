import React, { useState } from 'react';
import UserForm from "./components/Form";
import './App.css';

const App = (props) => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };


  return (
    <div className="App">
      <UserForm
        inputs={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;