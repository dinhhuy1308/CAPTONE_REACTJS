import React, { useEffect } from 'react'
import Table from '../../components/Table/Table'
import { getLocalStorage } from '../../utils/LocalStorage/LocalStorage';
import { ACCESS_TOKEN } from '../../contants';
import Login from '../Login/Login';

function Cart() {
    return (
        <>
            {getLocalStorage(ACCESS_TOKEN) ? (<div><Table /></div>) : <Login />}
        </>
    )
}

export default Cart