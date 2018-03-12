'use strict';
const lambdaResponse = require('../index');

describe('Tests Lambda Responses', () => {
    it('Response With Base Template', () => {
        const response = lambdaResponse.ProxyResponseAWS(false, 200, {}, {});
        expect(response.statusCode).toBe(200);
        expect(response.isBase64Encoded).toBe(false);
    });

    it('Response with expect object', () => {
        const toExpect = {
            'isBase64Encoded': false,
            'statusCode': 500,
            'headers': {},
            'body': '{}'
        };
        const response = lambdaResponse.ProxyResponseAWS(false, 500, {}, {});
        expect(response.isBase64Encoded).toBe(toExpect.isBase64Encoded);
        expect(response.statusCode).toBe(toExpect.statusCode);
        expect(response.body).toBe(toExpect.body);
    });
});