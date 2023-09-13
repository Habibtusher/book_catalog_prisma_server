import { ENUM_USER_ROLE } from '../../../enums/user';
import prisma from '../../../shared/prisma';

const generateOrder = async (payload: any, user: any) => {
  console.log(user);
  const orderData = {
    userId: user.userId,
    orderedBooks: payload,
  };
  const result = await prisma.order.create({
    data: orderData,
  });
  return result;
};

const getAllFromDB = async (user: any) => {
  let result;
  if (user.role === ENUM_USER_ROLE.ADMIN) {
    result = await prisma.order.findMany({
      include: {
        user: true,
      },
    });
  }
  else{
    result = await prisma.order.findMany({
        where: {
          userId: user.userId,
        },
        include: {
          user: true,
        },
      });
  }

  return result;
};
export const OrderService = {
  generateOrder,
  getAllFromDB,
};
