const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const sqlController = require('./controllers/sqlController')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/client', express.static(path.resolve(__dirname, '../client')));



app.post('/login', (req,res)=>{
    res.status().res.json('')
})

app.post('/signup', (req,res)=>{
    res.status().res.json('')
})

app.get('/newuser', (req,res)=>{
    res.status().res.json('')
})

app.get('/refresh', (req,res) => {
    res.status().res.json('')
})

app.get('/fetcher', sqlController.initialScrape, (req, res) => {
    const data = res.locals.fetcher
    // console.log('back out')
    res.status(200).json(data)
})

app.get('/', (req,res)=>{
    res.status().res.json('')
})

//Unknown route handler
app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });

//Global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });



app.listen(PORT);

module.exports = app;