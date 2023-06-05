import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import './DetailProduct.scss'
import { setListProductCart } from '../../redux/slices/Product'
import Swal from 'sweetalert2'


function DetailProduct() {
    const { productDetail, listProductCart } = useSelector(state => state.ListProductReducer)
    const [count, setCount] = useState(0)
    const params = useParams()
    const dispatch = useDispatch()

    const handleChangeNumber = (value) => {
        if (count + value >= 0) {
            setCount(count + value)
        }
    }

    useEffect(() => {
        const product = listProductCart.find((item) => item.id == params.productID)
        const num = product ? product.number : 0
        setCount(num)
    }, [params.productID])


    const addToCart = () => {

        if (count === 0) {
            Swal.fire(
                'Please choose the quantity you want to buy',
                '',
                'question'
            )
            setTimeout(() => {
                Swal.close();
            }, 1500);


            // alert('Please choose the quantity you want to buy')
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Add to cart success',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(setListProductCart({ ...productDetail, number: count }));
              
        }

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