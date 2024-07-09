import React, { useState } from 'react';
import '../styles/Signup.css';
import { useNavigate, Link } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const url = 'http://localhost:5000/api'
  const url = "https://mern-todo-0k5p.onrender.com"


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle user login logic here, e.g., send a POST request to your backend.

    try {
      const response = await fetch(`${url}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
      })

      const data = response.json();
      if(response.status == 201){
        console.log(data);
        navigate('/login')
      }
      else{
        throw new Error("User not registered");
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <h5>Already Register? <Link to='/login' >Login here</Link> </h5>

    </div>
  );
};

export default Signup;
