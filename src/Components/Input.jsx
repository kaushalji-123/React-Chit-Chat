import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImages, faPaperclip } from '@fortawesome/free-solid-svg-icons'; 

const Input = () => {
  return (
    <div className="input">
      <input  type="text" placeholder='Type Something..' />
     <div className="send">
      <FontAwesomeIcon className="file-icon" icon={faPaperclip} />
      <input type="file" style={{display:'none'}} id ="file"/>
      <label htmlFor="file">
      <FontAwesomeIcon className="file-icon" icon={faImages} />
      </label>
     
      <button className='send_button'>
        Send
      </button>
      </div>
     </div>
  )
}
``
export default Input;