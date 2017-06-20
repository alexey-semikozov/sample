const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send('<div>Hello World</div>');
});

app.listen(3000);
console.log('Express started on port 3000');
