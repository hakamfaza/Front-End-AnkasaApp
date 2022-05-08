import React, { useEffect } from "react";
import '../assets/styles/mybooking.css'
import botArrow from '../assets/icons/bottom-arrow.svg'
import airplane from '../assets/icons/airplane.svg'
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from '../redux/actions/user'

export default function MyBooking() {

    const dispatch = useDispatch()

    const detailUser = useSelector((state) => {
        return state.detailuser
    })

    // console.log(detailUser.data.data)

    useEffect(() => {
        dispatch(getDetailUser())
    }, [dispatch])
    return (
        <>
            <div class="container-fluid hanifMyBooking ml-0 mr-0">
                <nav> navbar</nav>
                <section class="d-flex w-100">
                    <div class="col-4 side-content">
                        <div class="card d-flex flex-column w-100">
                            <img class="card-img-top"
                                src={`https://ankasa-flight.herokuapp.com/${detailUser.data.data.photo}`}
                                alt="Card image cap" />
                            <button class="button">Select Photo</button>
                            <div class="detail-profile">
                                <h4>{detailUser.data.data.name}</h4>
                                <p>{detailUser.data.data.address}</p>
                            </div>
                            <div class="label d-flex">
                                <div class="label-card">Cards</div>
                                <div class="add-card">+ Add</div>
                            </div>
                            <div class="credit-card d-flex flex-column">
                                <label>4441 1235 5512 5551</label>
                                <div class="detail-cc d-flex flex-row">
                                    <p class="type-card">X Card</p>
                                    <p class="balance">$ 1,440.2</p>
                                </div>
                            </div>
                            <div class="card-setting d-flex flex-column justify-content-start">
                                <i class="fa-solid fa-user"><a href="#" class="card-link">Profile</a></i>
                                <i class="fa-solid fa-star"><a href="#" class="card-link">My Review</a></i>
                                <i class="fa-solid fa-gear"><a href="#" class="card-link">Settings</a></i>
                                <i class="fa-solid fa-right-from-bracket"><a href="#" class="card-link">Logout</a></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 main-content d-flex flex-column">
                        <div class="card">
                            <h3>MY BOOKING</h3>
                            <div class="header-booking d-flex">
                                <label class="my-booking">My Booking</label>
                                <label class="order-history">Order History</label>
                            </div>
                        </div>
                        <div class="card">
                            <div class="content d-flex flex-column">
                                <p class="date-departure">Monday, 20 July '20 - 12:33</p>
                                <div class="destination d-flex flex-row">
                                    <h5>IDN</h5>
                                    <img src={airplane} alt="" />
                                    <h5>JPN</h5>
                                </div>
                                <p class="code-airplane">Garuda Indonesia, AB-221</p>
                            </div>
                            <div class="status">
                                <label class="label-status">Status</label>
                                <button>Waiting for payment</button>
                                <div class="label-viewDetail">
                                    <label>View Details</label>
                                    <img src={botArrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="content d-flex flex-column">
                                <p class="date-departure">Monday, 20 July '20 - 12:33</p>
                                <div class="destination d-flex flex-row">
                                    <h5>IDN</h5>
                                    <img src={airplane} alt="" />
                                    <h5>JPN</h5>
                                </div>
                                <p class="code-airplane">Garuda Indonesia, AB-221</p>
                            </div>
                            <div class="status">
                                <label class="label-status">Status</label>
                                <button>Eticket issued</button>
                                <div class="label-viewDetail">
                                    <label>View Details</label>
                                    <img src={botArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>Ini footer</footer>
            </div>
        </>
    )

}