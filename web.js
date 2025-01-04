const express=require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
let app = express()

const homeRouter = require("./routes/home.js")


app.set('views', __dirname + '/templates');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine());

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true })); // Use Express's built-in parser for form data
app.use(express.json()); // Allows parsing of JSON
app.use(cookieParser());

app.use("/", homeRouter);


app.listen(8000, () => {
    console.log("App is running on port:", 8000)
})
