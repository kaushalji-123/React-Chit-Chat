import React from 'react'

const Message = () => {
  return (
    <div className='message'>
        <div className="messageInfo">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1600&cs=tinysrgb&w=1600" alt="" />
            <span>Just now</span>
            </div>
          <div className="messageContent">
            <p>hello</p>
            {/* <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1600&cs=tinysrgb&w=1600" alt="" /> */}
        </div>
    </div>
    
  )
}

export default Message;