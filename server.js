const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


// Create a new sequelize store using the express-session package
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//use app to call express
const app = express();
const port = process.env.PORT || 3001;

//handlebar setup
const hbs = exphbs.create({
    helpers: {
        format_date: date => {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});

//cookie
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
//express function to use cookie
app.use(session(sess));

//this is for the date function to be used in handlebars for posts
// sets the handlebars engine for rendering views
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//add middleware to the Express app that parses incoming requests with JSON payloads and adds the parsed data to the req.body property.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//make public static so don't have to write a long path
app.use(express.static(path.join(__dirname, "public")));

//be able to use routes
app.use(routes);

//port to use
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log('Now listening'));
  });
