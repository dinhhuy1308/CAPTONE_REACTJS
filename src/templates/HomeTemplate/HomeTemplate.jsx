import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderHomeTemplate from './components/HeaderHomeTemplate/HeaderHomeTemplate'
import FooterHomeTemplate from './components/FooterHomeTemplate/FooterHomeTemplate'
import { useScroolTop } from '../../hooks/useScroolTop'
import { Skeleton } from 'antd';


function HomeTemplate() {

    useScroolTop()

    return (
        <>
            <HeaderHomeTemplate />
            <div style={{ minHeight: '50vh' }}>
                <Suspense fallback={<Skeleton />}>
                    <Outlet />
                </Suspense>
            </div>
            <FooterHomeTemplate />
        </>
    )
}

export default HomeTemplate