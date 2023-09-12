import express from 'express';
import { UserRoutes } from '../module/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/user",
    route: UserRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, router.route));
export default router;
