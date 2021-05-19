"use strict";

module.exports.hello = async (event) => {
    let message = "Hello World";
    const name =
        event.queryStringParameters && event.queryStringParameters.name;

    if (name !== null) {
        message = `Hello ${name}`;
    }
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
