"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const user_1 = require("../../../enums/user");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const generateOrder = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(user);
    const orderData = {
        userId: user.userId,
        orderedBooks: payload,
    };
    const result = yield prisma_1.default.order.create({
        data: orderData,
    });
    return result;
});
const getAllFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (user.role === user_1.ENUM_USER_ROLE.ADMIN) {
        result = yield prisma_1.default.order.findMany({
            include: {
                user: true,
            },
        });
    }
    else {
        result = yield prisma_1.default.order.findMany({
            where: {
                userId: user.userId,
            },
            include: {
                user: true,
            },
        });
    }
    return result;
});
exports.OrderService = {
    generateOrder,
    getAllFromDB,
};
