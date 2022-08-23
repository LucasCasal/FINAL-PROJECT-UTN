const { application } = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

  console.log(req.body) // estoy capturando datos?

  var nombre = req.body.nombre;//Lucas
  var apellido = req.body.apellido;//Casal Goncalves Do Rego
  var email = req.body.email;//dustwestcool@gmail.com 
  var tel = req.body.tel;//1167315036
  var mensaje = req.body.mensaje;//estoy llegando?

  var obj = {
    to: 'dustwestcool@gmail.com',
    subject: 'PROGRAMADOR WEB',
    html: nombre + " " + apellido + " " + " se contacto a través de la web y quiere más informacion a este correo: " + email + ".<br> Además, hizo este comnetario : " + mensaje + ". <br> Su tel es : " + tel
  } //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })// cierra transporter

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente',
  });

}); //cierra peticion del POST


module.exports = router;
