import React from 'react'
import Add from "../img/penguin 1.png"
const Register = () => {
  return (
    <>
    <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'>Papen Chat</span>
        <span className='title'>Login</span>
        <form>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password'/>
          <button>Sign in </button>
          <p>You Don&rsquo;t Have an Account ? Register here </p>
        </form>
      </div>
    </div>
  </>
  )
}

export default Register;