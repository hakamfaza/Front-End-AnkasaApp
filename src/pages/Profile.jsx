import React, { useEffect, useState } from "react";
import '../assets/styles/profile.css'
import rightArrow from '../assets/icons/right-arrow.svg'
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser, updateUser } from '../redux/actions/user'
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { id } = useParams()

    const detailUser = useSelector((state) => {
        return state.detailUser
    })

    console.log(detailUser)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [postal_code, setPostalCode] = useState('')

    useEffect(() => {
        dispatch(getDetailUser(localStorage.getItem("id"), navigate))
        setName(detailUser.data.name)
        setEmail(detailUser.data.email)
        setPhone(detailUser.data.phone)
        setCity(detailUser.data.city)
        setAddress(detailUser.data.address)
        setPostalCode(detailUser.data.postal_code)
    }, [dispatch])


    const onSubmit = (e) => {
        e.preventDefault()

        const body = {
            name: name,
            phone: phone,
            city: city,
            address: address,
            postal_code: postal_code
        }
    }

    const logout = () => {
        localStorage.clear()
        // navigate('/login')
    }

    return (
        <>
            <div className="container-fluid hanifProfile ml-0 mr-0">
                <nav>Ini Navbar</nav>
                <section className="d-flex w-100">
                    <div className="row w-100">
                        <div className="col-lg-4 col-12 side-content">
                            <div className="card d-flex flex-column w-100">
                                {
                                    detailUser.isLoading ? (
                                        <div>Loading</div>
                                    ) : (
                                        <div className="d-flex flex-column" >
                                            <img className="card-img-top"
                                                src={`https://ankasa-flight.herokuapp.com/${detailUser.data.photo}`}
                                                alt="Card image cap" />
                                            {/* <button className="button">Select Photo</button> */}
                                            <input type="file" />
                                            <div className="detail-profile">
                                                {<h4>{detailUser.data.name}</h4>}
                                                {<p>{detailUser.data.address}</p>}
                                            </div>
                                        </div>
                                    )
                                }

                                <div className="label d-flex">
                                    <div className="label-card">Cards</div>
                                    <div className="add-card">+ Add</div>
                                </div>
                                <div className="credit-card d-flex flex-column">
                                    <label>4441 1235 5512 5551</label>
                                    <div className="detail-cc d-flex flex-row">
                                        <p className="type-card">X Card</p>
                                        <p className="balance">$ 1,440.2</p>
                                    </div>
                                </div>
                                <div className="card-setting d-flex flex-column justify-content-start">
                                    <i className="fa-solid fa-user"><a href="#" className="card-link">Profile</a></i>
                                    <i className="fa-solid fa-star"><a href="#" className="card-link">My Review</a></i>
                                    <i className="fa-solid fa-gear"><a href="#" className="card-link">Settings</a></i>
                                    {/* <i className="fa-solid fa-right-from-bracket"><a href="#" className="card-link">Logout</a></i> */}
                                    {/* <i className="fa-solid fa-right-from-bracket"><button onClick={logout}>Logout</button></i> */}
                                    <button onClick={logout} >Logout</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 main-content d-flex flex-column">
                            <div className="card w-100">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>PROFILE</h3>
                                        <div className="header-booking d-flex">
                                            <label className="my-booking">Profile</label>
                                        </div>
                                    </div>
                                    <div className="col-12 fill-profile">
                                        <div className="title d-flex flex-row">
                                            <div className="col-6 contact"><h6>Contact</h6></div>
                                            <div className="spaci-header" ></div>
                                            <div className="col-6 biodata"><h6>Biodata</h6></div>
                                        </div>
                                        <div className="col-12 form-input">
                                            <form onSubmit={(e) => onSubmit(e)} className="d-flex flex-row">
                                                <div className="form-contact col-6 d-flex flex-column">
                                                    <label>Email</label>
                                                    <input value={email} type="text" />
                                                    <label>Phone Number</label>
                                                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" />
                                                    <div className="button-setting d-flex justify-content-end">
                                                        <h5>Account Settings</h5>
                                                        <img src={rightArrow} alt="" />
                                                    </div>
                                                </div>
                                                <div className="spaci-content" ></div>
                                                <div className="col-6 d-flex flex-column">
                                                    <label>Username</label>
                                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
                                                    <label>City</label>
                                                    <input onChange={(e) => setCity(e.target.value)} value={city} type="text" />
                                                    <label>Address</label>
                                                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" />
                                                    <label>Post Code</label>
                                                    <input onChange={(e) => setPostalCode(e.target.value)} value={postal_code} type="text" />

                                                    <button type="submit">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>Ini footer</footer>
            </div >
        </>

    )
}