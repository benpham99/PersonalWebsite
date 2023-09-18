import React from 'react';
import profile from '../Images/Profile.jpg'


function HomePage() {
  return (
    <div class='home Fira'>     

      <div class='homeText'>
          <p className='h1'>Benjamin Pham</p>
          <br></br>
          <p className='h2'>Software Engineer 🧑‍💻 Associate Actuary 📊</p>
      </div>
        <img src={profile} alt='Profile' className='profile'/>
    </div>  
    );
}
export default HomePage;
