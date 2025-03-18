import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

// Create a new user
const createdUser = await prisma.user.create({
    data: {
        name: "Test",
        email: `test@holder.com`,
        password: `${uuidv4()}`,
    },
});

const user = await prisma.user.findFirst({
    where: {
        id: `${createdUser.id}`,
    },
});

console.log(`The User "${user?.name}" has been created.`);