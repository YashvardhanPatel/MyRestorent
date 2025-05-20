import React, { useState } from 'react';
import "./postitems.css";

const PostItems = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setItem(prevState => ({ ...prevState, image: e.target.value }));
  };


const handleSubmit = async (e) => {
    e.preventDefault();  

    try{
        const res=await fetch("http://localhost:5000/item",      
     {  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      });
      if (res.ok) {
        alert('item added successfully!');
      } else {
        alert('item not registered');
      }
    } catch (error) {
      console.error('Error in registration:', error);
    }


}

  return (
    <div className="submission-container">
      <div className="submission-card">
        <h2>Submit Your Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Image:</label>
          <input type="text" name="image"  onChange={handleImageUpload} value={item.image} />

          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter product name" onChange={handleChange} value={item.name} required />

          <label>Description:</label>
          <textarea name="description" placeholder="Enter product description" onChange={handleChange} value={item.description} required></textarea>

          <label>Price:</label>
          <input type="number" name="price" placeholder="Enter price" onChange={handleChange}value={item.price} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PostItems;
