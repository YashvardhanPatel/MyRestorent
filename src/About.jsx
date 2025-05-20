import React from 'react';
import Navbar from './Navbar';
import './about.css'; // Ensure this CSS file is linked

const About = () => {
    return (
        <div>
            <Navbar />

            {/* Main Content */}
            <div className="container">
                {/* Home Section */}
                <div id="home" className="section">
                    <h1>Welcome to Namma Udupi</h1>
                    <p className="content-section">Experience the authentic flavors of South India, crafted with love and tradition.</p>
                </div>

                {/* About Section */}
                <div id="about" className="section">
                    <h2>About Us</h2>
                   <p className="content-section">
    Namma Udupi is a celebration of South Indian flavors, deeply rooted in tradition and authenticity. From the sizzling golden-brown dosas, served with flavorful chutneys and hearty sambar, to the comforting aroma of freshly brewed filter coffee, every dish is crafted to bring you the essence of South India.

    Our recipes are inspired by generations of culinary wisdom, using handpicked spices and fresh ingredients to ensure an unmatched dining experience. Whether you’re indulging in a crispy vada, savoring the rich taste of Chettinad chicken, or enjoying the melt-in-your-mouth texture of Mysore Pak, every bite tells a story of heritage and passion.

    At Namma Udupi, we strive to create an environment where food brings people together, evoking nostalgia and joy. Whether you’re joining us for a morning breakfast of steaming idlis or treating yourself to a wholesome South Indian thali, we promise a taste of home with every meal.

    Step into our restaurant and immerse yourself in the sights, sounds, and flavors of South India. The warmth of our hospitality, paired with our love for authentic cooking, makes every visit a memorable one. Experience the magic of Udupi cuisine, where tradition meets taste!
</p>

                </div>

                {/* Menu Highlights */}
                <div id="menu-highlights" className="section">
                    <h2>Signature Dishes</h2>
                    <ul className="menu-list">
                        <li>Masala Dosa - ₹120</li>
                        <li>Idli-Vada Combo - ₹100</li>
                        <li>Pongal - ₹90</li>
                        <li>Chettinad Chicken - ₹250</li>
                        <li>Filter Coffee - ₹50</li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Namma Udupi - Authentic South Indian Delights</p>
            </footer>
        </div>
    );
};

export default About;
