import { Router } from 'express';
// import express from 'express';
import {register, login, changePassword, forgotPassword}  from '../controllers/user.js';
import { authenticateUser  } from '../middlewares/authMiddleware.js';
import {validateInput } from '../middlewares/validationMiddleware.js';
import multer from 'multer'; 
const router = Router();

//registration routes
router.post('/register', validateInput, register);

//login route
router.post('/login', validateInput, login);

//changepassword routes
router.post('/changepassword', authenticateUser,  changePassword);

router.post('/forgot', forgotPassword);
 
export default router;