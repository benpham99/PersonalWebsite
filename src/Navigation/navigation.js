import React from 'react';
import { Link } from 'react-scroll'

const SideNav = (props) => {
  return (
    <div className='sidenav Fira'>
        <Link activeClass='active' smooth spy to='Home' className='sidenavtext font-medium p-2 hover:text-indigo-500'>Home</Link>
        <Link activeClass='active' smooth spy to='About' className='sidenavtext font-medium p-2 hover:text-indigo-500'>About</Link>
        <Link activeClass='active' smooth spy to='Experience' className='sidenavtext font-medium p-2 hover:text-indigo-500'>Experience</Link>
        <Link activeClass='active' smooth spy to='Education' className='sidenavtext font-medium p-2 hover:text-indigo-500'>Education</Link>
        <Link activeClass='active' smooth spy to='Projects' className='sidenavtext font-medium p-2 hover:text-indigo-500'>Projects</Link>
        <Link activeClass='active' smooth spy to='Skills' className='sidenavtext font-medium p-2 hover:text-indigo-500'>Skills</Link>
        <Link activeClass='active' smooth spy to='Contact' className='sidenavtext font-medium p-2 hover:text-indigo-500'>Contact</Link>
    </div>

    

  );
}

export default SideNav;
 