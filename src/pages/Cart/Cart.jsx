import React, { useEffect } from 'react'
import Table from '../../components/Table/Table'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Cart() {
    const navigate = useNavigate();
    const {user} = useSelector(state => state.UserTestReducer)
    
    useEffect (() => {
        navigate(user.accessToken ? '/cart' : '/login')
    },[])

    

    return (
        <div>
            <Table />
        </div>
    )
}

export default Cart