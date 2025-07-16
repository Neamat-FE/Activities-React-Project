import React, { useState } from 'react';
import './Hero.css';
import locationIcon from '../../assets/location-icon.svg';
import eventTicket from '../../assets/event-ticket.svg';
import calendarIcon from '../../assets/calendar.svg';
import bannerImage from '../../assets/banner-img.png';
import rightArrow from '../../assets/arrow-right-active.svg';
import leftArrow from '../../assets/arrow-left-inactive.svg';

const Hero = () => {
    const [location, setLocation] = useState('Dhaka');
    const [eventType, setEventType] = useState('All');
    const [displayDate, setDisplayDate] = useState('All dates');

    const handleDateChange = (e) => {
        const dateVal = e.target.value;
        if (dateVal) {
            const date = new Date(dateVal + 'T00:00:00');
            const formattedDate = date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            });
            setDisplayDate(formattedDate);
        } else {
            setDisplayDate('All dates');
        }
    };

    return (
        <div className="container">
            <div className="hero-content rounded-3 my-5">
                <h1 className="mb-2 fs-22">Welcome to Flight Expert!</h1>
                <p className="text-muted mb-4 fs-14">All about your journey</p>
            </div>

            <div className="search-container mx-auto rounded-4 p-4">
                <div className="row g-3 align-items-center">

                    {/* Location */}
                    <div className="col-lg-3 col-md-6">
                        <div className="search-field bg-white d-flex align-items-center position-relative rounded-3 px-4 py-3">
                            <select
                                className="form-select position-absolute w-100 h-100 opacity-0 z-2"
                                aria-label="Select location"
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Comilla">Comilla</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Chittagong">Chittagong</option>
                            </select>
                            <img src={locationIcon} alt="Location" className="field-icon" style={{ width: 24, height: 32 }} />
                            <div className="field-content flex-fill d-flex flex-column position-relative z-1" style={{ gap: 2 }}>
                                <div className="field-label fs-14 secondary-color-text">Location</div>
                                <div className="field-display d-flex align-items-center justify-content-between">
                                    <span>{location}</span>
                                    <svg className="dropdown-arrow" style={{ width: 20, height: 20 }} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Type */}
                    <div className="col-lg-3 col-md-6">
                        <div className="search-field bg-white d-flex align-items-center position-relative rounded-3 px-4 py-3">
                            <select
                                className="form-select position-absolute w-100 h-100 opacity-0 z-2"
                                aria-label="Select event type"
                                onChange={(e) => setEventType(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Conference">Conference</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                            <img src={eventTicket} alt="Event Type" className="field-icon" style={{ width: 24, height: 32 }} />
                            <div className="field-content flex-fill d-flex flex-column position-relative z-1" style={{ gap: 2 }}>
                                <div className="field-label fs-14 secondary-color-text">Event Type</div>
                                <div className="field-display d-flex align-items-center justify-content-between">
                                    <span>{eventType}</span>
                                    <svg className="dropdown-arrow" style={{ width: 20, height: 20 }} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Date Picker */}
                    <div className="col-lg-3 col-md-6">
                        <div className="search-field date-field bg-white d-flex align-items-center position-relative rounded-3 px-4 py-3">
                            <input
                                type="date"
                                className="form-control position-absolute w-100 h-100 opacity-0 z-2"
                                onChange={handleDateChange}
                            />
                            <img src={calendarIcon} alt="Calendar" className="field-icon" style={{ width: 24, height: 32 }} />
                            <div className="field-content flex-fill d-flex flex-column position-relative z-1" style={{ gap: 2 }}>
                                <div className="field-label fs-14 secondary-color-text">Date</div>
                                <div className="field-display d-flex align-items-center justify-content-between">
                                    <span>{displayDate}</span>
                                    <svg className="dropdown-arrow" style={{ width: 20, height: 20 }} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="col-lg-3 col-md-6">
                        <button className="search-button w-100 text-white primary-color-bg border-0 fs-16 fw-semibold" type="button">
                            Search
                        </button>
                    </div>

                </div>
            </div>

            <>
                {/* Banner image */}
                <div className="container my-5 py-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-end align-items-center gap-2 mb-4">
                            <h6 className="primary-color-text text-decoration-none me-2 fs-16 fw-medium">
                                See more
                            </h6>
                            {/* Custom Arrow Buttons */}
                            <button
                                className="carousel-btn border-0 bg-transparent"
                                type="button"
                                data-bs-target="#bannerImage"
                                data-bs-slide="prev"
                            >
                                <img src={leftArrow} alt="Prev" />
                            </button>
                            <button
                                className="carousel-btn border-0 bg-transparent"
                                type="button"
                                data-bs-target="#bannerImage"
                                data-bs-slide="next"
                            >
                                <img src={rightArrow} alt="Next" />
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div
                                id="bannerImage"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                {/* Indicators/Dot Controllers */}
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#bannerImage"
                                        data-bs-slide-to={0}
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#bannerImage"
                                        data-bs-slide-to={1}
                                        aria-label="Slide 2"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#bannerImage"
                                        data-bs-slide-to={2}
                                        aria-label="Slide 3"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#bannerImage"
                                        data-bs-slide-to={3}
                                        aria-label="Slide 4"
                                    />
                                </div>
                                {/* Slides */}
                                <div className="carousel-inner rounded-3">
                                    {/* Slide 1 */}
                                    <div className="carousel-item active">
                                        <img
                                            src={bannerImage}
                                            className="d-block w-100 img-fluid rounded"
                                            alt="banner img"
                                        />
                                    </div>
                                    {/* Slide 2 */}
                                    <div className="carousel-item">
                                        <img
                                            src={bannerImage}
                                            className="d-block w-100 img-fluid rounded"
                                            alt="banner img"
                                        />
                                    </div>
                                    {/* Slide 3 */}
                                    <div className="carousel-item">
                                        <img
                                            src={bannerImage}
                                            className="d-block w-100 img-fluid rounded"
                                            alt="banner img"
                                        />
                                    </div>
                                    {/* Slide 4 */}
                                    <div className="carousel-item">
                                        <img
                                            src={bannerImage}
                                            className="d-block w-100 img-fluid rounded"
                                            alt="banner img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default Hero;
