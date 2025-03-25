import { Portfolio } from '@prisma/client';
import { prisma } from '@/lib/db/prisma';

/*
Portfolio Model:
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
export const createPortfolio = async (data: Omit<Portfolio, 'id' | 'publicId' | 'createdAt' | 'updatedAt'>): Promise<Portfolio> => {
    return prisma.portfolio.create({data});
};

// Read Actions
export const getPortfolioById = async (id: number): Promise<Portfolio | null> => {
    return prisma.portfolio.findUnique({where: {id}});
};

export const getPortfolioByPublicId = async (publicId: string): Promise<Portfolio | null> => {
    return prisma.portfolio.findUnique({where: {publicId}});
};

export const getPortfolioBySlug = async (slug: string): Promise<Portfolio | null> => {
    return prisma.portfolio.findUnique({where: {slug}});
};

export const getPortfoliosByUserId = async (userId: number): Promise<Portfolio[] | null> => {
    return prisma.portfolio.findMany({where: {userId}});
};

// Update Actions
export const updatePortfolioById = async (id: number, data: Partial<Portfolio>): Promise<Portfolio> => {
    return prisma.portfolio.update({where: {id}, data});
};

export const updatePortfolioByPublicId = async (publicId: string, data: Partial<Portfolio>): Promise<Portfolio> => {
    return prisma.portfolio.update({where: {publicId}, data});
};

// Delete Actions
export const deletePortfolioById = async (id: number): Promise<Portfolio> => {
    return prisma.portfolio.delete({where: {id}});
};

export const deletePortfolioByPublicId = async (publicId: string): Promise<Portfolio> => {
    return prisma.portfolio.delete({where: {publicId}});
};