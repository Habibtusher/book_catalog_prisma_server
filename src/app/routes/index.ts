import express from 'express';
import { AuthRoutes } from '../module/auth/auth.routes';
import { BookRoutes } from '../module/book/book.route';
import { CategoryRoutes } from '../module/category/category.route';
import { UserRoutes } from '../module/user/user.routes';

const router = express.Router();

const moduleRoutes = [

  {
    path: "/auth",
    route: AuthRoutes
  },
  {
    path: "/users",
    route: UserRoutes
  },
  {
    path: "/categories",
    route: CategoryRoutes
  },
  {
    path: "/books",
    route: BookRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
// console.log("🚀 ~ file: index.ts:20 ~ moduleRoutes:", moduleRoutes)
export default router;
