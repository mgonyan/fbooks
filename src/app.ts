import dotenv from 'dotenv';
import express from 'express';

import { Request, Response } from 'express';

const app = express();

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

app.set('port', process.env.PORT || 3000);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json();
});

export default app;
