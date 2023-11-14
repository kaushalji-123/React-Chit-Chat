import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faImages, faPaperclip } from '@fortawesome/free-solid-svg-icons'; 

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type Something..' />
      <FontAwesomeIcon icon={faPaperclip} />
      <FontAwesomeIcon icon={faImages} />
     </div>
  )
}

export default Input;