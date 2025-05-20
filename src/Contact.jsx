import React from 'react';
import Navbar from './Navbar';
import './contact.css'; // Ensure this CSS file is linked
import {useState} from 'react';

const Contact = () => {

const [customer,setCustomer]=useState({
   name:"",
   email:"",
   contact:"",
   comment:""
});

const handleChange=(e)=>{
    setCustomer({...customer,[e.target.name]:e.target.value});
}

const handleSubmit = async (e) => {
    e.preventDefault();  

    try{
        const res=await fetch("http://localhost:5000/customer",      
     {  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer)
      });
      if (res.ok) {
        alert('customer registered successfully!');
      } else {
        alert('customer not registered');
      }
    } catch (error) {
      console.error('Error in registration:', error);
    }


        }
        
 
    return (

        <div>
            <Navbar />

            {/* Contact Section */}
            <div className="container">
                <h1>Contact Us</h1>

                {/* Business Information */}
                <div className="contact-info">
                    <p><strong>Address:</strong> 123, MG Road, Bengaluru</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Email:</strong> info@yourrestaurant.com</p>
                    <p><strong>Opening Hours:</strong> Monday - Sunday: 7 AM - 11 PM</p>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" name="name" value={customer.name} onChange={handleChange} required />
                        <input type="email" placeholder="Your Email"  name="email"  value={customer.email} onChange={handleChange}required />
                         <input type="tel" placeholder="Your Contact Number" name="contact" value={customer.contact} onChange={handleChange} required />
                        <textarea placeholder="Your Message" name="comment" value={customer.comment} onChange={handleChange} required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Your Restaurant - Authentic South Indian Delights</p>
            </footer>
        </div>
    );
};

export default Contact;
