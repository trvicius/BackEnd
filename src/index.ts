import 'reflect-metadata';
import express from 'express'
import './database/connect'
import routes from './routes'
import cors from 'cors';
import * as bodyParser from "body-parser";
import { createConnection } from 'typeorm';

const app = express();
createConnection();
app.use(cors())

app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 4000, () => console.log('Server Started at http://localhost:4000'))