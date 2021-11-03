import 'reflect-metadata';
import express from 'express'
import './database/connect'
import routes from './routes'
import cors from 'cors';
import * as bodyParser from "body-parser";
import { createConnection } from 'typeorm';

const config: any = {
    "type": process.env.DB_DIALECT,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DEFAULT_DATABASE,
    "entities": [
       "src/app/models/*"
    ],
    "migrations": [
       "src/database/migrations/*.ts"
    ],
    "cli": {
    "migrationsDir": "src/database/migrations"
        }
    
 }

const app = express();
createConnection(config);
app.use(cors())

app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 4000, () => console.log('Server Started at http://localhost:4000'))