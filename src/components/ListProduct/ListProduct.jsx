import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../CartProduct/CartProduct'

function ListProduct() {

    const {listProduct} = useSelector(state => state.ListProductReducer)

    return (
        <div className='row' style={{marginLeft:99}}>
            { Array.isArray(listProduct) && listProduct.map((product,index)=>{
                return <div className="col-4" key={index}>
                <CartProduct product={product} />
            </div>
            })}

        </div>
    )
}

export default ListProduct