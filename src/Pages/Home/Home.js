import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import "./index.css";



const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/dashboard");



    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  const token = localStorage.getItem('token');


  return (

    <>
      <div className="main-container hidden lg:block">
        <div className="top-container">
          <h1 className="top-text">CBT Examination</h1>

        </div>
        <div className="gray-container">
          <h1 className="gray-container-text" >Welcome to online examination portal</h1>
        </div>
        <div className="login-card">
          <h1 className="heading">User ID</h1>
          <form onSubmit={handleSubmit} >
            <div className="form-field">
              <input
                className="form"
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              

            </div>
            <div className="form-field">
              <input
                className="form"
                type="password"
                placeholder="Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button-login"> Login</button>

          </form>
          

        </div>
      </div>
      <div className="flex md:block lg:hidden justify-content-center mobile-view"> 
        <h1 className="mobile-view">Please login from Computer / Laptop</h1>
      </div>
      </>



  )

}


export default Home;