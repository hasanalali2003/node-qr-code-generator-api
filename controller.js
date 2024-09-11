const service = require("./service");

exports.generateQR = async (req, res) => {
    try {
        const data = req.query;

        const qrCodeText = data.text;
        const qrCodeOptions = data.options;
        const qrCodeBuffer = await service.generateQRCode(
            qrCodeText,
            qrCodeOptions
        );
        res.setHeader("Content-Disposition", "attachment; filename=qrcode.png");
        res.type("image/png").send(qrCodeBuffer);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};
