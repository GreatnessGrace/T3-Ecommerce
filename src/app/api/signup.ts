// src/app/api/signup.ts

import { createTRPCClient } from '@trpc/client';

const trpc = createTRPCClient({
  url: '/api/signup', // Replace this with your tRPC server URL
});

type SignupInput = {
  name: string;
  email: string;
  password: string;
};

export async function signup(input: SignupInput) {
  try {
    const response = await trpc?.mutation('signup', input);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Signup error:', error);
    throw error; // Re-throw the error for handling in the component
  }
}
