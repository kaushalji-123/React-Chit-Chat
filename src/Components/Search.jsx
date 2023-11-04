import React from 'react'
const Search = () => {
  return (
    <>
    <form className='SearchForm'>
       <input className='search'type="search" placeholder='Find User'/>
    </form>
    <div className="user_Chat">
      <img src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
      <div className="user_char-info">
        <span>Jordan</span>
      </div>
    </div>
    </>
  )
}

export default Search