const http = require('http'),
    hostname = 'localhost',
    port = 3000,
    express = require('express'),
    app = express();

app.use(express.static(__dirname));
app.get('/', (req,res) => {
    res.sendStatus(200);
    res.sendFile(path.join(__dirname + '/index.html'));
});
//mount other paths
// in this case render 404 for any other path than '/'
app.get("*", (req, res) => {
    res.status(404).send('<h1>File not found</h1>');
    res.end();
});
  
http.createServer(app).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})