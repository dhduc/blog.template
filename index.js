/** index.js **/
const port = 3000;
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
app.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.info(`server is listening on http://127.0.0.1:${port}`)
});
