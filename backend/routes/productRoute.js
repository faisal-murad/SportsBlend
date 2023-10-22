import { Router } from 'express'; 
import uploadMiddleware from '../middlewares/upload.js';
import { createProduct } from '../controllers/product.js';

const router = Router(); 
 
// router.get('/displayCategory', displayCategory);

// router.post('/createProduct',uploadMiddleware.single("photo"), createProduct); 
router.post('/createProduct', createProduct); 

export default router;