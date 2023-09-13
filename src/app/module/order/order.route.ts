import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();
router.get('/', auth(ENUM_USER_ROLE.ADMIN),OrderController.getAllFromDB);
router.get('/by-customer', auth(ENUM_USER_ROLE.CUSTOMER),OrderController.getOrderByCustomer);
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.generateOrder
);
export const OrderRoutes = router;
