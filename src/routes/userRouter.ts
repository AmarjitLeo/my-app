import express from 'express';
import { create ,  getUsers , updateUser , deleteUser , getUserById} from '../controller/usersController'
const router = express.Router()


router.get('/users' , getUsers )
router.get('/users/:id' , getUserById)
router.post('/users' , create)

router.post('/users/:id' , updateUser )

router.delete('/users/:id' , deleteUser )
export { router as userRouter}