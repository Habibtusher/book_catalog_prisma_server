"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        email: zod_1.z
            .string({
            required_error: 'email is required!',
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'password is required!',
        }),
        role: zod_1.z.string({
            required_error: 'role is required!',
        }),
        contactNo: zod_1.z.string({
            required_error: 'contact no is required!',
        }),
        address: zod_1.z.string({
            required_error: 'address is required!',
        }),
        profileImg: zod_1.z.string({}).optional(),
    }),
});
exports.UserValidation = {
    create
};
