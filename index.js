const express = require("express");

let app = express();

app.use(express.static(__dirname + '/public/'));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log("Server is running on port " + port);
    console.log("App is Running!!!");
    
});