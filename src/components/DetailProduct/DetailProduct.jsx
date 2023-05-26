import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './DetailProduct.scss'
import { settoCart } from '../../redux/slices/ListProductSlice'

function DetailProduct() {
    const { productDetail } = useSelector(state => state.ListProductReducer)
    const [count, setCount] = useState(1)
    // const {count} = useSelector(state => state.ListProductReducer)
    const dispatch = useDispatch()

    const handleChangeNumber = (value) => {
        if (count + value >= 0) {
            setCount(count + value)
        }
    }

    const addToCart = () => {
        // localStorage.setItem('cart', JSON.stringify )
        dispatch(settoCart(count))
    }

    return (
        <div className='detail-product row'>
            <div className="detail-product-left col-4">
                <img src={productDetail.image} alt="" />
            </div>
            <div className="detail-product-right col-8">
                <h2>{productDetail.name}</h2>
                <p>{productDetail.description}</p>
                <h3>Available size</h3>
                {productDetail.size?.map((item, index) => {
                    return (
                        <button className='btn-size' key={index}>{item}</button>
                    )
                })}
                <span className='detail-price'>{productDetail.price}$</span>
                <div >
                    <button className='btn-quantity' onClick={() => { handleChangeNumber(1) }}>+</button>
                    <span>{count}</span>
                    <button className='btn-quantity' onClick={() => { handleChangeNumber(-1) }}>-</button>
                </div>
                <button className='add-cart' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct