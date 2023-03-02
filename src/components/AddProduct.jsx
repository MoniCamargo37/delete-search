import React, { useState } from 'react'

export default function AddProduct({handleAddProduct}) {
  const initialState = {
    name: '',
    image: '',
    price: 0
  }
  const [addProduct, setAddProduct] = useState(initialState);

  const handleChange = (e) => {
    setAddProduct(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    // ITERATION 4
    // Update the state according to the corresponding input
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(addProduct);
    setAddProduct(initialState);
    // ITERATION 4
    // Send the course info to the parent
    // Restart the newProduct state to its initial value
  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <label>Product name</label>
        <input type="text" name="name" value={addProduct.name} onChange={handleChange} required />
        <label>Product image</label>
        <input type="text" name="image" required value={addProduct.image} onChange={handleChange} />
        <label>Product price</label>
        <input type="number" name="price" required value={addProduct.price} onChange={handleChange} />
        <button type="submit" className="btn">Create</button>
      </form>
    </div>
  )
}
