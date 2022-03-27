import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerDocument from './swagger.json';

import './database';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router)

app.listen(3333, () => {
	console.log('Server started on port 3333! 🚀');
});
