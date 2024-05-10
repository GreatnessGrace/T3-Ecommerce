import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const categoriesRouter = createTRPCRouter({
  getCategories: publicProcedure.query(async () => {
    try {
      const categories = await prisma.category.findMany();
      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Internal server error');
    }
  }),

  // You can add more procedures for creating, updating, or deleting categories if needed
});