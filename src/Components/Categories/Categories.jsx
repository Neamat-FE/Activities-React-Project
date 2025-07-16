import React from 'react'
import arrowLeft from '../../assets/arrow-left-inactive.svg'
import arrowRight from '../../assets/arrow-right-active.svg'
import categoryImg1 from '../../assets/categories-1.png'
import categoryImg2 from '../../assets/categories-2.png'
import categoryImg3 from '../../assets/categories-3.png'
import categoryImg4 from '../../assets/categories-4.png'
import categoryImg5 from '../../assets/categories-5.png'
import categoryImg6 from '../../assets/categories-6.png'


const categories = [
    {
        id: 1,
        image: categoryImg1,
        title: "Activities and Adventures",
        alt: "Activities & Adventures"
    },
    {
        id: 2,
        image: categoryImg2,
        title: "Music Events",
        alt: "Music Events"
    },
    {
        id: 3,
        image: categoryImg3,
        title: "Music Events",
        alt: "Music Events"
    },
    {
        id: 4,
        image: categoryImg4,
        title: "Theater and Performing Arts",
        alt: "Performing Arts"
    },
    {
        id: 5,
        image: categoryImg5,
        title: "Experiences",
        alt: "Experiences"
    },
    {
        id: 6,
        image: categoryImg6,
        title: "Restaurants",
        alt: "Restaurants"
    }
];



const Categories = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="col-12">
                    <div className="d-flex justify-content-end align-items-center gap-2 mb-4">
                        <h6 className="primary-color-text text-decoration-none me-2 fs-16 fw-medium">
                            See more
                        </h6>
                        {/* Custom Arrow Buttons */}
                        <button
                            className="carousel-btn border-0 bg-transparent"
                            type="button"
                            data-bs-target="#categorySlider"
                            data-bs-slide="prev"
                        >
                            <img src={arrowLeft} alt="Prev" />
                        </button>
                        <button
                            className="carousel-btn border-0 bg-transparent"
                            type="button"
                            data-bs-target="#categorySlider"
                            data-bs-slide="next"
                        >
                            <img src={arrowRight} alt="Next" />
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div id="categorySlider" className="carousel slide" data-bs-ride="false">
                            {/* Indicators */}
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#categorySlider"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#categorySlider"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#categorySlider"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                            </div>
                            {/* Slides */}
                            <div className="carousel-inner">
                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                    <div className="row">
                                        {categories.map((category) => (
                                            <div className="col-lg-2 col-md-4 col-6 mb-1" key={category.id}>
                                                <div className="category-card object-fit-cover rounded-3 overflow-hidden mb-3 position-relative">
                                                    <img
                                                        src={category.image}
                                                        className="w-100 object-fit-cover rounded-3"
                                                        alt={category.alt}
                                                    />
                                                    <div className="category-overlay position-absolute bottom-0 left-0 right-0 color-white p-3 fw-semibold">
                                                        <div>{category.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                {/* Slide 2 */}
                                <div className="carousel-item">
                                    <div className="row">
                                        {categories.map((category) => (
                                            <div className="col-lg-2 col-md-4 col-6 mb-1" key={category.id}>
                                                <div className="category-card object-fit-cover rounded-3 overflow-hidden mb-3 position-relative">
                                                    <img
                                                        src={category.image}
                                                        className="w-100 object-fit-cover rounded-3"
                                                        alt={category.alt}
                                                    />
                                                    <div className="category-overlay position-absolute bottom-0 left-0 right-0 color-white p-3 fw-semibold">
                                                        <div>{category.title}</div>
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

export default Categories