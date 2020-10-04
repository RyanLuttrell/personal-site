exports.handler = function(event, context, callback) {
    //your server-side funtionality

    callback(null, {
        statusCode: 200,
        body: 'Hello, World'
    });
}