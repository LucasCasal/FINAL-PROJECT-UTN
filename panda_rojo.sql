-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-10-2022 a las 03:19:00
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `panda_rojo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(17, 'Community Manager', 'Asistencia de tu perfil', 'Podes lograr una estetica adecuada para tu pagina de instagram, facebook o tu propía página web y a la vez acaparando el público interesado en tu producto o servicio.', 'coswe2l1psv4y9vwz0a5'),
(18, 'Trabajo Online', 'Programación y Edición', 'Tanto programación de páginas web, edición de imagen y video o creación de contenido como música, imagén y video son las opciones digitales disponibles.', 'blslsephk2uvs0gwnaan'),
(15, 'Ropa Personalizada', 'Si tenes una remera de un color muy particular, de una tela especial o simplemente tenes un valor sentimental por alguna prenda, podes enviarla y nosotros la personalizamos', 'Ya sea una remera, campera, buzo o cualquier prenda que se te ocurra nosotros la podemos hacer realidad. Simplemente tenes que enviar esta prenda por correo, el diseño vía email y nosotros lo hacemos realidad. También podemos comprar una prenda lisa y diseñarte el diseño con tan solo darnos los detalles. ', 'bfqixyvqyovqbcrzsekj'),
(19, 'Bolsas Totebags', 'El nuevo modelo que ha ingresado es el producto ideal para todos los días de la semana', 'La nueva bolsa totebag es todo un éxito, además de ser resistente, útil para hacer las compras en el supermercardo o irte de paseo. Tiene un diseño que la hace única, ideal para ir a tomarse unos mates a la plaza. Cada una de las bolsas esta hecha a mano por lo tanto ninguna se repite la ubicación del diseño.', 'igrrsze7zyuzkyx2lzei'),
(16, 'Video Musical', 'Contenido Audiovisual', 'También podes acceder a este tipo de contenido contactandonte con nosotros, siempre desde el minímo detalle personalizado ', 'zkvccacvqh12kntezm7t');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'lucas', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'victoria', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'francesco', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
