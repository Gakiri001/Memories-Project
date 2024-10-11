import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from './routes/posts.route.js';

const app = express();

app.use("/posts", PostRoutes)

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://Julius:Julius123@cluster0.qsjub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
  .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
  .catch((error) => console.log(error.message))
