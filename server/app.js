const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute");
const empRoute = require("./routes/empRoute");
const bodyparser = require("body-parser");

require("dotenv").config();
const port = process.env.PORT;
const dbcon = process.env.DBCON;
mongoose.connect(dbcon).then(()=>{
    console.log("DB Connnected !!!");
})

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/admin", adminRoute);
app.use("/employee" , empRoute);


app.listen(port,()=>{
    console.log(`Server run on ${port}`);
})