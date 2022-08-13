var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');// routes/index.js
var contactoRouter = require('./routes/contacto.js');// routes/contacto.js
var galeriaRouter = require('./routes/galeria.js');// routes/galeria.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contacto', indexRouter);
app.use('/galeria', indexRouter); 

app.get('/tarea', function (req, res) {
  res.send('Soy la pagina de tarea y esta es mi primer ruta')

})
app.get('/ejercicio', function (req, res) {
  res.send('Soy el ejercicio y esta es mi segunda ruta')

})
app.get('/opcion', function (req, res) {
  res.send('Soy la opcion y esta es mi tercer ruta')

})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
