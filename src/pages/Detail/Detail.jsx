import React, { useEffect } from 'react'
import './Detail.scss'
import DetailProduct from '../../components/DetailProduct/DetailProduct'
import axios from 'axios'
import { setProducDetail } from '../../redux/slices/Product'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import CartProduct from '../../components/CartProduct/CartProduct'
import { getProductByIdApi } from '../../services/product.services'


function Detail() {
	const params = useParams()
	const dispatch = useDispatch()

	const { productDetail, isLoading } = useSelector(state => state.ListProductReducer)

	const getProductById = async (id) => {
		const result = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`)
		// const result = await getProductByIdApi(id)
		const action = setProducDetail(result.data.content)
		dispatch(action)
	}

	useEffect(() => {
		getProductById(params.productID)
	}, [params.productID])

	

	return (
		<div>
			<DetailProduct />
			<h3 className='relate-product'>- Relate Product -</h3>
			<div className="row" style={{marginLeft:'8.4rem',marginBottom:'10.6rem'}}>
			{productDetail.relatedProducts?.map((product) => {
				return (
						<div className="col-4" key={product.id}>
							<CartProduct product={product} />
						</div>
				)
			})}
			</div>
		</div>
	)
}

export default Detail