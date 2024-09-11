const QRCode = require("qrcode");

exports.generateQRCode = async (qrCodeText, qrCodeOptions) => {
    const {
        margin = 4, // Default margin
        bgcolor = "#ffffff", // Default background color
        color = "#000000", // Default color
    } = qrCodeOptions;
    const renderOption = {
        errorCorrectionLevel: "M", // Error Correction Level
        type: "image/png",
        margin: margin,
        color: {
            light: bgcolor,
            dark: color,
        },
    };
    const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, renderOption);
    return qrCodeBuffer;
};
