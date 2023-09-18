import React from 'react';
import excel from '../Images/Program Icon/excel.png'
import SQL from '../Images/Program Icon/SQL.png'
import RStudio from '../Images/Program Icon/RStudio.png'
import python from '../Images/Program Icon/Python.png'
import reactIcon from '../Images/Program Icon/React.png'
import javaIcon from '../Images/Program Icon/JavaHtmlCss.png'

function Skills() {
  return (
    <div className='skills Fira'>     
      <div>
        <p className='h3'>Skills</p>

        <p className='h4'>Soft</p>

        <div class="gridlayout">
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'>📣<p className='text'>Communication</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'>🙋<p className='text'>Team Player</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'>🥇<p className='text'>Leadership</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'>🧑‍🏫<p className='text'>Teaching</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'>🤔<p className='text'>Analysis</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'>🤝<p className='text'>Stakeholder Engagement</p></p>
        </div>
        <br></br><br></br>
        <p className='h4'>Technical</p>

        <div class="gridlayout">
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'><img src={excel} className='technicalIcon'/><p className='text'>Excel</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'><img src={SQL} className='technicalIcon'/><p className='text'>SAS & SQL</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'><img src={RStudio} className='technicalIcon'/><p className='text'>R-Program</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'><img src={python} className='technicalIcon'/><p className='text'>Python</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'><img src={reactIcon} className='technicalIcon'/><p className='text'>React & ReactJS</p></p>
          <p className='h3 flex hover:scale-125 transition duration-500 m-4 duration-500 text-black font-semibold'><img src={javaIcon} className='technicalIcon'/><p className='text'>Javascript, HTML & CSS</p></p>
        </div>
      </div>
    </div>
    );
}
export default Skills;
