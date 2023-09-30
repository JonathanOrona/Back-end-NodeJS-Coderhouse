import { Router } from 'express';
import { passportCall } from '../utils.js';
import {  register,failRegister,login,failLogin,logout,githubcallback,github,currentUser,restartPassword } from '../controllers/users.controller.js';



const userRouter = Router();


userRouter.post('/register', register)

userRouter.get('/failRegister', failRegister)

userRouter.post('/login', login)

userRouter.get('/failLogin', failLogin);
    
userRouter.get('/github', github);

userRouter.get('/githubcallback', githubcallback);

userRouter.get('/currentUser', passportCall('jwt'), currentUser)

userRouter.put('/restartPassword', restartPassword)

userRouter.get('/logout', logout)



export default userRouter;