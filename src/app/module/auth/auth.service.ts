import { User } from '@prisma/client';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDb = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};
const login = async (payload: Partial<User>) => {
  const { email, password } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
  }

  if (password !== isUserExist.password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password!');
  }

  const token = jwt.sign(
    {
      userId: isUserExist.id,
      email: isUserExist.email,
      role: isUserExist.role,
    },
    '###AAAaaa',
    { expiresIn: config.jwt.expires_in }
  );
  return {
    token,
  };
};

export const AuthService = {
  insertIntoDb,
  login,
};
