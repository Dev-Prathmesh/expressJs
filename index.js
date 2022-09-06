import  express  from 'express';
import bodyParser from 'body-Parser';
import userRoutes from './routes/user.js'; 
const app = express();

const Port=5000;
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.get('/', (req,res) =>{
    console.log('Test!');
    res.send('hello from homepage');
});
app.listen(Port,() =>console.log(`Server running is on the port: http://localhost ${Port}`));