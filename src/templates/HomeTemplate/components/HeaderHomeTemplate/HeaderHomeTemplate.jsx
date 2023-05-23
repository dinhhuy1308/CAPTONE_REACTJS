import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderHomeTemplate.scss'

import LogoIcon from 'src/assets/imgs/logo.svg'
import SearchIcon from 'src/assets/imgs/search.svg'
import CartIcon from 'src/assets/imgs/cart.svg'



function HeaderHomeTemplate() {
    // const handleActive = () => {
    //     return ({isActive}) => isActive ? 'nav-link font-weight-bold text-white' : 'nav-link'
    // }

    return (
        <div className='header'>
            <section className='logo-header '>
                <div className="logo">
                    <NavLink to='' className='logo-link active'>
                        <img src={LogoIcon} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-search">
                    <div className="search navbar-item">
                        <NavLink to='/search' className={'link link-search'} >
                            <img src={SearchIcon} alt="" />
                            Search
                        </NavLink>
                    </div>
                    <div className="cart navbar-item">
                        <NavLink to='/cart' className={'link link-cart'} >
                            <img src={CartIcon} alt="" />
                            (1)
                        </NavLink>
                    </div>
                    <div className="login navbar-item">
                        <NavLink to='/login' className={'link'} >
                            Login
                        </NavLink>
                    </div>
                    <div className="register navbar-item">
                        <NavLink to='/register' className={'link'} >
                            Register
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className='menu-header'>
                <nav className='nav-menu' >
                    <NavLink className='nav-menu-link' to='/'>Home</NavLink>
                    <NavLink className='nav-menu-link' to='/'>Men</NavLink>
                    <NavLink className='nav-menu-link' to='/'>Woman</NavLink>
                    <NavLink className='nav-menu-link' to='/'>Kid</NavLink>
                    <NavLink className='nav-menu-link' to='/'>Sport</NavLink>
                </nav>
            </section>
        </div>
    )
}

export default HeaderHomeTemplate