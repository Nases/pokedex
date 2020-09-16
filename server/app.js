require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const app = express()

// allow cors with credentials and explicit uri
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'https://pokedex.hasansefaozalp.com/'] }))

// Passport config
require('./config/passport')(passport)

// must be changed to env variable in real app
mongoose.connect('mongodb+srv://nases2:DtpEkmjqcWvV3DQ1@nases-group-llc-bophr.azure.mongodb.net/auth-boilerplate?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


// parse application/json
app.use(bodyParser.json())


// Express session middleware
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // cookie: { secure: true }
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))