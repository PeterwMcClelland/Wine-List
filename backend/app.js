const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/wine-routes");
const path = require('path');

require("dotenv").config({ path: path.resolve(__dirname, '../.env') });


const app = express();



// middlewares
app.use(express.json());
app.use(cors());
app.use("/wines", router);// localhost:3000/wines

mongoose.connect(
    process.env.DB_URI
    ).then(() => console.log("DataBase Connected!"))
    .then(() => {
        app.listen(3000);
    }).catch((err)=>console.log(err));



