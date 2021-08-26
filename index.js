// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://aws.amazon.com/developers/getting-started/nodejs/

const layer = require('lambdaLayerTest');

exports.handler = async (event, context) => {
    console.log(event.headers.Authorization);
    console.log(process.env.environment);
    console.log(context);
    console.log('test');
    
   await layer.auth(event.headers.Authorization.split(' ')[1], context.functionName);
  
 return {
        statusCode: 200,
        body: "Success"
    };

};
