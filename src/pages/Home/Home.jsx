import React, { useEffect } from 'react'
import './Home.scss'
import CarouselHome from '../../components/Carousel/Carousel'
import ListProduct from '../../components/ListProduct/ListProduct'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setListProduct } from '../../redux/slices/ListProductSlice'
import { useScroolTop } from '../../hooks/useScroolTop'

function Home() {
    useScroolTop()
    const dispatch = useDispatch()

    const getListProduct = async () => {
        const result = await axios.get('https://shop.cyberlearn.vn/api/Product')
        
        const action = setListProduct(result.data.content)
        dispatch(action)
    }

    useEffect (()=> {
        getListProduct()
    },[])

    return (
        <div>
            <CarouselHome />
            <h2 className='product-feature'>Product Feature</h2>
            <ListProduct />
        </div>
    )
}

export default Home