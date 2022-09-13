import  express  from 'express';
import bodyParser from 'body-Parser';

import userRoutes from './routes/users.js'; 

const app = express();
const Port=5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.get('/', (req,res) =>{
      res.send('hello from Prathmesh');
});
app.listen(Port,() =>console.log(`Server running is on the port: http://localhost:${Port}`));