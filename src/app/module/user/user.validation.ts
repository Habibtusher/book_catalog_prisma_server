import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    email: z
      .string({
        required_error: 'email is required!',
      })
      .email(),
    password: z.string({
      required_error: 'password is required!',
    }),
    role: z.string({
      required_error: 'role is required!',
    }),
    contactNo: z.string({
      required_error: 'contact no is required!',
    }),
    address: z.string({
      required_error: 'address is required!',
    }),
    profileImg: z.string({}).optional(),
  }),
});


export const UserValidation = {
    create
}