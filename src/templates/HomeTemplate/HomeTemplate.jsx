import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderHomeTemplate from './components/HeaderHomeTemplate/HeaderHomeTemplate'
import FooterHomeTemplate from './components/FooterHomeTemplate/FooterHomeTemplate'

function HomeTemplate() {
    return (
        <>
            <HeaderHomeTemplate />
            <div style={{ minHeight: '50vh' }}>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </div>
            <FooterHomeTemplate />
        </>
    )
}

export default HomeTemplate