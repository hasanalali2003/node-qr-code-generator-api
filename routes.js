const express = require("express");
const controller = require("./controller");

const router = express();

router.post("/generate-qr", controller.generateQR);

module.exports = router;
