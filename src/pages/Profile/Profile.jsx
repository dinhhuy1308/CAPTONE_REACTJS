import React, { useEffect } from 'react'
import './Profile.scss';
import './../Register/Register.scss';
import { Button, Space } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from '../../redux/slices/User';




function Profile() {
    const dispatch = useDispatch();
    const { userProfile } = useSelector(state => state.UserReducer)
    console.log('userProfile',userProfile)


    useEffect(() => {
        dispatch(getProfileThunk())
    }, [])


    return (
        

        <>
            <div className="profile_title">
                <p>Profile</p>
            </div>
            <div className="information_area">
                <div className="left_detail">
                    <img src={userProfile.avatar} alt="user" />
                    {/* <div className="action-avatar">
                            <input type="text" placeholder='avatar URL' className='imgUrl' />
                            <button className='btn-imgUpdate' >^</button>
                        </div> */}
                </div>
                <form >
                    <div className="right_detail row">
                        <div className="col-6 col-right">
                            <div className="form-group">
                                <label className='label_form' htmlFor="email">Email :</label>
                                <input value={userProfile.email} type="text" className='form-control input_form' placeholder='Email' id='email' name='email'
                                />
                            </div>
                        <div className="form-group">
                            <label className='label_form' htmlFor="phone">Phone :</label>
                            <input value={userProfile.phone} type="text" className='form-control input_form' placeholder='Phone' id='phone' name='phone'
                            />
                        </div>
                        </div>

                        <div className="col-6 col-right col-right-relative">
                            <div className="form-group">
                                <label className='label_form' htmlFor="name">Name :</label>
                                <input value={userProfile.name} type="text" className='form-control input_form' placeholder='Name' id='name' name='name'
                                />
                            </div>
                            <div className="form-group">
                                <label className='label_form' htmlFor="password">Password :</label>
                                <input value={userProfile.password === null ? '***********' : ''} type="text" className='form-control input_form' placeholder='Password' id='password' name='password'
                                />
                            </div>

                            <div className="radio-group">

                                <div className="gender_choosen d-flex align-content-center">
                                    <p className='label_form lable_gender'>Gender: </p>
                                    <div className="form-check">
                                        <label className="form-check-label lable_radio label_form text-center" htmlFor="male">
                                            <input className="form-check-input" type="radio" name="gender" id="male"
                                                value={true} checked={userProfile.gender === true} />
                                            <span className="design"></span>
                                            <span className='value_gender'>Male</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label lable_radio label_form" htmlFor="female">
                                            <input className="form-check-input" type="radio" name="gender" id="female"
                                                value={false} checked={userProfile.gender === false} />
                                            <span className="design"></span>
                                            <span className='value_gender'>Female</span>
                                        </label>
                                    </div>
                                </div>

                                <Space wrap>
                                    <Button className='btn_submit_login' shape='round' htmlType='submit'>Update</Button>
                                </Space>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="pill_tab">
                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Order history</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link nav-link-2" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Favorite</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                {ordersHistory?.length > 0
                                    ? <PaginationWrapper itemsPerPage={4} items={ordersHistory} />
                                    : <EmptyDataDisplay />}
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="favorite_list row">
                                    {
                                        favoriteList.length > 0
                                            ? favoriteList?.map((item, index) => {
                                                return (<div className="check" key={index} ><CardProduct product={item} setChange={setChange} change={change} /></div>)
                                            })
                                            : <EmptyDataDisplay />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}



            {/* :
                    (
                        <GoLogin />
                    )} */}

        </>




    )
}

export default Profile