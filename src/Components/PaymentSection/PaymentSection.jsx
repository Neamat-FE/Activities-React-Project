
import React, { useState, useMemo } from "react"
import "./PaymentSection.css"
import visaLogo from "../../assets/visa.png"
import mastercardLogo from "../../assets/mastercard.png"
import amexLogo from "../../assets/amex.png"
import timeIcon from "../../assets/time.svg"
import deleteIcon from "../../assets/delete-icon.svg"
import promoIcon from "../../assets/promo.svg"

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

const initialSummaryItems = [
    {
        quantity: 1,
        code: "RE",
        label: "Regular",
        price: 500,
        badgeClass: "ticket-color-regular",
    },
    {
        quantity: 1,
        code: "VI",
        label: "Vip",
        price: 1000,
        badgeClass: "ticket-color-vip",
    },
]

const PaymentSection = () => {
    // State management
    const [selectedPayment, setSelectedPayment] = useState("card")
    const [promoCode, setPromoCode] = useState("")
    const [isTermsAccepted, setIsTermsAccepted] = useState(false)
    const [ticketHolders, setTicketHolders] = useState(initialTicketHolders)
    const [summaryItems, setSummaryItems] = useState(initialSummaryItems)
    const [appliedPromo, setAppliedPromo] = useState(null)

    // Payment method selection
    const handlePaymentSelect = (paymentType) => {
        setSelectedPayment(paymentType)
    }

    // Remove ticket holder
    const removeTicketHolder = (holderId) => {
        setTicketHolders((prev) => prev.filter((holder) => holder.id !== holderId))
    }

    // Promo code handling
    const handlePromoSubmit = () => {
        if (promoCode.trim()) {
            // Simple promo code logic - you can expand this
            const promoDiscounts = {
                SAVE10: 0.1,
                SAVE20: 0.2,
                WELCOME: 0.05,
            }

            const discount = promoDiscounts[promoCode.toUpperCase()]
            if (discount) {
                setAppliedPromo({
                    code: promoCode.toUpperCase(),
                    discount: discount,
                })
                setPromoCode("")
            } else {
                alert("Invalid promo code")
            }
        }
    }

    // Remove applied promo
    const removePromo = () => {
        setAppliedPromo(null)
    }

    // Calculate totals
    const subtotal = useMemo(() => {
        return summaryItems.reduce((sum, item) => sum + item.price, 0)
    }, [summaryItems])

    const promoDiscount = useMemo(() => {
        return appliedPromo ? Math.round(subtotal * appliedPromo.discount) : 0
    }, [subtotal, appliedPromo])

    const subtotalAfterPromo = subtotal - promoDiscount

    const vat = useMemo(() => {
        return Math.round(subtotalAfterPromo * 0.15)
    }, [subtotalAfterPromo])

    const total = subtotalAfterPromo + vat

    const totalTickets = summaryItems.reduce((sum, item) => sum + item.quantity, 0)

    // Handle payment confirmation
    const handleConfirmPayment = () => {
        if (!isTermsAccepted) {
            alert("Please accept the terms and conditions")
            return
        }

        if (selectedPayment === "card") {
            alert("Redirecting to card payment...")
        } else if (selectedPayment === "bkash") {
            alert("Redirecting to bKash payment...")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <div className="rounded-4 overflow-hidden mb-2 border-0">
                            <div className="card-body">
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
                                                    <a href="#" className="text-decoration-none primary-color-text">
                                                        2. Order Summary
                                                    </a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Payment Methods */}
                        <div className="bg-white rounded-4 p-4 mb-4">
                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <h5 className="fw-bold fs-14">Payment methods</h5>
                                    </div>
                                </div>
                                <div className="mb-4 payment-section">
                                    {/* Credit/Debit Card */}
                                    <div
                                        className={`payment-option ${selectedPayment === "card" ? "selected" : ""}`}
                                        data-payment="card"
                                        onClick={() => handlePaymentSelect("card")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center" style={{ height: "40px" }}>
                                                <img src="img/credit-card.svg" className="me-3" alt="" />
                                                <span className="fs-20 primary-color-text full-text">Debit/Credit card</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={visaLogo || "/placeholder.svg"}
                                                    alt="Visa"
                                                    style={{ height: "20px", marginRight: "10px" }}
                                                />
                                                <img
                                                    src={mastercardLogo || "/placeholder.svg"}
                                                    alt="Mastercard"
                                                    style={{ height: "20px", marginRight: "10px" }}
                                                />
                                                <img
                                                    src={amexLogo || "/placeholder.svg"}
                                                    alt="Amex"
                                                    style={{ height: "20px", marginRight: "10px" }}
                                                />
                                                <div className={`selection-icon ${selectedPayment === "card" ? "selected" : ""}`} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* bKash */}
                                    <div
                                        className={`payment-option my-4 ${selectedPayment === "bkash" ? "selected" : ""}`}
                                        data-payment="bkash"
                                        onClick={() => handlePaymentSelect("bkash")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="d-flex justify-content-between align-items-center" style={{ height: "40px" }}>
                                            <div className="d-flex align-items-center">
                                                <img src="img/bkash.svg" className="me-3" alt="" />
                                                <span className="fs-20">bKash</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <img src="img/bkash-logo.png" alt="" className="me-3" />
                                                <div className={`selection-icon ${selectedPayment === "bkash" ? "selected" : ""}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Promo Code */}
                        <div className="promo row align-items-center search-form mb-2">
                            <div className="col-12 col-md">
                                <div className="form-control-wrapper position-relative h-100">
                                    <img
                                        src={promoIcon || "/placeholder.svg"}
                                        alt="Promo"
                                        className="search-icon-inside-input position-absolute"
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            left: "15px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                    <input
                                        type="text"
                                        className="form-control fs-16 primary-color-text mb-3 mb-md-0"
                                        style={{
                                            padding: "15px 15px 15px 45px",
                                            borderRadius: "12px",
                                            border: "none",
                                            height: "64px",
                                        }}
                                        placeholder="Add Promo Code"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handlePromoSubmit()}
                                    />
                                </div>
                            </div>
                            {/* Button */}
                            <div className="col-12 col-md-auto">
                                <button
                                    className="btn btn-primary primary-color-bg fw-semibold w-100 w-md-auto"
                                    style={{ height: "64px", borderRadius: "12px" }}
                                    onClick={handlePromoSubmit}
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                        {/* Applied Promo Display */}
                        {appliedPromo && (
                            <div className="bg-light rounded-3 p-3 mb-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="text-success fw-bold">Promo Applied: {appliedPromo.code}</span>
                                    <span className="text-muted ms-2">({(appliedPromo.discount * 100).toFixed(0)}% off)</span>
                                </div>
                                <button className="btn btn-sm btn-outline-danger" onClick={removePromo}>
                                    Remove
                                </button>
                            </div>
                        )}

                        {/* Terms */}
                        <div className="terms mt-4 mb-4">
                            <div className="form-check my-3 cursor-pointer">
                                <input
                                    className="form-check-input rounded-checkbox cursor-pointer"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    style={{ width: "20px", height: "20px" }}
                                    checked={isTermsAccepted}
                                    onChange={(e) => setIsTermsAccepted(e.target.checked)}
                                />
                                <label className="form-check-label fs-12 ms-2 primary-color-text" htmlFor="flexCheckDefault">
                                    I agree that any re-sale of a ticket on a platform other than flightexpert.com is deemed to be illegal
                                    and will therefore result in the account being banned, the ticket will get cancelled, and will not
                                    accept any request for ticket or value refund.
                                </label>
                            </div>
                        </div>
                        {/* Confirm Button */}
                        <div className="row mb-4">
                            <div className="col-md-6 col-sm-12">
                                <button
                                    className={`btn btn-danger primary-color-bg w-100 mb-3 py-3 fs-16 fw-bold rounded-4 my-3 ${!isTermsAccepted ? "opacity-50" : ""
                                        }`}
                                    onClick={handleConfirmPayment}
                                    disabled={!isTermsAccepted}
                                >
                                    Confirm and pay ৳{total}
                                </button>
                            </div>
                            <div className="col-md-6" />
                        </div>
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
                                                            alt=""
                                                            style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                                            onClick={() => removeTicketHolder(holder.id)}
                                                        />
                                                    </div>
                                                    {index !== ticketHolders.length - 1 && <hr />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="fs-16 mb-3">
                                            Tickets - <span className="fw-bold">{totalTickets}</span>
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
                                        {appliedPromo && (
                                            <div className="d-flex justify-content-between my-2">
                                                <span className="fs-14 text-success">Promo Discount ({appliedPromo.code})</span>
                                                <span className="fs-18 fw-medium text-success">-৳{promoDiscount}</span>
                                            </div>
                                        )}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSection
