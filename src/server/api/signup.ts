// server/api/signup.ts

import { createTRPCClient } from '../trpc';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type SignupInput = {
  name: string;
  email: string;
  password: string;
};

type SignupResponse = {
  success: boolean;
  message?: string;
};

export default async function signup(input: SignupInput): Promise<SignupResponse> {
  try {
    // Logic to create a new user in the database using Prisma
    await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });
    return { success: true, message: 'User signed up successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
