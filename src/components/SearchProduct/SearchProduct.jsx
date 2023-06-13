import { Empty, Select } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import React, { useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './SearchProduct.scss';



const option = [
    {
        value: 'decrease',
        label: 'Decrease',
    },
    {
        value: 'ascending',
        label: 'Ascending',
    },
];


function SearchProduct() {
    const [key, setKey] = useState('');
    const [listProductSearch, setListProductSearch] = useState([]);

    const handleSortByPrice = (value) => {
        if (value === 'ascending') {
            const result = _.sortBy(listProductSearch, [item => item.price]);
            setListProductSearch(result);
        } else {
            const result = _.reverse(_.sortBy(listProductSearch, [item => item.price]));
            setListProductSearch(result);
        }
    };


    const handleChangeKey = (e) => {
        setKey(e.target.value.trim().replace(/\s/g, ''))

    }

    const handleSearch = async () => {
        if (key !== '') {
            const resp = await axios.get(`https://shop.cyberlearn.vn/api/Product?keyword=${key}`)
            setListProductSearch(resp.data.content)
        } else {
            setListProductSearch([]) 
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleSearch()
        }
    }


    return (
        <>
            <p className='search-text'>Search</p>
            <div className='search-product'>
                <input onKeyDown={handleKeyDown}  onChange={handleChangeKey} type="text" className='input-search' placeholder='product name ...' />
                <button className='btn-search' onClick={handleSearch}>search</button>
            </div>
            <h1 >Search result</h1>
            <div className="search-result">
                <p>Price</p>
                <Select className='input-filter'
                    defaultValue="Filter"
                    style={{
                        width: 445,
                    }}
                    onChange={handleSortByPrice}
                    placeholder={'Filter'}
                    options={option}
                />
            </div>



            {listProductSearch.length > 0 ? (
                <div className="row" style={{ marginLeft: '8.4rem', marginBottom: '10.6rem' }}>
                    {listProductSearch.map((product) => {
                        return (
                            <div className="col-4" key={product.id} style={{ marginBottom: '49px' }}>
                                <CartProduct product={product} />
                            </div>
                        )
                    })}
                </div>

            ) : <Empty />}
        </>
    )
}

export default SearchProduct