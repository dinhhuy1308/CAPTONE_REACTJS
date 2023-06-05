import React from 'react'
import { Space, Table } from 'antd';
import { useState } from 'react';
import './Table.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, deleteProduct } from '../../redux/slices/Product';
import Swal from 'sweetalert2'
import axios from 'axios';


const { Column } = Table;



function App() {
    const { listProductCart } = useSelector(state => state.ListProductReducer)
    const dispatch = useDispatch()
    const [listBuy, setListBuy] = useState([]);
    const {user} = useSelector(state => state.UserTestReducer)


    const sweetDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            width: 500,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(id))
                Swal.fire(
                    'Deleted!',
                    'The product has been deleted.',
                    'success',
                )
                setTimeout(() => {
                    Swal.close();
                }, 1500);
            }
        })
    }


    const handleChangeNumber = (id, count, value) => {
        if (value + count > 0) {
            dispatch(changeCount({ id, value }));
        } else {
            sweetDelete(id);
        }
    };


    const deletePro = (id) => {
        sweetDelete(id)
    }

    const handleSubmitOrder = async () => {
        if (listBuy.length === 0) {
            return
        }

        try {
            const list = listBuy.map(item => ({
                productId: item.id,
                quantity: item.number
            }));

            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, buy it!'
            });

            if(result.isConfirmed) {
                await axios.post('https://shop.cyberlearn.vn/api/Users/order', {
                    orderDetail: list,
                    email: user.email,
                });
                list.forEach(item => {
                    dispatch(deleteProduct(item.productId))
                });
                Swal.fire(
                    'Success!',
                    'You have successfully placed your order.',
                    'success'
                );
                setTimeout(()=>{
                    Swal.close()
                },1500)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const rowSelection = {
        onChange: (_, selectedRows) => {
            setListBuy(selectedRows)
        }
    };


    return (

        <div className='table'>

            <Table dataSource={listProductCart}
                rowKey={"id"}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}>

                <Column title="ID" dataIndex="id" align='center' />
                <Column title="IMAGE" dataIndex="image" align='center'
                    render={(_, product) => (
                        <img height={50} width={60} src={product.image} alt="..." />
                    )}
                />
                <Column title="NAME" dataIndex="name" />
                <Column title="PRICE" dataIndex="price" align='center'
                    render={(_, product) => (
                        <>{product.price}$</>
                    )}
                />
                <Column title="QUANTITY" dataIndex="number" align='center'
                    render={(_, product) => (
                        <Space size={'middle'}>
                            <button className='btn-quantity' onClick={() => handleChangeNumber(product.id, product.number, 1)}
                            >+</button>
                            <span className='cart-quantity'> {product.number}</span>
                            <button className='btn-quantity' onClick={() => handleChangeNumber(product.id, product.number, -1)}
                            >-</button>
                        </Space>
                    )}
                />
                <Column title="TOTAL" dataIndex="total" align='center'
                    render={(_, product) => (
                        <>{product.price * product.number}$</>
                    )}
                />
                <Column title="Action" key="action" align='center'
                    render={(_, product) => (
                        <>
                            <button className='btn-edit' onClick={() => handleEdit(product.id)} >EDIT</button>
                            <button className='btn-delete' onClick={() => deletePro(product.id)}>DELETE</button>
                        </>
                    )}
                />

            </Table>
            <div className='d-flex justify-content-end'>
                <button className='submit-order' onClick={handleSubmitOrder}>submit order</button>
            </div>
        </div>
    );



}

export default App