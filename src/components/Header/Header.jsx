import React from 'react'
import './Header.styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../../context/UserContext/UserState'

import { Menu, } from 'antd'
import { LogoutOutlined, LoginOutlined, UserOutlined, HomeOutlined, UserAddOutlined, ShopOutlined, ShoppingCartOutlined, SolutionOutlined } from '@ant-design/icons'

const Header = () => {
  const { token, logout, admin } = useContext(UserContext)
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
        <nav>
			<Menu mode="horizontal" className='menu-nav__menu' defaultSelectedKeys={['profile']}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
						<Link to="/">Home</Link>
			</Menu.Item>
      <Menu.Item key="register" icon={<UserAddOutlined />}>
					<Link to="/register">Register</Link>
			</Menu.Item>
			
				{token ? (
					<>
						<Menu.Item
							key="logout"
							icon={<LogoutOutlined />}
							onClick={logoutUser}
						>
							<Link to="/logout">Logout</Link>
						</Menu.Item>
						<Menu.Item key="profile" icon={<UserOutlined />}>
							<Link to="/profile">Profile</Link>
						</Menu.Item>
            <Menu.Item key="products" icon={<ShopOutlined />}>
						<Link to="/products">Products</Link>
					</Menu.Item>
            <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
						<Link to="/cart">Cart</Link>
					</Menu.Item>
					<Menu.Item key="admin" icon={<SolutionOutlined />}>
					<Link to="/admin">Admin</Link>
				</Menu.Item>
					</>
				
				) : (
          <>
					<Menu.Item key="login" icon={<LoginOutlined />}>
						<Link to="/login">Login</Link>
					</Menu.Item>
          <Menu.Item key="products" icon={<ShopOutlined />}>
						<Link to="/products">Products</Link>
					</Menu.Item>
				
          </>
				)}
				
			</Menu>
		</nav>
    </header>
    </div>
    </React.Fragment>
  )
}

export default Header