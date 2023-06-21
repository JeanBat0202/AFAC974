-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: afac974
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.21.10.2
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8mb4 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `art`
--
DROP TABLE IF EXISTS `art`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `art` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_ref` varchar(80) NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT 'Sans titre',
  `short_title` varchar(255) NULL,
  `image` varchar(255) NOT NULL,
  `day` int NULL,
  `month` int NULL,
  `year` int NOT NULL,
  `width` float(7, 2) NOT NULL,
  `height` float(7, 2) NOT NULL,
  `about` text,
  `article` varchar(255) NULL,
  `category_id` int NULL,
  `art_type_id` int NULL,
  `author_id` int NULL,
  PRIMARY KEY (`id`),
  KEY `fk_art_category` (`category_id`),
  KEY `fk_art_art_type` (`art_type_id`),
  KEY `fk_art_author` (`author_id`),
  CONSTRAINT `fk_art_art_type` FOREIGN KEY (`art_type_id`) REFERENCES `art_type` (`id`),
  CONSTRAINT `fk_art_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `fk_art_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `art`
--
LOCK TABLES `art` WRITE;

/*!40000 ALTER TABLE `art` DISABLE KEYS */
;

INSERT INTO
  `art`
VALUES
  (
    1,
    '40FI79',
    'Effet de nuit sur la Cheminée usine du Tampon',
    'Cheminée du Tampon',
    '/src/assets/Images/Oeuvres/Cheminee_40FI79.jpg',
    '01',
    '01',
    '1866',
    14,
    20,
    "Effet de nuit, description",
    'https://view.genial.ly/5fb636d03636f40d7f883f24',
    1,
    1,
    3
  ),
  (
    2,
    '40FI78',
    "Arrivée à l'établissement du Tampon",
    "L'Établissement",
    '/src/assets/Images/Oeuvres/UsineBelAir_40FI78.jpg',
    '01',
    '01',
    '1866',
    13.5,
    15,
    "Le chemin de l'Etablissement",
    '',
    1,
    1,
    3
  ),
  (
    3,
    '40FI80',
    'Tampon - Une usine',
    'Usine du Tampon',
    '/src/assets/Images/Oeuvres/FRAD974_40FI80.jpg',
    '10',
    '02',
    '1866',
    20.5,
    11.5,
    "Une autre vue de l'usine de Bel Air",
    "https://view.genial.ly/5fb636d03636f40d7f883f24",
    1,
    3,
    3
  ),
  (
    4,
    '40FI106',
    "Quartier St Pierre. Etablissement de la Rivière, montagnes de l'Entre Deux",
    "Établissement de la Rivière",
    '/src/assets/Images/Oeuvres/AD974_40FI106.jpg',
    '01',
    '01',
    '1866',
    16.5,
    19.5,
    "L'usine (Etablissement)",
    '',
    1,
    1,
    3
  ),
  (
    5,
    '40FI91',
    'Boutchiana- Casernes',
    '-',
    '/src/assets/Images/Oeuvres/FRAD974_40FI91.jpg',
    '01',
    '01',
    '1865',
    11,
    19.5,
    "Travailleur",
    '',
    2,
    2,
    3
  ),
  (
    6,
    '40FI90',
    'Boutchiana-Casernes, de face',
    '-',
    '/src/assets/Images/Oeuvres/FRAD974_40FI90.jpg',
    '01',
    '01',
    '1865',
    8.5,
    19.5,
    "Complète la précédente aquarelle.",
    '',
    2,
    2,
    3
  );

/*!40000 ALTER TABLE `art` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `art_type`
--
DROP TABLE IF EXISTS `art_type`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `art_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `art_type`
--
LOCK TABLES `art_type` WRITE;

/*!40000 ALTER TABLE `art_type` DISABLE KEYS */
;

INSERT INTO
  `art_type`
VALUES
  (1, 'Aquarelle'),
  (2, 'Dessin'),
  (3, 'Dessin à la mine de plomb');

/*!40000 ALTER TABLE `art_type` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `author`
--
DROP TABLE IF EXISTS `author`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(80) DEFAULT NULL,
  `lastname` varchar(80) DEFAULT NULL,
  `author_alias` varchar(80) DEFAULT NULL,
  `biography` text NOT NULL,
  `birth_date` date NOT NULL,
  `death_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `author`
--
LOCK TABLES `author` WRITE;

/*!40000 ALTER TABLE `author` DISABLE KEYS */
;

INSERT INTO
  `author`
VALUES
  (
    3,
    'Hippolyte Charles Napoléon',
    'Mortier',
    'Duc de Trévise',
    'Fils de Napoléon Mortier de Trévise (1804-1869), 2e duc de Trévise et de la duchesse née Anne-Marie Lecomte-Stuart (1808-1870), il hérite du château de Sceaux en, 1869, en indivision avec ses frères et sœurs mais il cède ses parts à son frère, Jean-François Hippolyte Mortier, marquis de Trévise qui reste seul propriétaire du domaine. ',
    '1835-05-04',
    NULL
  );

/*!40000 ALTER TABLE `author` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `category`
--
DROP TABLE IF EXISTS `category`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `category`
--
LOCK TABLES `category` WRITE;

/*!40000 ALTER TABLE `category` DISABLE KEYS */
;

INSERT INTO
  `category`
VALUES
  (1, 'Usines'),
  (2, 'Travailleurs'),
  (3, 'Lieux'),
  (4, 'Animaux');

/*!40000 ALTER TABLE `category` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `favorite`
--
DROP TABLE IF EXISTS `favorite`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `favorite` (
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  KEY `fk_favorite_user` (`user_id`),
  KEY `fk_favorite_art` (`art_id`),
  CONSTRAINT `fk_favorite_art` FOREIGN KEY (`art_id`) REFERENCES `art` (`id`),
  CONSTRAINT `fk_favorite_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `favorite`
--
LOCK TABLES `favorite` WRITE;

/*!40000 ALTER TABLE `favorite` DISABLE KEYS */
;

/*!40000 ALTER TABLE `favorite` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `role`
--
DROP TABLE IF EXISTS `role`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `role`
--
LOCK TABLES `role` WRITE;

/*!40000 ALTER TABLE `role` DISABLE KEYS */
;

INSERT INTO
  `role`
VALUES
  (1, 'admin'),
  (2, 'user');

/*!40000 ALTER TABLE `role` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `skills`
--
DROP TABLE IF EXISTS `skills`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `skills` (
  `author_id` int NOT NULL,
  `art_type_id` int NOT NULL,
  KEY `fk_skills_author` (`author_id`),
  KEY `fk_skills_art_type` (`art_type_id`),
  CONSTRAINT `fk_skills_art_type` FOREIGN KEY (`art_type_id`) REFERENCES `art_type` (`id`),
  CONSTRAINT `fk_skills_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `skills`
--
LOCK TABLES `skills` WRITE;

/*!40000 ALTER TABLE `skills` DISABLE KEYS */
;

/*!40000 ALTER TABLE `skills` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_role_id` (`role_id`),
  CONSTRAINT `fk_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `user`
--
LOCK TABLES `user` WRITE;

/*!40000 ALTER TABLE `user` DISABLE KEYS */
;

INSERT INTO
  `user`
VALUES
  (
    2,
    'Testeuse',
    'Web',
    'testeuseweb@free.com',
    '$argon2id$v=19$m=65536,t=5,p=1$8/L9bJGh3LoexE2LTKZT3g$MavzgcCa/Sfl/qpYNHkJW6KSVlyidC5A4No3ech/ams',
    1
  );

/*!40000 ALTER TABLE `user` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2023-06-15 12:05:07