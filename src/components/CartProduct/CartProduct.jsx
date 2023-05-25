import React, { useRef, useState } from 'react'
import './CartProduct.scss'
import fullHeart from 'src/assets/imgs/fullHeart.svg'
import borderHeart from 'src/assets/imgs/borderHeart.svg'
import { NavLink } from 'react-router-dom'

function CartProduct(props) {
    const { product } = props
    const imgRef = useRef()
    const [isImageChanged, setIsImageChanged] = useState(false);


    const changeImg = () => {
        const img = imgRef.current;
        if (isImageChanged) {
            img.src = fullHeart;
            setIsImageChanged(false);
        } else {
            img.src = borderHeart;
            setIsImageChanged(true);
        }
    }

    return (
        <div className='card-product'>
            <img className='fullHeart' ref={imgRef} src={fullHeart} alt="" onClick={changeImg} />
            <div className="card-product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="card-product-content">
                <h3 className='content.title'>{product.name}</h3>
                <p className='content.sub'>{product.shortDescription}</p>
            </div>
            <div className="card-product-interact ">

                <NavLink to={`/detail/${product.id}`} className='card-product-btn buy-now'>Buy now</NavLink>
                <button className='card-product-btn price'>{product.price}$</button>
            </div>
        </div>
    )


}

export default CartProduct