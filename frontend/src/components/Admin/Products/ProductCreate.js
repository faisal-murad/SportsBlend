import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { addProduct } from '../../Redux/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductCreate() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      image,
      description,
    };
    dispatch(addProduct(newProduct));
    navigate('/productHome');
  };

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className="custom-form-container w-100 vh-100 justify-content-center align-items-center">
        <div className="custom-form w-50 border bg-dark text-white p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                placeholder="Enter Product Name"
                className='custom-input form-control'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor='price'>Price</label>
              <input
                type='text'
                name='price'
                placeholder="Enter Product Price"
                className='custom-input form-control'
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor='image'>Front Image</label>
              <input
                type='file'
                accept='image/*'
                name='frontImage'
                className='custom-input form-control'
                onChange={handleImageUpload}
                required
              />
            </div>
            <div>
              <label htmlFor='image'>Back Image</label>
              <input
                type='file'
                accept='image/*'
                name='backImage'
                className='custom-input form-control'
                onChange={handleImageUpload}
                required
              />
            </div>

            <div>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                name='description'
                placeholder="Enter Product Description"
                className='custom-input form-control'
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <br />
              <button className='custom-button btn btn-primary'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
