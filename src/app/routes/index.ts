import express from 'express';
import { AuthRoutes } from '../module/auth/auth.routes';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
// console.log("🚀 ~ file: index.ts:20 ~ moduleRoutes:", moduleRoutes)
export default router;
