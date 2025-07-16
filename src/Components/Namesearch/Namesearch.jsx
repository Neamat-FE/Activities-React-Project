import React from 'react'
import eventTicket from '../../assets/event-ticket.svg'

const Namesearch = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="event-search-bar ticket-bg p-4 rounded-3">
                            <div className="row g-3 align-items-center">
                                {/* Input Field (8 columns on md+) */}
                                <div className="col-12 col-md-8">
                                    <div className="form-control-wrapper position-relative">
                                        <img
                                            src={eventTicket}
                                            alt="Location"
                                            className="position-absolute"
                                            style={{
                                                width: 16,
                                                height: 30,
                                                left: 15,
                                                top: "50%",
                                                transform: "translateY(-50%)"
                                            }}
                                        />
                                        <input
                                            type="text"
                                            className="form-control border-0 rounded-3"
                                            style={{ padding: "15px 15px 15px 45px", height: 64 }}
                                            placeholder="Find an Event by Name..."
                                        />
                                    </div>
                                </div>
                                {/* Button (4 columns on md+) */}
                                <div className="col-12 col-md-4">
                                    <button
                                        className="btn btn-primary primary-color-bg w-100 px-5 fw-semibold"
                                        style={{ height: 64 }}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Namesearch