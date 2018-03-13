# Lambda Proxy Integration
When you create your a AWS Lambda and integrate a Proxy API Gateway, you need to send a structure response to the API Gateway.

## Installation
`npm install --save aws-proxy-lambda-response`

## How to Use
This packet have a transfor function called **ProxyResponseAWS**, this function receive 4 parameters

* **isBase64**: a boolean value (true|false) if your response is in base64.
* **statusCode**: the http status code to response (200,400,500, etc).
* **headers**: if you need headers to response, send this like a JSON object {key: value}
* **body**: the custom body to response to Api Gateway, send a JSON object {key: value}

## Example

```javascript
  const lambdaResponse = require('aws-proxy-lambda-response');
 
  exports.handler = (event, context, callback) => {
    // response method needs at least 4 parameters
    // isBase64, statusCode, headers, body
    const response = lambdaResponse.ProxyResponseAWS(false, 200, {}, {"name": "Alex Mejicanos"});
    
    callback(null, response);
  };
  ```
