import React, { useEffect } from "react";
import '../assets/styles/mybooking.css'
import botArrow from '../assets/icons/bottom-arrow.svg'
import airplane from '../assets/icons/airplane.svg'
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from '../redux/actions/user'
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import iconProfile from '../assets/icons/icon-profile.svg'
import iconMyReview from '../assets/icons/icon-myPriview.svg'
import iconSetting from '../assets/icons/icon-setting.svg'
import iconLogout from '../assets/icons/icon-logout.svg'
import { getMyBooking } from '../redux/actions/transaction'
import { payTicket, deleteTicket } from '../redux/actions/transaction'

export default function MyBooking() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const detailUser = useSelector((state) => {
        return state.detailUser
    })

    const myBooking = useSelector((state) => {
        return state.myBooking
    })

    console.log(myBooking)

    useEffect(() => {
        dispatch(getDetailUser(localStorage.getItem("id"), navigate))
        dispatch(getMyBooking(navigate))
    }, [dispatch])


    const processTicket = (id) => {
        payTicket(id)
            .then((result) => {
                alert('ticket has been pay')
                dispatch(getMyBooking(navigate))
            })
            .catch((err) => {
                alert(err)
            })
    }
    const cancelTicket = (id) => {
        deleteTicket(id, localStorage.getItem("id"))
            .then((result) => {
                alert('ticket has been delete')
                dispatch(getMyBooking(navigate))
            })
            .catch((err) => {
                alert(err)
            })
    }

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }
    return (
        <>
            <div class="container-fluid hanifMyBooking ml-0 mr-0">
                <Navbar />
                <section class="d-flex w-100">
                    <div class="col-lg-4 col-12 side-content">
                        <div class="card d-flex flex-column w-100">
                            {
                                detailUser.isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <div className="d-flex flex-column" >
                                        <img className="card-img-top"
                                            src={`${process.env.REACT_APP_API_URL}/${detailUser.data.photo}`}
                                            alt="Card image cap" />
                                        <label className="select-foto" htmlFor="files">Select Photo</label>
                                        <input className="hidden" type="file" id="files" />
                                        <div className="detail-profile">
                                            {<h4>{detailUser.data.name}</h4>}
                                            {<p>{detailUser.data.address}</p>}
                                        </div>
                                    </div>
                                )
                            }

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
                                <div className="">
                                    <img src={iconProfile} alt="" />
                                    <label htmlFor="">Profile</label>
                                </div>
                                <div>
                                    <img src={iconMyReview} alt="" />
                                    <label htmlFor="">My Review</label>
                                </div>
                                <div>
                                    <img src={iconSetting} alt="" />
                                    <label htmlFor="">Settings</label>
                                </div>
                                <div>
                                    <button onClick={logout}>
                                        <img src={iconLogout} alt="" />
                                        <label htmlFor="">Logout</label>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-8 col-12 main-content d-flex flex-column">
                        <div class="card">
                            <h3>MY BOOKING</h3>
                            <div class="header-booking d-flex">
                                <label class="my-booking">My Booking</label>
                                <label class="order-history">Order History</label>
                            </div>
                        </div>
                        {
                            myBooking.isLoading ? (
                                <div>Loading</div>
                            ) :
                                (
                                    myBooking.data.map((item, index) => {
                                        return (
                                            <div key={index} class="card">
                                                <div class="content d-flex flex-column">
                                                    <p class="date-departure">{item.flight_date}</p>
                                                    <div class="destination d-flex flex-row">
                                                        <h5>{item.origin}</h5>
                                                        <img src={airplane} alt="" />
                                                        <h5>{item.destination}</h5>
                                                    </div>
                                                    <p class="code-airplane">{item.name} {item.seat}</p>
                                                </div>
                                                <div class="status">
                                                    <label class="label-status">Status</label>
                                                    {
                                                        item.is_paid && (
                                                            <>
                                                                <button className="ticket-iussue" >Eticket issued</button>
                                                            </>
                                                        )
                                                    }


                                                    {
                                                        !item.is_paid && (
                                                            <>
                                                                <button className="waiting-ticket" >Waiting for payment</button>
                                                                <button onClick={() => cancelTicket(item.id)} className="cancel-ticket" >Cancel Ticket</button>
                                                                <button onClick={() => processTicket(item.id)} className="pay-ticket" >Pay Ticket</button>
                                                            </>
                                                        )
                                                    }

                                                    <div class="label-viewDetail">
                                                        <label>View Details</label>
                                                        <img src={botArrow} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                        }

                    </div>
                </section>
                <Footer />
            </div>
        </>
    )

}