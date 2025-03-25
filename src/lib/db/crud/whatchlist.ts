import { Watchlist } from '@prisma/client';
import { prisma } from '@/lib/db/prisma';

/*
Watchlist Model:
    name: string
    description: string | null
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    publicId: string
    slug: string
    id: number
    userId: number
*/

// Create Actions
export const createWatchlist = async (data: Omit<Watchlist, 'id' | 'publicId' | 'createdAt' | 'updatedAt'>): Promise<Watchlist> => {
    return prisma.watchlist.create({data});
};

// Read Actions
export const getWatchlistById = async (id: number): Promise<Watchlist | null> => {
    return prisma.watchlist.findUnique({where: {id}});
};

export const getWatchlistByPublicId = async (publicId: string): Promise<Watchlist | null> => {
    return prisma.watchlist.findUnique({where: {publicId}});
};

export const getWatchlistBySlug = async (slug: string): Promise<Watchlist | null> => {
    return prisma.watchlist.findUnique({where: {slug}});
};

export const getWatchlistsByUserId = async (userId: number): Promise<Watchlist[] | null> => {
    return prisma.watchlist.findMany({where: {userId}});
};

// Update Actions
export const updateWatchlistById = async (id: number, data: Partial<Watchlist>): Promise<Watchlist> => {
    return prisma.watchlist.update({where: {id}, data});
};

export const updateWatchlistByPublicId = async (publicId: string, data: Partial<Watchlist>): Promise<Watchlist> => {
    return prisma.watchlist.update({where: {publicId}, data});
};

// Delete Actions
export const deleteWatchlistById = async (id: number): Promise<Watchlist> => {
    return prisma.watchlist.delete({where: {id}});
};

export const deleteWatchlistByPublicId = async (publicId: string): Promise<Watchlist> => {
    return prisma.watchlist.delete({where: {publicId}});
};