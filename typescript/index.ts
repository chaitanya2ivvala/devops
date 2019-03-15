import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
mongoose.connect('mongodb://localhost:27017/youtube',{ useNewUrlParser: true })
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const port = process.env.PORT || 7080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});