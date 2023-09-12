import prisma from "../../../shared/prisma"

const getAllFromDB =async () => {
    const result = await prisma.user.findMany({})
    return result
}
const findById =async (id:string) => {
    const result = await prisma.user.findUnique({
        where:{
            id
        }
    })
    return result
}

export const UserService = {
    getAllFromDB,
    findById
}