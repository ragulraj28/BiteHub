import React from 'react'

const Header = () => {

    const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header>
        <div className="container">
            <div className="logo">
                BiteHub
            </div>
            <nav>
                <ul className='nav-items'>
                    {navItems?.map((item, index) => <li key={index} className='nav-item'>{item}</li>)}
                </ul>
            </nav>
            <div className="auth"></div>
        </div>
    </header>
  )
}

export default Header