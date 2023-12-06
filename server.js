//importing all dependencies
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import route from "./src/routes/index.js";
import db from "./src/Helper/db.js";
import path from "path";


//configuring dotenv
dotenv.config();

//setup server
const app = express();

//for parsing query strings or req parameters
app.use(express.urlencoded({extended:true}));

//middlesware for static files accessing in assets directory
app.use(express.static('./assets'));

//setting view engine as ejs
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), "src", "views"))


//parsing cookie throught middleware
app.use(cookieParser());

app.use('/', route);

const port = process.env.PORT || 5000;

app.listen(port, (err)=>{

    if(err){
        console.log(`error in running the server ${port}`)
    }

    console.log( `Server running on port ${port}`)
}
)