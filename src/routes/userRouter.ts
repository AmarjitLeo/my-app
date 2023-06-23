import express from 'express';
import { create ,  getUsers , updateUser , deleteUser , getUserById} from '../controller/usersController'
import { userRoutes } from '../helper/routes';
const router = express.Router()


router.get(userRoutes.UsersRoute , getUsers )
router.get(userRoutes.UserByIdRoute , getUserById)
router.post(userRoutes.UsersRoute , create)

router.post(userRoutes.UserByIdRoute , updateUser )

router.delete(userRoutes.UserByIdRoute , deleteUser )
export { router as userRouter}