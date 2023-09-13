import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();
router.get('/',BookController.getAllFromDB)
router.get('/:categoryId/category',BookController.getBooksByCategory)
router.get('/:id',BookController.getBookById)
router.patch('/:id',BookController.update)
router.delete('/:id',BookController.deleteBook)
router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.insertIntoDB
);

export const BookRoutes = router;
