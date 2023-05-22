const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/wine-routes");
const path = require('path');

require("dotenv").config({ path: path.resolve(__dirname, './../.env') });


const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/wines", router);// localhost:3000/wines

var corsOptions = {
    origin: 'https://wine-list.herokuapp.com/', // replace with your own origin
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then(() => console.log("DataBase Connected!"))
    .then(() => {
        app.listen(PORT, () => {
            console.warn(`App listening on http://localhost:${PORT}`);
          });

          
    }).catch((err)=>console.log(err));



