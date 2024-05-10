// // import { NextApiRequest, NextApiResponse } from 'next';
// // import { PrismaClient, Category } from '@prisma/client'; 

// // const prisma = new PrismaClient(); 

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method === 'GET') {
// //     try {
// //       const categories: Category[] = await prisma.category.findMany();
// //       console.log("----",categories)
// //       res.status(200).json(categories);
// //     } catch (error) {
// //       console.error('Error fetching categories:', error);
// //       res.status(500).json({ error: 'Internal server error' });
// //     }
// //   } else {
// //     res.status(405).json({ error: 'Method Not Allowed' });
// //   }
// // }

// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import { type NextRequest, type NextResponse } from "next/server";
// import { PrismaClient, Category } from '@prisma/client'; 

// import { env } from "~/env";
// import { appRouter } from "~/server/api/root";
// import { createTRPCContext } from "~/server/api/trpc";

// /**
//  * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
//  * handling a HTTP request (e.g. when you make requests from Client Components).
//  */
// const createContext = async (req: NextRequest): Promise<any> => {
//   const prisma = new PrismaClient();
//   return createTRPCContext({
//     headers: req.headers,
//     prisma: prisma,
//   });
// };

// const handler = async (req: NextRequest): Promise<NextResponse> => {
//   if (req.method === 'GET') {
//     try {
//       const { prisma } = await createContext(req);
//       const categories: Category[] = await prisma.category.findMany();
//       console.log("----", categories);
//       return {
//         status: 200,
//         json: categories,
//       };
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       return {
//         status: 500,
//         json: { error: 'Internal server error' },
//       };
//     }
//   } else {
//     return {
//       status: 405,
//       json: { error: 'Method Not Allowed' },
//     };
//   }
// };

// export { handler as GET, handler as POST };
