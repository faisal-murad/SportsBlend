import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCategory } from '../../Redux/CategorySlice';
import Sidebar from '../Sidebar'; 
import axios from 'axios'; 

function CategoryUpdate() {
  const _id  = useParams();
  const categories = useSelector((state) => state.categories);
  const existingCategory = categories.find((category) => category._id === parseInt(_id));
  const defaultName = existingCategory ? existingCategory.name : '';
  const defaultImage = existingCategory ? existingCategory.image : '';

  const [name, setName] = useState("");
  const [image, setImage] = useState(defaultImage);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleImageUpload = (e) => {
    // const file = e.target.files[0];
    // const reader = new FileReader();

    // reader.onload = (e) => {
    //   setImage(e.target.result);
    // };

    // reader.readAsDataURL(file);
  };

  // const handleUpdate = (event) => {
  //   event.preventDefault();
  //   dispatch(
  //     updateCategory({
  //       id: parseInt(id),
  //       name,
  //       image,
  //     })
  //   );
  //   navigate('/categoryHome');
  // };

  const handleUpdate =async(_id)=>{  
    try{
      const res = await axios.put(`http://localhost:3025/api/category/updateCategory/${_id}`); 
    console.log(res);
    }
    catch(err){
      console.log("Error in handleUpdate: ",err);
    }
  }

  return (
    <>
      <div className="custom-container">
        <Sidebar />
        <div className="custom-form-container">
          <form className="custom-form" onSubmit={handleUpdate(_id)}>
            <div>
              <label className="custom-label" htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                className="custom-input"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* <div>
              <label className="custom-label" htmlFor="image">Image</label>
              <input
                type="file"
                accept="image/*"
                className="custom-input"
                onChange={handleImageUpload}
              />
            </div>
            {image && (
              <div className="custom-image-preview">
                <img src={image} alt="Uploaded" className="img-thumbnail" />
              </div>
            )} */}
            <br />
            <button className="custom-button">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CategoryUpdate;
