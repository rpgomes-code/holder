import { User } from '@prisma/client';
import { prisma } from '@/lib/db/prisma';

/*
User Model:
    id: number
    publicId: string
    email: string
    name: string | null
    username: string
    password: string
    image: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
*/

// Create Actions
export const createUser = async (data: Omit<User, 'id' | 'publicId' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    return prisma.user.create({data});
};

// Read Actions
export const getUserById = async (id: number): Promise<User | null> => {
    return prisma.user.findUnique({where: {id}});
};

export const getUserByPublicId = async (publicId: string): Promise<User | null> => {
    return prisma.user.findUnique({where: {publicId}});
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
    return prisma.user.findUnique({where: {email}});
};

export const getUserByUsername = async (username: string): Promise<User | null> => {
    return prisma.user.findUnique({where: {username}});
};

// Update Actions
export const updateUserById = async (id: number, data: Partial<User>): Promise<User> => {
    return prisma.user.update({where: {id}, data});
};

export const updateUserByPublicId = async (publicId: string, data: Partial<User>): Promise<User> => {
    return prisma.user.update({where: {publicId}, data});
};

// Delete Actions
export const deleteUserById = async (id: number): Promise<User> => {
    return prisma.user.delete({where: {id}});
};

export const deleteUserByPublicId = async (publicId: string): Promise<User> => {
    return prisma.user.delete({where: {publicId}});
};