import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient({
    log :
        process.env.NODE_ENV === 'devlopment' ? ['quary','error','warn'] : ['error'],
});

const connectDb = async ()=>{
    try{
        await prisma.$connect();
        console.log("database connected");
    }
    catch(error){
        console.log('database not connected : ' + error);
        process.exit(1);
    }
} 
const disconnectDb = async () =>{
    await prisma.$discinnect();
}
export {prisma,connectDb,disconnectDb};