import express from 'express';
import {config} from 'dotenv';
import { connectDb,disconnectDb } from './config/db.js';
import movieRoutes from './routes/movieroutes.js';
config();
connectDb();


const app =express();
app.use('/movies',movieRoutes);
const PORT = 5001;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);  
}
);
process.on('unhandledRejection',(err) =>{
    console.error('unhandledRejection',err);
    Server.close( async () =>{
        await disconnectDb();
        process.exit(1);
    }
    );
});
process.on('unhandledExceptiom',(err) =>{
    console.error('unhandled exception',err);
    Server.close( async () =>{
        await disconnectDb();
        process.exit(1);
    }
    );
});
process.on('SIGTERM',(err) =>{
    console.log('SIGTERM recieved , shutting down gracefully');
    Server.close( async () =>{
        await disconnectDb();
        process.exit(0);
    }
    );
});


