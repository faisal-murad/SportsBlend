import React, { useState, useEffect } from 'react';
import { addCategory } from '../../Redux/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './adminCat.css'
import axios from 'axios';

function CategoryCreate() {


  const [name, setName] = useState();
  const [photo, setPhoto] = useState('');
  const [image2, setImage2] = useState('');
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleFileSelect = (e) => {
  // }
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    // const reader = new FileReader();

    // reader.onload = (e) => {
    //   setImage2(e.target.result); // Store the image data as a base64 string
    // };

    // reader.readAsDataURL(file); 

    // setImage(e.target.files[0]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("photo", e.target.files[0]); // Append the image data
    formData.append("name", name);   // Append the name field
    formData.append("photo", photo); // Append the image data
    axios.post("http://localhost:3025/api/category/createCategory", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate('/categoryHome');
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("image", image); // Append the image data
  //   formData.append("name", name);   // Append the name field

  //   const newCategory = {
  //     id: categories.length + 1,
  //     name,
  //     image, // Store the image data
  //   };
  //   dispatch(addCategory(newCategory));

  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: "http://localhost:3025/api/category/createCategory",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     Handle the response if needed
  //     console.log(response);
  //   } catch (error) {
  //     Handle errors
  //     console.error(error);
  //   }

  //   navigate('/categoryHome');
  // }



  return (
    <>
      <div>
        <label htmlFor="image">Image</label>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
          <input
            type="file"
            className="custom-form-control"
            onChange={handleFileSelect}
            required
          ></input>
          <br></br>
          <button className="custom-btn-primary">Create</button>
        </form>
      </div>
    </>
  );
}

export default CategoryCreate;

