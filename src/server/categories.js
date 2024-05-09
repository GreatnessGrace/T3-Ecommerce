import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function categories() {
  try {
    const categories = Array.from({ length: 100 }, () => ({
      name: faker.commerce.department(),
    }));

    await prisma.category.createMany({
      data: categories,
    });

    console.log('Categories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

categories();
