import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const emailid = "admin@gmail.com";
  const loginpassword = "admin@123";

  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.current.value === emailid && password.current.value === loginpassword) {
     
      navigate("/postitems");
    } else {
      alert("Error in login");
    }
  };

   return (
    <>
    <Navbar />
    <div className='main-container'>
              

      <div className="restaurant-login-card">
        <h2>Restaurant Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" ref={email} placeholder="Enter your email" required />

          <label>Password:</label>
          <input type="password" name="password" ref={password} placeholder="Enter password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Admin;
