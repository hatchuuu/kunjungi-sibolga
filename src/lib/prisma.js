import { PrismaClient } from '@prisma/client'

// const globalPrisma = globalThis.prisma

// export const prisma = globalPrisma || new PrismaClient()
// if (process.env.NODE_ENV === 'production') {
//     globalPrisma.prisma = prisma
// }

let prisma

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma