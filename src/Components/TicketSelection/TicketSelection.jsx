import React, { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import "./TicketSelection.css"
import alert from "../../assets/alert.svg"
import deleteIcon from "../../assets/delete-icon.svg"
import timeIcon from "../../assets/time.svg"
import visaLogo from "../../assets/visa.png"
import mastercardLogo from "../../assets/mastercard.png"
import amexLogo from "../../assets/amex.png"
import bkashLogo from "../../assets/bkash-logo.png"

const tickets = [
    {
        id: 1,
        code: "RE",
        type: "Regular",
        price: 500,
        class: "ticket-color-regular",
    },
    {
        id: 2,
        code: "PL",
        type: "Platinum",
        price: 800,
        class: "ticket-color-platinum",
    },
    {
        id: 3,
        code: "VI",
        type: "Vip",
        price: 1000,
        class: "ticket-color-vip",
    },
]

const initialTicketHolders = [
    {
        id: 1,
        type: "RE",
        colorClass: "ticket-color-regular",
        name: "Abdul Goni Mehedi",
        email: "goni.mehedi@gmail.com",
        phone: "01922794789",
        dateTime: "Jul 18, 2025, 06:00 PM",
    },
    {
        id: 2,
        type: "VI",
        colorClass: "ticket-color-vip",
        name: "Abdul Goni Mehedi",
        email: "goni.mehedi@gmail.com",
        phone: "01922794789",
        dateTime: "Jul 18, 2025, 06:00 PM",
    },
]

const TicketSelection = () => {
    const navigate = useNavigate()

    // State for ticket quantities
    const [ticketQuantities, setTicketQuantities] = useState({
        1: 1, // Regular
        2: 0, // Platinum
        3: 1, // VIP
    })

    // State for ticket holders
    const [ticketHolders, setTicketHolders] = useState(initialTicketHolders)

    // Functions to handle quantity changes
    const incrementQuantity = (ticketId) => {
        const totalTickets = Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0)
        if (totalTickets < 10) {
            setTicketQuantities((prev) => ({
                ...prev,
                [ticketId]: prev[ticketId] + 1,
            }))
        }
    }

    const decrementQuantity = (ticketId) => {
        setTicketQuantities((prev) => ({
            ...prev,
            [ticketId]: Math.max(0, prev[ticketId] - 1),
        }))
    }

    // Function to remove ticket holder
    const removeTicketHolder = (holderId) => {
        setTicketHolders((prev) => prev.filter((holder) => holder.id !== holderId))
    }

    // Calculate summary items based on current quantities
    const summaryItems = useMemo(() => {
        return tickets
            .filter((ticket) => ticketQuantities[ticket.id] > 0)
            .map((ticket) => ({
                quantity: ticketQuantities[ticket.id],
                code: ticket.code,
                label: ticket.type,
                price: ticket.price * ticketQuantities[ticket.id],
                badgeClass: ticket.class,
            }))
    }, [ticketQuantities])

    // Calculate totals
    const subtotal = useMemo(() => {
        return summaryItems.reduce((sum, item) => sum + item.price, 0)
    }, [summaryItems])

    const vat = useMemo(() => {
        return Math.round(subtotal * 0.15)
    }, [subtotal])

    const total = subtotal + vat

    const totalTickets = Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0)

    const handleClick = () => {
        // Pass the selected data to payment page
        const paymentData = {
            summaryItems,
            ticketHolders,
            subtotal,
            vat,
            total
        }

        navigate("/paymentpage", { state: paymentData })
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <div className="rounded-4 overflow-hidden mb-4 border-0">
                            <div className="card-body">
                                <div className="row" />
                                <div className="row d-flex align-items-center">
                                    <div className="mb-3">
                                        <nav style={{ "--bs-breadcrumb-divider": '">"' }} aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item fs-16 fw-bold">
                                                    <a href="#" className="text-decoration-none primary-color-text">
                                                        1. Home
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item fs-16 fw-bold primary-color-text" aria-current="page">
                                                    <a href="#" className="text-decoration-none secondary-color-text">
                                                        2. Order Summary
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    {/* Date Selector */}
                                    <div className="d-flex">
                                        <div className="mb-3 me-3">
                                            <div className="date-selector d-flex align-items-center primary-color-text-bg border-color text-white d-flex flex-column align-items-center cursor-pointer position-relative">
                                                <div className="date-number fs-18 fw-bolder mb-1">18</div>
                                                <div className="date-month fs-16 mt-1">Jul</div>
                                                <div className="status-indicator-regular mt-3" />
                                            </div>
                                        </div>
                                        <div className="date-selector me-3 secondary-color-text-bg border-color text-white d-flex flex-column align-items-center cursor-pointer position-relative">
                                            <div className="date-number fs-18 fw-bolder mb-1">19</div>
                                            <div className="date-month fs-16 mt-1">Jul</div>
                                            <div className="status-indicator-vip" />
                                        </div>
                                        <div className="date-selector secondary-color-text-bg border-color text-white d-flex flex-column align-items-center cursor-pointer position-relative">
                                            <div className="date-number fs-18 fw-bolder mb-1">20</div>
                                            <div className="date-month fs-16 mt-1">Jul</div>
                                            <div className="status-indicator" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Offline Tickets */}
                        <div className="bg-white rounded-4 p-4 mb-4">
                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <h5 className="fw-bold fs-14">Tickets</h5>
                                        <p className="fs-14">Each user can buy 10 tickets. You can add {10 - totalTickets} more tickets.</p>
                                    </div>
                                    <span className="d-inline-flex align-items-center px-2 py-1 rounded bg-light border">
                                        <span className="rounded-circle bg-success me-2" style={{ width: "10px", height: "10px" }} />
                                        <span className="text-dark small fw-medium">Live</span>
                                    </span>
                                </div>
                                {/* e-Tickets */}
                                <div className="mb-3">
                                    <div className="row">
                                        {tickets.map((ticket) => (
                                            <React.Fragment key={ticket.id}>
                                                <div className="col-12">
                                                    <div className="ticket-card ticket-bg rounded-4 p-3 d-flex flex-column justify-content-center position-relative">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div className={`${ticket.class} rounded p-1 me-2 px-2`}>
                                                                    <span className="small fw-bold">{ticket.code}</span>
                                                                </div>
                                                                <h6 className="mb-0 primary-color-text fs-5">{ticket.type}</h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src={alert || "/placeholder.svg"}
                                                                    alt="alert"
                                                                    style={{ height: "30px", width: "30px" }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mb-4 mt-3">
                                                    <div className="rounded p-1 me-2 px-2">
                                                        <span className="small fw-bold fs-24">৳{ticket.price}</span>
                                                    </div>
                                                    <div className="qty-control d-flex align-items-center">
                                                        <button
                                                            className="qty-btn fw-bold d-flex align-items-center justify-content-center primary-color-text fs-24 cursor-pointer"
                                                            disabled={ticketQuantities[ticket.id] === 0}
                                                            onClick={() => decrementQuantity(ticket.id)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="qty-num">{ticketQuantities[ticket.id]}</span>
                                                        <button
                                                            className="qty-btn fw-bold d-flex align-items-center justify-content-center primary-color-text fs-24"
                                                            disabled={totalTickets >= 10}
                                                            onClick={() => incrementQuantity(ticket.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* About Section */}
                        <div className="bg-white rounded-4 p-4 mb-4">
                            <h6 className="fw-bold fs-14 mb-2">Terms &amp; Conditions</h6>
                            <p className="text-muted fs-14 primary-color-text">
                                The ticket holder agrees to these terms and conditions upon the issuance, use, or attempt to use the
                                ticket. Entry is prohibited for individuals under 18 years of age. Tickets are non-refundable,
                                non-exchangeable, and cannot be rescheduled after purchase. By attending the event, the ticket holder
                                consents to the possibility of being photographed, recorded (video and audio), and having such media
                                published online.
                            </p>
                            {/* Collapsible content */}
                            <div className="collapse" id="collapseTerms">
                                <p className="small text-muted fs-14 primary-color-text mt-2 mb-0">
                                    Each ticket purchased individually under 18 years of age. Tickets are non-refundable,
                                    non-exchangeable, and may not be resold or transferred for profit. Entry to the event is subject to
                                    the security and legal check.
                                </p>
                            </div>
                            {/* Toggle Buttons */}
                            <a
                                className="text-decoration-none primary-color-text fw-semibold fs-12  mt-2 d-inline-block"
                                data-bs-toggle="collapse"
                                href="#collapseTerms"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseTerms"
                            >
                                <span className="collapsed">Read more</span>
                            </a>
                        </div>
                        {/* Popular Events */}
                    </div>
                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sticky-top">
                            <div className="card rounded-4 border-0">
                                <div className="card-body">
                                    <div className="event-details">
                                        <div className="book-time">
                                            <img
                                                src={timeIcon || "/placeholder.svg"}
                                                alt=""
                                                className="img-fluid me-2"
                                                style={{ height: "20px", width: "20px" }}
                                            />
                                            <label className="form-label fs-14 primary-color-text">09:04 to book</label>
                                        </div>
                                        <img src="img/selected-event.png" alt="" className="img-fluid" />
                                        <h5 className="fw-semibold mt-3 fs-16">Brown Magic Experience THE MENTALIST</h5>
                                        <small className="text-muted fs-12 primary-color-text">KIB Auditorium, Dhaka</small>
                                    </div>
                                    <div className="ticket-holder-details mt-4 bg-white">
                                        <div className="mb-4">
                                            <h6 className="fs-16 primary-color-text">Ticket Holders</h6>
                                            {ticketHolders.map((holder, index) => (
                                                <React.Fragment key={holder.id}>
                                                    <div className="ticket-holder">
                                                        <div className={`${holder.colorClass} rounded-3 me-1 px-3 py-3`}>
                                                            <span className="fs-16 fw-bold">{holder.type}</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="fw-semibold fs-14 primary-color-text">{holder.name}</div>
                                                            <div className="fs-14 primary-color-text my-1">{holder.email}</div>
                                                            <div className="fs-14 primary-color-text">{holder.phone}</div>
                                                            <div className="fs-14 primary-color-text">{holder.dateTime}</div>
                                                        </div>
                                                        <img
                                                            src={deleteIcon || "/placeholder.svg"}
                                                            alt="Delete"
                                                            style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                                            onClick={() => removeTicketHolder(holder.id)}
                                                        />
                                                    </div>
                                                    {/* Add <hr /> except after last item */}
                                                    {index !== ticketHolders.length - 1 && <hr />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="fs-16 mb-3">
                                            Tickets - <span className="fw-bold">{summaryItems.length}</span>
                                        </h6>
                                        {summaryItems.map((item, index) => (
                                            <div className="summary-item d-flex align-items-center my-3" key={index}>
                                                <span className="fs-16 fw-bolder">{item.quantity}</span>
                                                <span>x</span>
                                                <span
                                                    className={`summary-badge ${item.badgeClass} badge-regular px-2 py-2 fs-12 fw-bold rounded-3`}
                                                >
                                                    {item.code}
                                                </span>
                                                <span className="fs-16 fw-semibold">{item.label}</span>
                                                <span className="ms-auto fs-18 fw-semibold">৳{item.price}</span>
                                            </div>
                                        ))}
                                        <hr />
                                        <div className="d-flex justify-content-between my-2">
                                            <span className="fs-14 secondary-color-text">Subtotal</span>
                                            <span className="fs-18 fw-medium secondary-color-text">৳{subtotal}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="fs-14 secondary-color-text">VAT 15%</span>
                                            <span className="fs-18 fw-medium secondary-color-text">৳{vat}</span>
                                        </div>
                                        <div className="d-flex justify-content-between fw-bold mt-3">
                                            <span className="fs-18 fw-semibold primary-color-text">
                                                Total <small className="text-muted fs-14 fw-semibold primary-color-text">VAT Included</small>
                                            </span>
                                            <span className="fs-18 fw-bold">৳{total}</span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-danger primary-color-bg w-100 mb-3 py-3 fs-16 fw-bold rounded-4 my-3"
                                        onClick={handleClick}
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                            <div className="card rounded-4 border-0 my-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-center my-2">
                                        <img
                                            src={bkashLogo || "/placeholder.svg"}
                                            className="me-3"
                                            alt="bkash"
                                            style={{ height: 32, width: 32, marginRight: 12 }}
                                        />
                                        <img
                                            src={visaLogo || "/placeholder.svg"}
                                            className="me-3"
                                            alt="visa"
                                            style={{ height: 24, marginRight: 12 }}
                                        />
                                        <img
                                            src={mastercardLogo || "/placeholder.svg"}
                                            className="me-3"
                                            alt="Mastercard"
                                            style={{ height: 28, marginRight: 12 }}
                                        />
                                        <img src={amexLogo || "/placeholder.svg"} alt="Amex" style={{ height: 28, width: 28 }} />
                                        <div className="selection-icon selected" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketSelection