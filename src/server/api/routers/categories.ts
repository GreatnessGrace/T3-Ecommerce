import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const categoriesRouter = createTRPCRouter({
  getCategories: publicProcedure.query(async () => {
    try {
      const categories = await prisma.category.findMany({
        select: {
            name: true,
          },
    });
      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Internal server error');
    }
  }),

  // You can add more procedures for creating, updating, or deleting categories if needed
});
