import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../CartProduct/CartProduct'
import axios from 'axios'
import { getLocalStorage } from '../../utils/LocalStorage/LocalStorage'
import { ACCESS_TOKEN } from '../../contants'

function ListProduct() {

    const { listProduct } = useSelector(state => state.ListProductReducer)
    const [listFavorite, setListFavorite] = useState([])

    const getListFavorite = async () => {
        try {
            const resp = await axios({
                method: 'get',
                url: 'https://shop.cyberlearn.vn/api/Users/getproductfavorite',
                headers: {
                    Authorization: `Bearer ${getLocalStorage(ACCESS_TOKEN)}`,
                }

            })
            setListFavorite(resp.data.content.productsFavorite)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getListFavorite()
    },[])

    return (
        <div className='row' style={{ marginLeft: 99 }}>
            {Array.isArray(listProduct) && listProduct.map((product, index) => {
                return <div className="col-4" key={index}>
                    <CartProduct product={product} listFavor={listFavorite}/>
                </div>
            })}

        </div>
    )
}

export default ListProduct