import React from 'react'
import './Header.styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../../context/UserContext/UserState'

const Header = () => {
  const { token, logout } = useContext(UserContext)
	const navigate = useNavigate()


	const logoutUser = () => {
		logout()
		setTimeout(() => {
			navigate('/')
		}, 500)
	}
  
  return (
    <React.Fragment>
    <div>
    <header className= 'header__newsPage'>
        <h1 className='header__newsPage-title'>Blue Suede Shoes Records</h1>
        <nav className='menu-nav'>
            <ul className='menu-nav__newsPage-list'>
                <li className='menu-nav__newsPage-item'><Link to='/' className='menu-nav__newsPage-link'>Home</Link></li>
                <li className='menu-nav__newsPage-item'><Link to='/register' className='menu-nav__newsPage-link'>Register</Link></li>
                 {token ? ( 
                  <>
                  <span onClick={logoutUser}>
                    <li className='menu-nav__newsPage-item'><Link to='/' className='menu-nav__newsPage-link'>Logout</Link></li>
                  </span>
                  <span>
                    <li className='menu-nav__newsPage-item'><Link to='/profile' className='menu-nav__newsPage-link'>Profile</Link></li>
                  </span>
                  </>
                 ) : (
                  <span>
                <li className='menu-nav__newsPage-item'><Link to='/login' className='menu-nav__newsPage-link'>Login</Link></li>
                </span>
                 )}
            </ul>
        </nav>
    </header>
    </div>
    </React.Fragment>
  )
}

export default Header