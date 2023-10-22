import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteProduct } from '../../Redux/ProductSlice';

function ProductHome() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const handleDelete = (id) => {
        dispatch(deleteProduct({ id: id }));
    }
    return (
        <div className='d-flex'>
            <Sidebar />

            <div className='container'>
                <Link to='/productCreate' className='btn btn-success my-3'>Create+</Link>
                <div className='table-responsive'>
                    <table className='table table-sm justify-content-center'>

                        <thead >
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Price</th>

                                <th className="text-center">Description</th>
                                <th className="text-center">Image</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) =>
                                    <tr key={index}>
                                        <td className="text-center">{product.id}</td>
                                        <td className="text-center">{product.name}</td>
                                        <td className="text-center">{product.price}</td>
                                        <td className="text-center">{product.description}</td>
                                        <td className="text-center">
                                            {product.image && (
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        src={product.image}
                                                        alt={`product ${product.id}`}
                                                        className="img-thumbnail" style={{ width: '10%', height: '20%' }}
                                                    />
                                                </div>
                                            )}
                                        </td>
                                        

                                        <td className="text-center">
                                            <Link to={`/productUpdate/${product.id}`} className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
                                            <button onClick={() => handleDelete(product.id)} className='btn btn-sm btn-danger ns-2'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ProductHome;
