-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_demo
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `evaluacionriesgo`
--

DROP TABLE IF EXISTS `evaluacionriesgo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluacionriesgo` (
  `evaluacion_id` int NOT NULL,
  `credito_id` int DEFAULT NULL,
  `nivel_riesgo` varchar(20) DEFAULT NULL,
  `probabilidad_default` decimal(5,2) DEFAULT NULL,
  `comentarios` text,
  `fecha_evaluacion` date DEFAULT NULL,
  PRIMARY KEY (`evaluacion_id`),
  KEY `credito_id` (`credito_id`),
  CONSTRAINT `evaluacionriesgo_ibfk_1` FOREIGN KEY (`credito_id`) REFERENCES `creditos` (`credito_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluacionriesgo`
--

LOCK TABLES `evaluacionriesgo` WRITE;
/*!40000 ALTER TABLE `evaluacionriesgo` DISABLE KEYS */;
INSERT INTO `evaluacionriesgo` VALUES (1,1,'Bajo',0.05,'Cliente con buen historial crediticio y ingresos estables','2024-01-20'),(2,2,'Medio',0.15,'Historial crediticio limitado, requiere seguimiento','2024-02-25'),(3,3,'Bajo',0.03,'Cliente con excelente puntaje crediticio y garantía sólida','2024-03-15'),(4,4,'Alto',0.35,'Puntaje crediticio bajo y sin garantías','2024-04-10');
/*!40000 ALTER TABLE `evaluacionriesgo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-09 21:03:03
