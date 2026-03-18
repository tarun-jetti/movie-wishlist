import express from 'express';
import movieRoutes from './routes/movieroutes.js';

const app =express();
app.use('/movies',movieRoutes);
const PORT = 5001;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    
}
);

