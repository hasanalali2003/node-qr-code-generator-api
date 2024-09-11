const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log("I am Listening to port :", port);
});
