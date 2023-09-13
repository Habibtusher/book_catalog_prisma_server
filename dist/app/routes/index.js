"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../module/auth/auth.routes");
const book_route_1 = require("../module/book/book.route");
const category_route_1 = require("../module/category/category.route");
const order_route_1 = require("../module/order/order.route");
const user_routes_1 = require("../module/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes
    },
    {
        path: "/users",
        route: user_routes_1.UserRoutes
    },
    {
        path: "/categories",
        route: category_route_1.CategoryRoutes
    },
    {
        path: "/books",
        route: book_route_1.BookRoutes
    },
    {
        path: "/orders",
        route: order_route_1.OrderRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
// console.log("🚀 ~ file: index.ts:20 ~ moduleRoutes:", moduleRoutes)
exports.default = router;
