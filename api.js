// Built-in Node.js modules
var path = require('path');

// NPM modules
var express = require('express')
var sqlite3 = require('sqlite3')
var bodyParser = require('body-parser');
var cors = require('cors');

var db_filename = path.join(__dirname, 'stpaul_crime.sqlite3');
var app = express();
var port = parseInt(process.argv[2],10);

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// open stpaul_crime.sqlite3 database
var db = new sqlite3.Database(db_filename, sqlite3, (err) => {
    if (err) {
        console.log('Error opening ' + db_filename);
    }
    else {
        console.log('Now connected to ' + db_filename);
    }
});

// IN cmd 'curl -X PUT -d "id=1&name=hellow%20world&email=hu%40code.org" http://localhost:8000/add-users'
// IN cmd 'curl http://localhost:8000/list-users'
app.get('/codes', (req, res) => {
    
    db.all('SELECT * FROM shelter WHERE "'+req.body.name+'";', (err,rows) => {
        
        var result = rows;
        res.type('json').send(JSON.stringify(result, null, 4));
    });
});

var server = app.listen(port);