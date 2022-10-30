const express = require('express');
const hostname = '127.0.0.1';
const app = express();
var PORT = 3520;

app.get('/', (req, res) => {
res.statusCode = 200; 
res.type('json')
var rs = {
    slackUsername: 'awsumbret',
backend: true,
age: 28,
bio: "I am a FullStack Freelance developer that employs the use of Javascript and its frameworks to create web experiences"
}
const jsonContent = JSON.stringify(rs);
res.end(jsonContent);
});
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
    console.log(`HTTP Server listening at http://${hostname}:${PORT}/`)
});
