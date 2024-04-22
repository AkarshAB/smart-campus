import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Login.css'
import Header from '../../Components/Header/Header.jsx'


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [id, setId] = useState({})
  // const navigate = useNavigate()
  const [requiredUsername, setRequiredUsername] = useState()
  const [requiredPassword, setRequiredPassword] = useState()

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fadeIn to true after component mounts
    setFadeIn(true);
  }, []);


  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      handleLogin()
    }
  }

  const handleLogin = async () => {
    if (!username && !password) {
      setRequiredPassword('')
      setRequiredUsername('')
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter Both Credentials",
      });
      return;


    }
    else if (!password) {
      setRequiredUsername('')
      setRequiredPassword("Please enter your password")
      return; //to stop further execution of the function.

    }
    else if (!username) {
      setRequiredPassword("")
      setRequiredUsername('This field is Required')

      return
    }
  };


  return (
    <>
    <Header />
      <div className={`loginMidWrapper ${fadeIn ? 'fade-in' : ''}`}>
        <div className="p-5 pageBody">
          <div className="leftAndRightWrapper d-flex rounded">
            <div className="col-6 leftSide d-flex align-items-center">
              <div className="welcomeText text-center d-flex justify-content-center align-items-center flex-column">
                <h6 className='welcome'>WELCOME.!</h6>
                <h3 className='desc'>Unlock Effortless Navigation, Instant Updates, and Seamless Organization with Smart Campus. Elevate Your Campus Experience Today!</h3>
              </div>
            </div>
            <div className="col-6 loginRight">
              <div className="loginBox col-8">
                <p className='login-text'>LOGIN</p>
                <label htmlFor="">Username</label>
                <input type="text" name="" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                {
                  requiredUsername && <p className='errorMsg'>*{requiredUsername}</p>
                }
                <label htmlFor="" className='mt-3'>Password</label>
                <input type="password" name="" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress}/>
                {
                  requiredPassword && <p className='errorMsg'>*{requiredPassword}</p>
                }
                <button className='btn loginButton col-5' onClick={handleLogin}>
                  Login
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login