import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <span className='logo'>PaPe Chat</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
          <span>jordan</span>
          <button>logout</button>
        </div>
    </div>
    </>
  )
}

export default Navbar;