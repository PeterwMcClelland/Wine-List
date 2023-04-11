const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/wine-routes");
const path = require('path');

require("dotenv").config({ path: path.resolve(__dirname, '../.env') });


const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/wines", router);// localhost:3000/wines

mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: false,
        useUnifiedTopology: false,
    }
    ).then(() => console.log("DataBase Connected!"))
    .then(() => {
        app.listen(PORT, () => {
            console.warn(`App listening on http://localhost:${PORT}`);
          });

    }).catch((err)=>console.log(err));



