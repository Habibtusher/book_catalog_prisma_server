import prisma from "../../../shared/prisma"

const getAllFromDB =async () => {
    const result = await prisma.user.findMany({})
    return result
}

export const UserService = {
    getAllFromDB
}