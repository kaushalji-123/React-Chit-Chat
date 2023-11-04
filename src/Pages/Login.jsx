import React from 'react'
import Add from "../img/penguin 1.png"
const Login = () => {
  return (
    <>
    <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'>Papen Chat</span>
        <span className='title'>Login</span>
        <form>
          <input type="text" placeholder='UserName'/>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password'/>
          <input style={{display:"none"}} type="file" id="file"/> 
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up </button>
          <p>You do Have an Account ? Register here </p>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login;