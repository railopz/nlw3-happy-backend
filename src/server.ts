import express from 'express'; 
import './databases/connection';

import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Started server port 3333');
})