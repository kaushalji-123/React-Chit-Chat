import React from 'react'
const Register = () => {
  return (
    <>
    <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'>Papen Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder='UserName'/>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password'/>
          <input type="file" 
          aria-label='' placeholder='Add Your Avatar'/>
          <button>Sign Up </button>
          <button>logout here</button>
          <p>You Do Have an Account ? login here dnjfjdb </p>
          <p> now the default  branch is mini-chat</p>
        </form>
      </div>
    </div>
  </>
  )
}

export default Register