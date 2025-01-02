import Router from 'express';
import * as userController from '../Controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/login', userController.loginController);
userRoutes.post('/register', userController.registerController);

export default userRoutes;
