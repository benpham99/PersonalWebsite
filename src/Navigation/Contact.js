import React from 'react';
import github from  '../Images/github.png'
import linkedin from  '../Images/LinkedIn.png'
function Contact() {
  return (
    <div className='contact Fira'>
          <p className='h4'> 📬: benjaminpham1207@gmail.com</p>
          
          <p className='h4'> 📍: Sydney, Australia</p>
        <div className='flex flex-row'>
          <a href='www.linkedin.com/in/benjamin-pham-884258143'> <img src={linkedin} className='h-10 px-2'/></a>
          <a href='https://github.com/benpham99'> <img src={github} className='h-10'/></a>
        </div>
    </div>
    );
}
export default Contact;
