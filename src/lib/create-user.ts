import { v4 as uuidv4 } from 'uuid';
import {createUser, getUserById} from "@/lib/db/crud/user";

// Create a new user
const newUser = await createUser(
    {
        name: "System User",
        username: "system",
        email: `system@holder.com`,
        password: `${uuidv4()}`,
        image: null,
        bio: null,
        isActive: true
    }
);

const createdUser = await getUserById(newUser.id);

console.log(`The User "${createdUser?.username}" has been created.`);