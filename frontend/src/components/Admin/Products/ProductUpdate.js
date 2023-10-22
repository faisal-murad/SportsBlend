import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../Redux/ProductSlice';

function ProductUpdate() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const existingProduct = products.find((product) => product.id === parseInt(id));

  const defaultName = existingProduct ? existingProduct.name : '';
  const defaultPrice = existingProduct ? existingProduct.price : '';
  const defaultDescription = existingProduct ? existingProduct.description : '';
  const defaultImage = existingProduct ? existingProduct.image : '';

  const [name, setName] = useState(defaultName);
  const [price, setPrice] = useState(defaultPrice);
  const [description, setDescription] = useState(defaultDescription);
  const [image, setImage] = useState(defaultImage);

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
    dispatch(
      updateProduct({
        id: parseInt(id),
        name,
        price,
        description,
        image,
      })
    );
    navigate('/productHome');
  };

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='custom-form-container w-100 vh-100 justify-content-center align-items-center'>
        <div className='custom-form w-50 border bg-dark text-white p-5'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                placeholder='Enter Product Name'
                className='custom-input form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor='price'>Price</label>
              <input
                type='text'
                name='price'
                placeholder='Enter Product Price'
                className='custom-input form-control'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label htmlFor='image'>Image</label>
              <input
                type='file'
                accept='image/*'
                name='image'
                className='custom-input form-control'
                onChange={handleImageUpload}
                required
              ></input>
            </div>

            <div>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                name='description'
                placeholder='Enter Product Description'
                className='custom-input form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></input>
              <br></br>
              <button className='custom-button btn btn-primary'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;
