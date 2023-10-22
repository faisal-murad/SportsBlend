
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import axios from 'axios';  
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  

function CategoryHome() { 
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3025/api/category/displayCategory")
      .then((res) => {
        console.log("\nTHe photos or data are ", res.data, "\n");
        setPhotos(res.data);

      })
      .catch((err) => console.log(err));
    }, [])

    const handleDelete =async(_id)=>{ 
      try{
        const res = await axios.delete(`http://localhost:3025/api/category/deleteCategory/${_id}`); 
      console.log(res);
      }
      catch(err){
        console.log("Error in handleDelete: ",err);
      }
    }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className='container'>
          <Link to="/categoryCreate" className='custom-btn btn-success my-3'>Create+</Link>
          {photos.map(({name, photo, _id }) => (
            <div key={_id} className='table-responsive'>
              <h1>{name}</h1>
              <img className="custom-form-control"
                src={`http://localhost:3025/images/${photo}`} 
                alt={`${photo}`}
              />
 
                    <Link to={`/categoryUpdate/${_id}`} className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-danger ns-2'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
// /${category.id}
export default CategoryHome;
 