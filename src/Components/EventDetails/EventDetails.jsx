import React from 'react'
import { useNavigate } from 'react-router-dom';
import './EventDetails.css'
import bookingCoverImg from '../../assets/booking-cover.png'
import locationIcon from '../../assets/location-icon.svg'
import priceIcon from '../../assets/price-icon.svg'
import shareIcon from '../../assets/share-icon.svg'
import arrowLeft from '../../assets/arrow-left-inactive.svg'
import arrowRight from '../../assets/arrow-right-booking.svg'
import alert from '../../assets/alert.svg'
import visaLogo from '../../assets/visa.png'
import mastercardLogo from '../../assets/mastercard.png'
import amexLogo from '../../assets/amex.png'
import bkashLogo from '../../assets/bkash-logo.png'


const ticketTypes = [
    {
        id: 1,
        class: "ticket-color-regular",
        label: "RE",
        type: "Regular",
        price: "৳500"
    },
    {
        id: 2,
        class: "ticket-color-platinum",
        label: "PL",
        type: "Platinum",
        price: "৳800"
    },
    {
        id: 3,
        class: "ticket-color-vip",
        label: "VI",
        type: "VIP",
        price: "৳1200"
    }
];


const EventDetails = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ticketpage'); // your target route
    };
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        {/* Event Hero Card */}
                        <div className="card rounded-4 overflow-hidden mb-4 border-0">
                            <img src={bookingCoverImg} alt="" className="img-fluid" />
                            {/* Event Info Footer */}
                            <div className="card-body bg-white">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="fw-bold fs-14 fw-bolder primary-color-text">
                                            Brown Magic Experience THE MENTALIST
                                        </h5>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-8">
                                        <div className="">
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="date-badge me-3 primary-color-text-bg text-white p-3 rounded-4 border-color text-center me-3">
                                                    <div className="fs-16 fw-bold">18-20</div>
                                                    <div className="fs-16">JAN</div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <small className="text-muted primary-color-text">
                                                                <img
                                                                    src={locationIcon}
                                                                    alt="Location"
                                                                    width={20}
                                                                    height={20}
                                                                    style={{ marginRight: 4 }}
                                                                />
                                                                Aloki
                                                            </small>
                                                            <div className="price-tag fs-12 primary-color-text d-flex align-items-center mt-2">
                                                                <img
                                                                    src={priceIcon}
                                                                    alt="Location"
                                                                    width={20}
                                                                    height={20}
                                                                    style={{ marginRight: 4 }}
                                                                />
                                                                Price starts from
                                                                <span className="fw-bold">৳500</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mt-3 mt-md-0 d-flex align-items-center justify-content-md-end">
                                        <button className="btn btn-dark w-100 rounded-4 border-color p-2 d-flex align-items-center justify-content-center">
                                            <img
                                                src={shareIcon}
                                                className="me-2"
                                                style={{ width: 18, height: 18 }}
                                                alt=""
                                            />
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Offline Tickets */}
                        <div className="bg-white rounded-4 p-4 mb-4">
                            <div className="mb-5">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="fw-bold fs-14">Tickets</h5>
                                    <span className="d-inline-flex align-items-center px-2 py-1 rounded bg-light border">
                                        <span
                                            className="rounded-circle green-color me-2 d-flex align-items-center"
                                            style={{ width: 10, height: 10 }}
                                        />
                                        <span className="text-dark small fw-medium">Live</span>
                                    </span>
                                </div>
                                {/* e-Tickets */}
                                {/* slider */}
                                <div className="e-ticket">
                                    <div className="col-12 ">
                                        <div className="d-flex justify-content-between align-items-center gap-2 mb-4">
                                            <h6 className="fs-24 primary-color-text">e-Tickets</h6>
                                            <div>
                                                <button
                                                    className="carousel-btn border-0 bg-transparent"
                                                    type="button"
                                                    data-bs-target="#eticketSlider"
                                                    data-bs-slide="prev"
                                                >
                                                    <img
                                                        src={arrowLeft}
                                                        alt="Prev"
                                                        className="m-0 p-0"
                                                    />
                                                </button>
                                                <button
                                                    className="carousel-btn border-0 bg-transparent"
                                                    type="button"
                                                    data-bs-target="#eticketSlider"
                                                    data-bs-slide="next"
                                                >
                                                    <img
                                                        src={arrowRight}
                                                        className="m-0 p-0"
                                                        alt="Next"
                                                    />
                                                </button>
                                            </div>
                                            {/* Custom Arrow Buttons */}
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div
                                                id="eticketSlider"
                                                className="carousel slide"
                                                data-bs-ride="false"
                                            >
                                                {/* Slides */}
                                                <div className="carousel-inner">
                                                    {/* Slide 1 */}
                                                    <div className="carousel-item active">
                                                        <div className="row">
                                                            {ticketTypes.map((ticket) => (
                                                                <div className="col-md-4 mb-3" key={ticket.id}>
                                                                    <div className="ticket-card ticket-bg rounded-4 p-3 h-100 d-flex flex-column justify-content-center position-relative">
                                                                        {/* Icon & Label */}
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <div className={`${ticket.class} rounded p-1 me-2 px-2`}>
                                                                                <span className="small fw-bold">{ticket.label}</span>
                                                                            </div>
                                                                            <div>
                                                                                <img src={alert} alt="" style={{ height: 30, width: 30 }} />
                                                                            </div>
                                                                        </div>
                                                                        {/* Ticket Info */}
                                                                        <h6 className="my-3 primary-color-text fs-24">{ticket.type}</h6>
                                                                        <h5 className="fw-bold mb-0 primary-color-text fs-12">{ticket.price}</h5>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                    {/* Slide 2 */}
                                                    <div className="carousel-item">
                                                        <div className="row">
                                                            {ticketTypes.map((ticket) => (
                                                                <div className="col-md-4 mb-3" key={ticket.id}>
                                                                    <div className="ticket-card ticket-bg rounded-4 p-3 h-100 d-flex flex-column justify-content-center position-relative">
                                                                        {/* Icon & Label */}
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <div className={`${ticket.class} rounded p-1 me-2 px-2`}>
                                                                                <span className="small fw-bold">{ticket.label}</span>
                                                                            </div>
                                                                            <div>
                                                                                <img src={alert} alt="" style={{ height: 30, width: 30 }} />
                                                                            </div>
                                                                        </div>
                                                                        {/* Ticket Info */}
                                                                        <h6 className="my-3 primary-color-text fs-24">{ticket.type}</h6>
                                                                        <h5 className="fw-bold mb-0 primary-color-text fs-12">{ticket.price}</h5>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Offline Tickets */}
                            <div className="mb-4">
                                <div className="offline-ticket">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between align-items-center gap-2 mb-4">
                                            <h6 className="fs-24 primary-color-text">Offline-Tickets</h6>
                                            <div>
                                                <button
                                                    className="carousel-btn border-0 bg-transparent"
                                                    type="button"
                                                    data-bs-target="#offlineSlider"
                                                    data-bs-slide="prev"
                                                >
                                                    <img
                                                        src={arrowLeft}
                                                        className="m-0 p-0"
                                                        alt="Prev"
                                                    />
                                                </button>
                                                <button
                                                    className="carousel-btn border-0 bg-transparent"
                                                    type="button"
                                                    data-bs-target="#offlineSlider"
                                                    data-bs-slide="next"
                                                >
                                                    <img
                                                        src={arrowRight}
                                                        className="m-0 p-0"
                                                        alt="Next"
                                                    />
                                                </button>
                                            </div>
                                            {/* Custom Arrow Buttons */}
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div
                                                id="offlineSlider"
                                                className="carousel slide"
                                                data-bs-ride="false"
                                            >
                                                {/* Slides */}
                                                <div className="carousel-inner">
                                                    {/* Slide 1 */}
                                                    <div className="carousel-item active">
                                                        <div className="row">
                                                            {ticketTypes.map((ticket) => (
                                                                <div className="col-md-4 mb-3" key={ticket.id}>
                                                                    <div className="ticket-card ticket-bg rounded-4 p-3 h-100 d-flex flex-column justify-content-center position-relative">
                                                                        {/* Icon & Label */}
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <div className={`${ticket.class} rounded p-1 me-2 px-2`}>
                                                                                <span className="small fw-bold">{ticket.label}</span>
                                                                            </div>
                                                                            <div>
                                                                                <img src={alert} alt="" style={{ height: 30, width: 30 }} />
                                                                            </div>
                                                                        </div>
                                                                        {/* Ticket Info */}
                                                                        <h6 className="my-3 primary-color-text fs-24">{ticket.type}</h6>
                                                                        <h5 className="fw-bold mb-0 primary-color-text fs-12">{ticket.price}</h5>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                    {/* Slide 2 */}
                                                    <div className="carousel-item">
                                                        <div className="row">
                                                            {ticketTypes.map((ticket) => (
                                                                <div className="col-md-4 mb-3" key={ticket.id}>
                                                                    <div className="ticket-card ticket-bg rounded-4 p-3 h-100 d-flex flex-column justify-content-center position-relative">
                                                                        {/* Icon & Label */}
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <div className={`${ticket.class} rounded p-1 me-2 px-2`}>
                                                                                <span className="small fw-bold">{ticket.label}</span>
                                                                            </div>
                                                                            <div>
                                                                                <img src={alert} alt="" style={{ height: 30, width: 30 }} />
                                                                            </div>
                                                                        </div>
                                                                        {/* Ticket Info */}
                                                                        <h6 className="my-3 primary-color-text fs-24">{ticket.type}</h6>
                                                                        <h5 className="fw-bold mb-0 primary-color-text fs-12">{ticket.price}</h5>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Collection Points */}
                            <div className="my-3">
                                <h6 className="fs-14 primary-color-text">Collection points</h6>
                                <div className="">
                                    <div className="d-flex align-items-center mt-1 ms-3">
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <small className="text-muted primary-color-text">
                                                        <img
                                                            src={locationIcon}
                                                            alt="Location"
                                                            width={20}
                                                            height={20}
                                                            style={{ marginRight: 4 }}
                                                        />
                                                        Aloki
                                                    </small>
                                                    <div className="price-tag fs-12 primary-color-text d-flex align-items-center mt-2">
                                                        <img
                                                            src={priceIcon}
                                                            alt="Location"
                                                            width={20}
                                                            height={20}
                                                            style={{ marginRight: 4 }}
                                                        />
                                                        Price starts from
                                                        <span className="fw-bold">৳500</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* About Section */}
                        <div className="bg-white rounded-4 p-4 mb-4">
                            <div className="mb-4">
                                <h5 className="fw-bold mb-2 fs-14">About</h5>
                                <p className="text-muted fs-14 primary-color-text">
                                    For the first time in Bangladesh, International sensation Farhanul
                                    Islam " Brown Magic" is doing his one hour special show " Brown
                                    Magic Experience - The Mentalist". It will be a mystical journey
                                    through the ancient art of Cryptic Illusion, Mind Reading, Mentalism
                                    and Hypnotism. Farhan will exhibit a wide variety of Surreal and
                                    Trippy mind bending performances.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sticky-top">
                            <div className="card rounded-4 border-0">
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-3 mt-2 fs-24">Book your ticket</h5>
                                    <div className="mb-3">
                                        <label className="form-label fs-14 primary-color-text">
                                            From
                                        </label>
                                        <div className="fw-bold fs-12 primary-color-text">৳600</div>
                                        <small className="text-muted fs-12 primary-color-text">
                                            VAT included
                                        </small>
                                    </div>
                                    <button className="btn btn-danger primary-color-bg w-100 mb-3 py-3 fs-16 fw-bold rounded-4" onClick={handleClick}>
                                        Book Tickets
                                    </button>
                                </div>
                            </div>
                            <div className="card rounded-4 border-0 my-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-center my-2">
                                        <img
                                            src={bkashLogo}
                                            className="me-3"
                                            alt="bkash"
                                            style={{ height: 32, width: 32, marginRight: 12 }}
                                        />
                                        <img
                                            src={visaLogo}
                                            className="me-3"
                                            alt="visa"
                                            style={{ height: 24, marginRight: 12 }}
                                        />
                                        <img
                                            src={mastercardLogo}
                                            className="me-3"
                                            alt="Mastercard"
                                            style={{ height: 28, marginRight: 12 }}
                                        />
                                        <img
                                            src={amexLogo}
                                            alt="Amex"
                                            style={{ height: 28, width: 28 }}
                                        />
                                        <div className="selection-icon selected" />
                                    </div>
                                </div>
                            </div>
                            <div className="card rounded-4 border-0 my-3">
                                <div className="card-body my-3">
                                    <h6 className="fw-bolder fs-14 mb-3">Terms &amp; Conditions</h6>
                                    <p className="small text-muted fs-12 secondary-color-text mb-0">
                                        The ticket holder agrees to these terms and conditions upon the
                                        issuance, use, or attempt to use the ticket. Entry is prohibited
                                        for individuals under 18 years of age. Tickets are non-refundable,
                                        non-exchangeable, and cannot be rescheduled after purchase....
                                    </p>
                                    {/* Collapsible extra text */}
                                    <div className="collapse" id="collapseTerms">
                                        <p className="small text-muted fs-12 secondary-color-text mt-2 mb-0">
                                            Each ticket purchased individually under 18 years of age.
                                            Tickets are non-refundable, non-exchangeable, and may not be
                                            resold or transferred for profit.
                                        </p>
                                    </div>
                                    {/* Toggle link */}
                                    <a
                                        className="text-decoration-none primary-color-text fs-12 mt-2 d-inline-block"
                                        data-bs-toggle="collapse"
                                        href="#collapseTerms"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseTerms"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default EventDetails