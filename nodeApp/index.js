const express = require('express'),
	app = express(),
	port = process.env.PORT || 3000
  require('./database');
  tk = require('./data/tk')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/includes', express.static(`${__dirname}/public`));
app.use('/', express.static('./'));

app.use( (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, user_id, session_id");
	res.set("Content-Type", "application/json");
	next();
});

app.all('*', (req, res, next) => {
	// console.log(req.headers);
  console.log("runs for all HTTP verbs first");
	next();
});

/*---------------- Tk Routes ----------------*/
app.post('/createTkInstruction/', tk.createTkInstruction);
app.get('/getTkInstructions', 	tk.getTkInstructions);

/*--------------- Others Routes -------------*/
app.all('*', function(req, res) {
  var error = {
    "error":"url not found",
  	"help": "TBD"
  };
  res.status(200).json(error);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
