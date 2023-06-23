import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
    <div>
    <header className= 'header__newsPage'>
        <h1 className='header__newsPage-title'>Blue Suede Shoes Records</h1>
        <nav className='menu-nav'>
            <ul className='menu-nav__newsPage-list'>
                <li className='menu-nav__newsPage-item'><Link to='/' className='menu-nav__newsPage-link'>Home</Link></li>
                {/* <li className='menu-nav__newsPage-item'><Link to='/form' className='menu-nav__newsPage-link'>Form</Link></li>
                <li className='menu-nav__newsPage-item'><Link to='/list' className='menu-nav__newsPage-link'>ListNews</Link></li> */}
            </ul>
        </nav>
    </header>
    </div>
    </React.Fragment>
  )
}

export default Header