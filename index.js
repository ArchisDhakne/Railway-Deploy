import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/test',(req,res)=>{
    res.send('Test route is working!');
})
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
