import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts'

app.use('/posts', postRoutes)

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors())

//const uri = 'mongodb+srv://eshop-user:Muñenapoleon3-1@cluster0.ijyp3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const uri = "mongodb+srv://eshop-user:Muñenapoleon3-1@cluster0.ijyp3.mongodb.net/db1?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

   