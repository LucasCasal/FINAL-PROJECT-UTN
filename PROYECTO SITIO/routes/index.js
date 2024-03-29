const { application } = require("express");
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var novedadesModel = require("../models/novedadesModel");
var cloudinary = require("cloudinary").v2;

/* GET home page. */
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.splice(0, 5); //seleccionamos los primeros 5 elementos del array
  novedades = novedades.map((novedad) => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {
        width: 460,
        crop: "fill",
      });
      return {
        ...novedad,
        imagen,
      };
    } else {
      return {
        ...novedad,
        imagen: "/images/noimage.jpg",
      };
    }
  });

  res.render("index", {
    novedades,
  });
});

router.post("/", async (req, res, next) => {
  console.log(req.body); // estoy capturando datos?

  var nombre = req.body.nombre; //Lucas
  var apellido = req.body.apellido; //Casal Goncalves Do Rego
  var email = req.body.email; //dustwestcool@gmail.com
  var tel = req.body.tel; //1167315036
  var mensaje = req.body.mensaje; //estoy llegando?

  var obj = {
    to: "dustwestcool@gmail.com",
    subject: "PROGRAMADOR WEB",
    html:
      nombre +
      " " +
      apellido +
      " " +
      " se contacto a través de la web y quiere más informacion a este correo: " +
      email +
      ".<br> Además, hizo este comnetario : " +
      mensaje +
      ". <br> Su tel es : " +
      tel,
  }; //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }); // cierra transporter

  var info = await transporter.sendMail(obj);

  res.render("index", {
    message: "Mensaje enviado correctamente",
  });
}); //cierra peticion del POST

module.exports = router;
