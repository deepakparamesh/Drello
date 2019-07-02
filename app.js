var express = require('express')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , app = express()
    , port = process.env.PORT || 3000
    , router = express.Router()
    , log = require('./dev-logger.js')
    , cors = require('cors');
const boardRoutes = require('./api/routes/board.routes');
const columnRoutes = require('./api/routes/column.routes');
const cardRoutes = require('./api/routes/card.routes');
const UserRoutes = require('./api/routes/user.routes');

app.use(cors());

var server = require('http').createServer(app);

var ws = require('./ws.js')(server, true);

app.use(express.static(__dirname + '/public')); // set the static files location for the static html
// app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
// You can set morgan to log differently depending on your environment
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
  app.use(morgan('dev', {skip: function(req, res) { return res.statusCode < 400 }}));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride());                  // simulate DELETE and PUT

router.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/b/:id', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/', router);

// mongodb://localhost/gtm
// mongodb+srv://deepak:deepak@cluster0-jm7mm.mongodb.net/test?retryWrites=true&w=majority
var mongoUri = process.env.MONGO_URI || 'mongodb+srv://deepak:deepak@cluster0-jm7mm.mongodb.net/test?retryWrites=true&w=majority';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ' + mongoUri);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

app.use('/board', boardRoutes);
app.use('/column', columnRoutes);
app.use('/card', cardRoutes);
app.use('/user', UserRoutes);

server.listen(port, function () {
  log('App running on port', port);
});