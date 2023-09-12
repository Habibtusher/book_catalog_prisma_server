import express from 'express';
import { UserController } from './user.controllers';

const router = express.Router()

router.get("/",UserController.getAllFromDB)
export const UserRoutes = router