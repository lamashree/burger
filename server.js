let express =require("express")

var PORT = process.env.PORT || 8080;

var app = express();
var Parser = require('body-parser');
app.use(express.static("public"));

var methodOverride = require('method-override')
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(process.env.PORT || 8080) 
// app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
//   });
  