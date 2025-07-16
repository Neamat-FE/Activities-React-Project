import React from 'react'
import { useNavigate } from 'react-router-dom';
import popularImage1 from '../../assets/popular-1.png'
import popularImage2 from '../../assets/popular-2.png'
import popularImage3 from '../../assets/popular-3.png'
import arrowLeft from '../../assets/arrow-left-inactive.svg'
import arrowRight from '../../assets/arrow-right-active.svg'
import cardArrow from '../../assets/card-arrow.svg'


const events = [
    {
        id: 1,
        image: popularImage1,
        title: "Brown Magic Experience THE MENTALIST",
        date: "11",
        month: "JAN",
        location: "Aloki",
        price: 500
    },
    {
        id: 2,
        image: popularImage2,
        title: "Brown Magic Experience THE MENTALIST",
        date: "11",
        month: "JAN",
        location: "ICCB Hall 4",
        price: 500
    },
    {
        id: 3,
        image: popularImage3,
        title: "Brown Magic Experience THE MENTALIST",
        date: "11",
        month: "JAN",
        location: "KIB Auditorium",
        price: 500
    }
];


const Popular = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/bookingpage');
    };

    return (
        <div>
            <div className="container my-5 pt-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center gap-2 mb-4">
                        <h2 className="mb-0 fs-22">Popular</h2>
                        <div className="d-flex align-items-center gap-2">
                            <h6 className="primary-color-text text-decoration-none me-2 fs-16 fw-medium">
                                See more
                            </h6>
                            {/* Custom Arrow Buttons */}
                            <button
                                className="carousel-btn border-0 bg-transparent"
                                type="button"
                                data-bs-target="#popularSlider"
                                data-bs-slide="prev"
                            >
                                <img src={arrowLeft} alt="Prev" />
                            </button>
                            <button
                                className="carousel-btn border-0 bg-transparent"
                                type="button"
                                data-bs-target="#popularSlider"
                                data-bs-slide="next"
                            >
                                <img src={arrowRight} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div id="popularSlider" className="carousel slide" data-bs-ride="false">
                            {/* Indicators */}
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#popularSlider"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#popularSlider"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#popularSlider"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                            </div>
                            {/* Slides */}
                            <div className="carousel-inner">
                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                    <div className="row">
                                        {events.map((event) => (
                                            <div className="col-lg-4 col-md-6 mb-3" key={event.id}>
                                                <div className="popular-card bg-white overflow-hidden rounded-4 mb-3 rounded-20">
                                                    <img
                                                        src={event.image}
                                                        className="w-100 h-auto object-fit-cover"
                                                        alt={event.title}
                                                    />
                                                    <div className="p-3">
                                                        <h6 className="fs-16 fw-bold">{event.title}</h6>
                                                        <div className="d-flex align-items-center mt-2">
                                                            <div className="date-badge me-3 primary-color-text-bg text-white p-3 rounded-4 border-color text-center me-3">
                                                                <div className="fs-16 fw-bold">{event.date}</div>
                                                                <div className="fs-16">{event.month}</div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div>
                                                                        <small className="text-muted primary-color-text">
                                                                            <svg
                                                                                width={20}
                                                                                height={20}
                                                                                viewBox="0 0 24 24"
                                                                                fill="currentColor"
                                                                                style={{ marginRight: 4 }}
                                                                            >
                                                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                                            </svg>
                                                                            {event.location}
                                                                        </small>
                                                                        <div className="price-tag fs-12 primary-color-text mt-2">
                                                                            <i
                                                                                className="fa-solid fa-tag"
                                                                                style={{ marginRight: 4, width: 20, height: 20 }}
                                                                            />
                                                                            Price starts from <span className="fw-bold fs-12">৳{event.price}</span>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        className="btn p-0 border-0 bg-transparent"
                                                                        style={{
                                                                            width: 60,
                                                                            height: 60,
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={cardArrow}
                                                                            onClick={() => handleClick(event.id)}
                                                                            alt="Arrow Icon"
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "100%",
                                                                                objectFit: "contain"
                                                                            }}
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="carousel-item">
                                    <div className="row">
                                        {events.map((event) => (
                                            <div className="col-lg-4 col-md-6 mb-3" key={event.id}>
                                                <div className="popular-card bg-white overflow-hidden rounded-4 mb-3 rounded-20">
                                                    <img
                                                        src={event.image}
                                                        className="w-100 h-auto object-fit-cover"
                                                        alt={event.title}
                                                    />
                                                    <div className="p-3">
                                                        <h6 className="fs-16 fw-bold">{event.title}</h6>
                                                        <div className="d-flex align-items-center mt-2">
                                                            <div className="date-badge me-3 primary-color-text-bg text-white p-3 rounded-4 border-color text-center me-3">
                                                                <div className="fs-16 fw-bold">{event.date}</div>
                                                                <div className="fs-16">{event.month}</div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div>
                                                                        <small className="text-muted primary-color-text">
                                                                            <svg
                                                                                width={20}
                                                                                height={20}
                                                                                viewBox="0 0 24 24"
                                                                                fill="currentColor"
                                                                                style={{ marginRight: 4 }}
                                                                            >
                                                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                                            </svg>
                                                                            {event.location}
                                                                        </small>
                                                                        <div className="price-tag fs-12 primary-color-text mt-2">
                                                                            <i
                                                                                className="fa-solid fa-tag"
                                                                                style={{ marginRight: 4, width: 20, height: 20 }}
                                                                            />
                                                                            Price starts from <span className="fw-bold fs-12">৳{event.price}</span>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        className="btn p-0 border-0 bg-transparent"
                                                                        style={{
                                                                            width: 60,
                                                                            height: 60,
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center"
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={cardArrow}
                                                                            onClick={() => handleClick(event.id)}
                                                                            alt="Arrow Icon"
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "100%",
                                                                                objectFit: "contain"
                                                                            }}
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
    )
}

export default Popular