// Import the main client, not the extension stub
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:
        // Fixed typo: 'devlopment' -> 'development'
        // Fixed typo: 'quary' -> 'query'
        process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

const connectDb = async () => {
    try {
        await prisma.$connect();

        console.log("Database connected successfully");
    }
    catch (error) {
        console.log('Database connection failed: ' + error);
        process.exit(1);
    }
}

const disconnectDb = async () => {
    // Fixed typo: '$discinnect' -> '$disconnect'
    await prisma.$disconnect(); 
}

export { prisma, connectDb, disconnectDb };