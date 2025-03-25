import { Account } from '@prisma/client';
import { prisma } from '@/lib/db/prisma';

/*
Account Model:
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    publicId: string
    id: number
    userId: number
*/

// Create Actions
export const createAccount = async (data: Omit<Account, 'id' | 'publicId'>): Promise<Account> => {
    return prisma.account.create({data});
};

// Read Actions
export const getAccountById = async (id: number): Promise<Account | null> => {
    return prisma.account.findUnique({where: {id}});
};

export const getAccountByPublicId = async (publicId: string): Promise<Account | null> => {
    return prisma.account.findUnique({where: {publicId}});
};

export const getAccountsByProvider = async (provider: string): Promise<Account[] | null> => {
    return prisma.account.findMany({where: {provider}});
};

export const getAccountsByUserId = async (userId: number): Promise<Account[] | null> => {
    return prisma.account.findMany({where: {userId}});
};

// Update Actions
export const updateAccountById = async (id: number, data: Partial<Account>): Promise<Account> => {
    return prisma.account.update({where: {id}, data});
};

export const updateAccountByPublicId = async (publicId: string, data: Partial<Account>): Promise<Account> => {
    return prisma.account.update({where: {publicId}, data});
};

// Delete Actions
export const deleteAccountById = async (id: number): Promise<Account> => {
    return prisma.account.delete({where: {id}});
};

export const deleteAccountByPublicId = async (publicId: string): Promise<Account> => {
    return prisma.account.delete({where: {publicId}});
};