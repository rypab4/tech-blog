const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Cookies store
const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//handle bars with helpers
const hbs = exphbs.create({
    helpers: {
        format_date: date => {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});

//set up handlebars to work
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// abble to parse incoming JSON
app.use(express.json());
//parsse incoming url
app.use(express.urlencoded({ extended: false }));
//
app.use(express.static(path.join(__dirname, "public")));

//use the controllers conection
app.use(require('./controllers/'));

//setup app listen to get port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});
