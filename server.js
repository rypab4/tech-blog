const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//cookie
const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
//express function to use cookie
app.use(session(sess));

//this is for the date function to be used in handlebars for posts
const hbs = exphbs.create({
    helpers: {
        format_date: date => {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});
// sets the handlebars engine for rendering views
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
//add middleware to the Express app that parses incoming requests with JSON payloads and adds the parsed data to the req.body property.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//make public static so don't have to write a long path
app.use(express.static(path.join(__dirname, "public")));
//got to controllers tie in
app.use(require('./controllers/'));
//port to use
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    sequelize.sync({ force: false });
});
