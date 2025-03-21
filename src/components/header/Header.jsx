import React, { useState } from 'react'
import { NavLink } from 'react-router';

const Header = () => {

    const[isDark, setIsDark] = useState(false);

    const handleThemeMode = () => {

        if(isDark) {

            setIsDark(!isDark);
            document.querySelector('body').setAttribute('data-theme', 'light');

        } else {

            setIsDark(!isDark);
            document.querySelector('body').setAttribute('data-theme', 'dark')

        }

    }

  return (
    <header>
        <div className="container">
            <div className="logo">
                BiteHub
            </div>
            <nav>
                <ul className='nav-items'>
                    <li className='nav-item'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='nav-item'><NavLink to={'/about'}>About</NavLink></li>
                    <li className='nav-item'><NavLink to={'/services'}>Services</NavLink></li>
                    <li className='nav-item'><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul>
            </nav>
            <div className="auth">
                <button className="theme-mode" onClick={handleThemeMode}>

                    {isDark ? 
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#a)"> <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path> </g> <defs> <clipPath id="a"> <path fill="#ffffff" d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>
                    :
                
                    <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M506.298,202.547c-3.639-17.048-27.89-17.747-32.446-0.868c-15.349,56.82-67.255,98.886-128.808,98.843 c-73.591-0.013-133.552-59.854-133.565-133.565c-0.042-61.556,42.024-113.458,98.84-128.808 c16.83-4.546,16.229-28.799-0.869-32.446C292.244,2.03,274.371-0.001,256,0C114.796,0.031,0.031,114.79,0,256 c0.031,141.21,114.796,255.969,256,256c141.204-0.031,255.969-114.79,256-256C512.001,237.628,509.971,219.756,506.298,202.547z"></path> </g> </g> </g></svg> }
                    
                    {isDark ? 'Light' : 'Dark'}

                </button>
            </div>
        </div>
    </header>
  )
}

export default Header