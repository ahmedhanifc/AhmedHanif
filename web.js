const express=require('express')
const handlebars = require('express-handlebars')
let app = express()

//All the Routers of Our Application
const homeRouter = require("./routes/home.js")
const blogRouter = require("./routes/blog.js")

app.set('views', __dirname + '/templates');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine());

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true })); // Use Express's built-in parser for form data
app.use(express.json()); // Allows parsing of JSON

app.use("/", homeRouter);
app.use("/blog", blogRouter);

app.listen(8000, () => {
    console.log("App is running on port:", 8000)
})
