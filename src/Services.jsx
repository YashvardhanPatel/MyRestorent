import React from 'react';
import Navbar from './Navbar';
import './services.css';

const Services = () => {
    return (
        <div>
            <Navbar />

            {/* Services Section */}
            <div className="container">
                <h1>Our Services</h1>

                <div className="services-grid">
                    {/* Dining Experience */}
                    <div className="service-item">
                        <h2>Authentic South Indian Dining</h2>
                        <p>Enjoy a traditional dining experience with an extensive menu featuring freshly prepared dosas, idlis, vadas, biryanis, and more.</p>
                    </div>

                    {/* Catering Services */}
                    <div className="service-item">
                        <h2>Catering for Events</h2>
                        <p>Hosting a wedding, corporate event, or private gathering? Let us bring the rich flavors of South India to your special occasion.</p>
                    </div>

                    {/* Online Ordering */}
                    <div className="service-item">
                        <h2>Online Ordering & Delivery</h2>
                        <p>Craving South Indian food at home? Order online for a quick and reliable doorstep delivery experience.</p>
                    </div>

                    {/* Takeaway */}
                    <div className="service-item">
                        <h2>Takeaway & Express Pickup</h2>
                        <p>Short on time? Grab your favorite South Indian meals on the go with our fast takeaway service.</p>
                    </div>

                    {/* Private Dining */}
                    <div className="service-item">
                        <h2>Private Dining & Reservations</h2>
                        <p>Looking for a quiet evening or a family gathering? Book a private dining experience for a special South Indian feast.</p>
                    </div>

                    {/* Cooking Workshops */}
                    <div className="service-item">
                        <h2>South Indian Cooking Workshops</h2>
                        <p>Learn the art of making authentic South Indian dishes with our cooking workshops led by expert chefs.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Namma Udupi - Authentic South Indian Delights</p>
            </footer>
        </div>
    );
};

export default Services;
