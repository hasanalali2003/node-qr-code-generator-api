const QRCode = require("qrcode");

exports.generateQRCode = async (qrCodeText, qrCodeOptions) => {
    console.log(qrCodeOptions);
    const renderOption = {
        errorCorrectionLevel: "M", // Error Correction Level
        type: "image/png",
        margin: qrCodeOptions.margin,
        color: {
            light: qrCodeOptions.bgcolor,
            dark: qrCodeOptions.color,
        },
    };
    console.log("X", renderOption);
    const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, renderOption);
    return qrCodeBuffer;
};
