import React, { useRef } from 'react'
import './Carousel.scss'
import polygon1 from 'src/assets/imgs/polygon1.svg'
import polygon2 from 'src/assets/imgs/polygon2.svg'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


function CarouselHome() {
    const { listProduct } = useSelector(state => state.ListProductReducer)

    const carouselRef = useRef()

    return (
        <>
            <img className='polygon2' src={polygon2} alt="" onClick={() => { carouselRef.current.next() }} />
            <img className='polygon1' src={polygon1} alt="" onClick={() => { carouselRef.current.prev() }} />
            <Carousel autoplay ref={carouselRef}  >
                {listProduct.map((product, item) => {
                    return (
                        <div  key={item}>
                            <div className="row" >
                                <div className="col-8 carousel-product" >
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="col-4 carousel-content">
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <button>
                                        <NavLink to={`/detail/${product.id}`}>Buy Now</NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </Carousel>
        </>
    );
}

export default CarouselHome