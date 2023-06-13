import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderHomeTemplate.scss'

import LogoIcon from 'src/assets/imgs/logo.svg'
import SearchIcon from 'src/assets/imgs/search.svg'
import CartIcon from 'src/assets/imgs/cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { resetUserProfile } from '../../../../redux/slices/User'
import { ACCESS_TOKEN } from '../../../../contants'
import { deleteKey, getLocalStorage } from '../../../../utils/LocalStorage/LocalStorage'



function HeaderHomeTemplate() {
    const dispatch = useDispatch();
    const { listProductCart } = useSelector(state => state.ListProductReducer)
    const { userProfile } = useSelector(state => state.UserReducer);

    const handleLogout = () => {
        deleteKey(ACCESS_TOKEN);
        dispatch(resetUserProfile());
    }


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
                            ({listProductCart.length})
                        </NavLink>
                    </div>

                    {getLocalStorage(ACCESS_TOKEN) ? (
                        <>
                            <div className="login navbar-item">
                                <NavLink to='/profile' className={'link'} >
                                    <img src={userProfile.avatar} alt="" style={{width: 40, height: 40, borderRadius: '50%'}}/>
                                </NavLink>
                            </div>

                            <div className="login navbar-item">
                                <NavLink to='/login' className={'link'} onClick={handleLogout}>
                                    Logout
                                </NavLink>
                            </div>
                        </>
                    ) :
                        <>
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
                        </>
                    }



                    {/* <div className="login navbar-item">
                        <NavLink to='/login' className={'link'} >
                            Login
                        </NavLink>
                    </div>
                    <div className="register navbar-item">
                        <NavLink to='/register' className={'link'} >
                            Register
                        </NavLink>
                    </div> */}
                </div>
            </section>
            <section className='menu-header'>
                <div className="type_bar">
                    <ul>
                        <li><NavLink to='/' className='active_link'>Home</NavLink></li>
                        <li><NavLink>Men</NavLink></li>
                        <li><NavLink>Woman</NavLink></li>
                        <li><NavLink>Kid</NavLink></li>
                        <li><NavLink>Sport</NavLink></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default HeaderHomeTemplate