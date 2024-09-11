# QR Code Generator API Documentation

Welcome to the QR Code Generator API documentation. This API allows you to generate QR codes with customizable options using Node.js and the `qrcode` npm package.

## Base URL

```
https://node-qr-code-generator-api.onrender.com/generate-qr
```

## Endpoint

### `POST /generate-qr`

Generate a QR code based on the provided parameters.

## Parameters

### Required Parameters

- **text**: The content to be encoded in the QR code. This can include text in any language, numbers, symbols, and emojis.

  **Type**: `string`

  **Example**: `Hello, World!` or `你好，世界！` or `😍😼🚀`

### Optional Parameters

- **options**: An object containing additional customization options for the QR code.

  - **margin**: The margin (in pixels) to be applied around the QR code.
    
    **Type**: `number`
    
    **Example**: `4`
    
  - **color**: The color of the QR code. This should be a hex color code.
    
    **Type**: `string`
    
    **Example**: `#000000` (black)
    
  - **backgroundColor**: The background color of the QR code. This should be a hex color code.
    
    **Type**: `string`
    
    **Example**: `#FFFFFF` (white)

## Response

The API will return the generated QR code image. The image will be in PNG format by default.

### Success Response

- **Code**: `200 OK`
- **Content-Type**: `image/png`
- **Body**: The QR code image.

### Error Response

- **Code**: `500 Internal Server Error`
- **Content-Type**: `application/json`
- **Body**: 
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

## Example Requests

### Example 1: Basic QR Code

```
POST /generate-qr?text=Hello%20World
```

**Response**: Returns a QR code with the text "Hello World".

### Example 2: QR Code with Custom Margin

```
POST /generate-qr?text=Hello%20World&options[margin]=3
```

**Response**: Returns a QR code with a margin of 3 pixels around it.

### Example 3: QR Code with Custom Colors

```
POST /generate-qr?text=Hello%20World&options[color]=#FF0000&options[bgcolor]=#FFFF00
```

**Response**: Returns a QR code with red color and yellow background.

## Notes

- Ensure that your `text` parameter is properly URL-encoded.
- If using optional parameters, format them as part of the `options` object in the query string.

## Installation

To set up your own instance of this API, clone the repository and install the dependencies:

```bash
git clone https://github.com/hasanalali2003/node-qr-code-generator-api.git
cd node-qr-code-generator-api
npm install
```

Start the server:

```bash
npm start
```

Your API should now be running at `http://localhost:3000`.

## Dependencies

- `qrcode`: [npm package](https://www.npmjs.com/package/qrcode)

## Contact

For questions or issues, please open an issue on the GitHub repository or contact [hasanalali887h@gmail.com](mailto:hasanalali887h@gmail.com).
