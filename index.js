module.exports.ProxyResponseAWS = (isBase64, statusCode, headers, body) => {
    return {
        'isBase64Encoded': isBase64,
        'statusCode': statusCode,
        'headers': headers,
        'body': JSON.stringify(body)
    }
}