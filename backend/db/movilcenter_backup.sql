-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: movilcenter
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `marca` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Smartphone Galaxy A14','Pantalla 6.6\", 128GB, 4GB RAM, cámara triple.',750000.00,10,'Electrónica','img/galaxy.jpg','Samsung'),(2,'Laptop Lenovo IdeaPad','Intel i5, 8GB RAM, 256GB SSD.',2200000.00,5,'Electrónica','img/laptop.jpg','Lenovo'),(3,'Audífonos Bluetooth Sony','Cancelación de ruido, batería de 30h.',350000.00,15,'Electrónica','img/audifonos.jpg','Sony'),(4,'Camisa Casual Hombre','Camisa manga larga algodón talla M.',80000.00,20,'Ropa','img/camisa.jpg','Arturo Calle'),(5,'Jean Mujer Tiro Alto','Jean azul claro, tela stretch.',120000.00,12,'Ropa','img/jean.jpg','Prada'),(6,'Zapatos Deportivos Nike','Para correr, talla 40.',210000.00,8,'Ropa','img/zapatos.jpg','Nike'),(7,'Libro Cien Años de Soledad','Gabriel García Márquez, novela clásica.',45000.00,30,'Libros','img/cien_anos.jpg','Editorial Sudamericana'),(8,'Libro El Principito','Antoine de Saint-Exupéry, ilustrado.',35000.00,25,'Libros','img/principito.jpg','Editorial Salamandra'),(9,'Tablet Samsung Galaxy Tab A8','Pantalla 10.5”, 64GB.',899000.00,6,'Electrónica','img/tablet.jpg','Samsung'),(10,'Smartwatch Xiaomi Mi Band 7','Pantalla AMOLED, monitoreo de salud.',200000.00,14,'Electrónica','img/smartwatch.jpg','Xiaomi'),(11,'Vestido Largo Mujer','Vestido floral talla L.',95000.00,10,'Ropa','img/vestido.jpg','Valentino'),(12,'Chaqueta Impermeable Hombre','Con capucha y bolsillos.',180000.00,7,'Ropa','img/chaqueta.jpg','Totto'),(13,'Libro La Sombra del Viento','Carlos Ruiz Zafón, novela de misterio.',47000.00,20,'Libros','img/sombra_viento.jpg','Editorial Planeta'),(14,'Batería Externa 10000mAh','Cargador portátil universal.',60000.00,18,'Electrónica','img/powerbank.jpg','Power Bank'),(15,'Polo Deportivo Hombre','Transpirable, color negro.',40000.00,16,'Ropa','img/polo.jpg','Adidas'),(16,'Libro El Poder del Ahora','Eckhart Tolle, desarrollo personal.',39000.00,22,'Libros','img/poder_ahora.jpg','Editorial Gaia'),(17,'Monitor LG 24\" Full HD','HDMI, IPS, 75Hz.',550000.00,9,'Electrónica','img/monitor.jpg','LG'),(18,'Teclado Gamer Retroiluminado','RGB, conexión USB.',110000.00,13,'Electrónica','img/teclado.jpg','Razer'),(19,'Pantalón Jogger Hombre','Color gris, con bolsillos.',75000.00,11,'Ropa','img/jogger.jpg','GEF'),(20,'Libro Hábitos Atómicos','James Clear, productividad y hábitos.',43000.00,28,'Libros','img/habitos.jpg','Editorial Diana');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan Pérez','juan@example.com','12345'),(2,'Ana López','ana@example.com','abcde'),(3,'Carlos Ruiz','carlos@example.com','pass123'),(4,'Laura Torres','laura@example.com','laura456'),(5,'Luis Gómez','luis@example.com','luis789');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-20 20:00:13
