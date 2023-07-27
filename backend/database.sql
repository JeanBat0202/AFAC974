-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: afac974
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2
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
  `short_title` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `day` int DEFAULT NULL,
  `month` int DEFAULT NULL,
  `year` int NOT NULL,
  `width` float(7, 2) DEFAULT NULL,
  `height` float(7, 2) DEFAULT NULL,
  `about` text,
  `article` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `art_type_id` int DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_art_category` (`category_id`),
  KEY `fk_art_art_type` (`art_type_id`),
  KEY `fk_art_author` (`author_id`),
  CONSTRAINT `fk_art_art_type` FOREIGN KEY (`art_type_id`) REFERENCES `art_type` (`id`),
  CONSTRAINT `fk_art_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `fk_art_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 31 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
    7,
    '40FI79',
    'Effet de nuit sur la Cheminée usine du Tampon',
    'Cheminée du Tampon',
    '1689169964493-arts-40FI79.jpg',
    NULL,
    NULL,
    1866,
    14.00,
    20.00,
    'Attribuée parfois à l\'usine du Grand Tampon, mais c\'est peu probable: l\'usine du Grand Tampon ayant été une scierie. Or, ici, il s\'agit sans doute de l\'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l\'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d\'apparence paisible ?',
    NULL,
    1,
    1,
    3
  ),
  (
    8,
    '40FI78',
    'Arrivée à l\'établissement du Tampon',
    'L\'Établissement',
    '1689170030157-arts-40FI78.jpg',
    NULL,
    NULL,
    1866,
    13.50,
    15.00,
    'Le chemin de l\'Etablissement existe toujours aujourd\'hui, à 400 mètres d\'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d\'Abord, et remonte légèrement vers l\'Etablissement (c\'est-à-dire l\'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L\'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d\'une cheminée: l\'une pour évacuer les fumées de combustion pour la batterie Gimart, l\'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l\'avant, abritant les \"tables\" pour le séchage du sucre ?',
    NULL,
    1,
    1,
    3
  ),
  (
    9,
    '40FI80',
    'Tampon- Une usine',
    'Usine du Tampon',
    '1689170093181-arts-40FI80.jpg',
    10,
    2,
    1866,
    20.50,
    11.50,
    'Une autre vue de l\'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l\'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l\'Etablissement (400 m. d\'altitude), on distingue un groupe de travailleurs engagés, près d\'un point d\'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L\'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)',
    'https://view.genial.ly/5fb636d03636f40d7f883f24',
    1,
    3,
    3
  ),
  (
    10,
    '40FI106',
    'Quartier St Pierre. Etablissement de la Rivière, montagnes de l\'Entre Deux',
    'Établissement de la Rivière',
    '1689170173782-arts-40FI106.jpg',
    NULL,
    NULL,
    1861,
    16.50,
    19.50,
    'L\'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l\'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l\'un par rapport à l\'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l\'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une \"bande\") de travailleurs engagés effectue la \"trouaison\", pour la replantation de cannes à sucre, sous la direction d\'un Commandeur, vêtu d\'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l\'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit.',
    NULL,
    1,
    1,
    3
  ),
  (
    11,
    '40FI92',
    'Boutchiana- Indien',
    NULL,
    '1689170311771-arts-40FI92.jpg',
    NULL,
    7,
    1871,
    NULL,
    NULL,
    'Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.',
    NULL,
    2,
    1,
    3
  ),
  (
    12,
    '40FI91',
    'Boutchiana- Casernes',
    NULL,
    '1689170452179-arts-40FI91.jpg',
    24,
    8,
    1865,
    11.00,
    19.50,
    'Travailleur engagé depuis l\'Inde à l’Établissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d\'engagement, il était recensé comme tailleur',
    NULL,
    2,
    1,
    3
  ),
  (
    13,
    '40FI90',
    'Boutchiana-Casernes, de face',
    NULL,
    '1689170502842-arts-40FI90.jpg',
    NULL,
    NULL,
    1865,
    8.50,
    19.50,
    'Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l\'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans.',
    NULL,
    2,
    1,
    3
  ),
  (
    14,
    '40FI76',
    'Cafrine et son petit au Tampon',
    NULL,
    '1689170553266-arts-40FI76.jpg',
    NULL,
    NULL,
    1861,
    13.00,
    18.00,
    'C\'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l\'employeur, selon les termes du contrat d\'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le \"Code noir\" de 1723.',
    NULL,
    2,
    1,
    3
  ),
  (
    15,
    '40FI52',
    'La vieille (Victorine) Mme Samsi Casernes',
    NULL,
    '1689170607900-arts-40FI52.jpg',
    15,
    12,
    1865,
    12.00,
    18.00,
    'La vieille dame est assise sur une natte, vêtue de la traditionnelle robe de toile bleue fournie par l\'employeur. Son foulard noué sur la tête est taillé dans la même toile. ',
    'https://belair.hypotheses.org/389',
    2,
    1,
    3
  ),
  (
    16,
    '40FI66',
    'Elise',
    NULL,
    '1689170664306-arts-40FI66.jpg',
    NULL,
    8,
    1861,
    NULL,
    NULL,
    'Elise est une petite fille de Victorine, issue de sa fille Coralie.',
    NULL,
    2,
    2,
    3
  ),
  (
    17,
    '40FI75',
    'Lucie le ventre plein de cari',
    NULL,
    '1689170718074-arts-40FI75.jpg',
    NULL,
    NULL,
    1866,
    NULL,
    NULL,
    'Une autre petite fille de Victorine, sans doute dans la maison des Casernes.',
    NULL,
    2,
    2,
    3
  ),
  (
    18,
    '40FI74',
    'La belle Tina',
    NULL,
    '1689170758809-arts-40FI74.jpg',
    NULL,
    NULL,
    1866,
    NULL,
    NULL,
    'Visiblement, Mortier de Trévise a été impressionné par la chevelure de Tina. Encore une petite fille de Victorine, plus jeune. il semble que les fillettes fassent leur apprentissage de domestiques dans la propriété des Kerveguen.',
    NULL,
    2,
    2,
    3
  ),
  (
    19,
    '40FI60',
    'Jamali, Cafre, Gardien',
    NULL,
    '1689170819450-arts-40FI60.jpg',
    NULL,
    NULL,
    1861,
    16.50,
    26.00,
    '\"Cafre\" veut dire que Jamali n\'est pas né sur l\'Habitation, mais qu\'il a vraisemblablement été recruté comme engagé. Il est armé d\'une lance, et surveille l\'orée des champs, ou les abords du camp des travailleurs.',
    'https://forgetmenot.objettemoin.org/index.php/fr/actus/36-jamali-gardien-de-cannes',
    2,
    1,
    3
  ),
  (
    20,
    '40FI55',
    'Le parapluie du pauvre Citoyen',
    NULL,
    '1689170865162-arts-40FI55.jpg',
    NULL,
    NULL,
    1861,
    11.50,
    19.00,
    'Le titre de citoyen est une fierté pour les affranchis de 1848 qui travaillent sur la propriété ou dans les Etablissements K/Véguen. La pluie est rare à Saint-Pierre, beaucoup plus fréquente au Tampon (pluies orographiques pendant la saison chaude, celle de la coupe des cannes). Ici, le créole engagé dispose d\'une maigre rémunération, juste suffisante pour sa nourriture et de menus frais à la \"boutique\". Depuis 1859, le salaire est en outre versé en kreutzers ( démonétisés, au cours forcé de 1 franc. A l\'arrière-plan, sur la droite, la silhouette d\'une cheminée d\'usine, peut-être celle de Bel-Air, au Tampon.',
    NULL,
    2,
    1,
    3
  ),
  (
    21,
    '40FI53.2',
    'La pli y fait pas rien, ça ! Tampon',
    NULL,
    '1689170949268-arts-40FI53.2.jpg',
    27,
    1,
    1866,
    20.00,
    30.00,
    'La suite du commentaire est: \"Ca ne lui fait rien,... tant pis pour lui ! mais aux cannes ça leur fait du bien tant mieux pour elles !....\" Le jeune créole porte un chapeau de feutre déformé, pas de chaussures, comme la majorité des travailleurs. Janvier est en pleine période cyclonique: est-ce le cas ici ?',
    NULL,
    2,
    2,
    3
  ),
  (
    22,
    '40FI59',
    'Monsieur Bourrayne dans le jardin des Casernes',
    NULL,
    '1689170989993-arts-40FI59.jpg',
    NULL,
    NULL,
    1861,
    12.50,
    20.00,
    'la suite du commentaire est: \"Allons, Virasami, vivement mettre la racine de ce plant (?) comme à Madras!\"  ',
    NULL,
    2,
    2,
    3
  ),
  (
    23,
    '40FI72',
    ' Chanvert descend le chemin de la Plaine, Golo est à ses côtés',
    'Golo et Chanvert',
    '1689171053456-arts-40FI72.jpg',
    NULL,
    NULL,
    1861,
    15.50,
    8.00,
    'Chanvert est peut-être un ami de la famille. Golo est un domestique qui l\'accompagne. A l\'arrière du tilbury, il semble qu\'il y ait une borne kilométrique sur le côté de la route. Le chemin de la Plaine relie Saint-Pierre à la Plaine des Cafres, et, au-delà, à Saint-Benoît. L’Établissement de Bel-Air est situé au tiers du parcours, entre La Plaine des Cafres et Saint-Pierre. ',
    'https://belair.hypotheses.org/1351',
    2,
    2,
    3
  ),
  (
    24,
    '40FI83',
    'Sortie du Bras de Jean Payet en allant vers le Tampon',
    'Sortie du Bras de Jean Payet',
    '1689171291295-arts-40FI83.jpg',
    29,
    1,
    1865,
    22.50,
    30.00,
    'Le tilbury à quatre roues est tiré par quatre mules (importées du Poitou). La route, encore reconnaissable aujourd\'hui, reliait les champs de canne situés entre la ravine Jean Payet (ancienne ravine du Tampon), et la ravine des Cafres. Au sommet de ces champs, une scierie fournissait le bois et les planches pour les Établissements K/Véguen.',
    NULL,
    3,
    2,
    3
  ),
  (
    25,
    '40FI77',
    'Le bassin rouge au Tampon, la ravine descend',
    'Bassin rouge',
    '1689171359823-arts-40FI77.jpg',
    10,
    2,
    1866,
    9.50,
    15.00,
    'La cascade alimente un bassin à proximité d\'un affluent de la rivière d\'Abord.',
    NULL,
    3,
    1,
    3
  ),
  (
    26,
    '40FI104',
    'Excursion au volcan de Bourbon',
    'Caverne des lataniers',
    '1689172144378-arts-40Fi104.jpg',
    NULL,
    8,
    1861,
    32.00,
    24.50,
    'Mortier de Trévise et sa belle-famille sont en excursion au volcan. Il n\'y avait pas de route, alors: il faut donc dormir en chemin dans cette caverne autrefois connue des noirs marrons, autrement dit fugitifs -avant  l\'abolition de l\'esclavage de 1848.',
    'https://view.genial.ly/6432b64851cad10018f64868/interactive-image-caverne-lataniers',
    3,
    2,
    3
  ),
  (
    27,
    '40FI105bis',
    'Le volcan de Bourbon vu du Pas de Bellecombre',
    'Pas de Bellecombe',
    '1689172211625-arts-40FI105bis.jpg',
    NULL,
    8,
    1861,
    24.00,
    18.00,
    'Cela ne fait guère longtemps que le passage par le Pas de Bellecombe a été trouvé. Le lieu porte le nom du gouverneur présent au moment de la découverte du passage, mais c\'est un esclave, Jacob, qui l\'a découvert, en réalité. Bellecombe avait commandité l\'expédition.',
    NULL,
    3,
    1,
    3
  ),
  (
    28,
    '40FI108',
    'Mamzelle',
    NULL,
    '1689172294816-arts-40FI108.jpg',
    14,
    4,
    1866,
    19.50,
    14.50,
    'Les chevaux sont rares sur les établissements: ils font l\'objet de soins attentifs, et ne sont montés que par les propriétaires des Établissements, et les contremaîtres. Selle et cuirs peuvent être fabriqués sur place: il y eut un atelier sur l’Établissement du Tampon.',
    NULL,
    4,
    2,
    3
  ),
  (
    29,
    '40FI73',
    'Charrette tirée par des mulets',
    NULL,
    '1689172504410-arts-40FI73.jpg',
    NULL,
    NULL,
    1861,
    15.50,
    6.50,
    '4 mulets tirent une charrette apportant des cannes fraîchement coupées à l\'usine. Les mulets sont nombreux dans l\'île à l\'époque de l\'industrialisation sucrière. Importés du Poitou, ce sont des bêtes robustes, qui coûtent moins chers que des bœufs ou des chevaux, pour lesquelles on construit des écuries. Elles ont des noms: on sait que dans l’Établissement des Casernes, Tec Tec, Langoutil, et Malheur sont des noms de mules.',
    NULL,
    4,
    2,
    3
  ),
  (
    30,
    '40FI53.1',
    'Caille de Bourbon',
    NULL,
    '1689172654712-arts-40FI53.1.jpg',
    21,
    9,
    1861,
    23.00,
    19.00,
    'En réalité, la caille fut introduite d\'Asie, Inde ou chine, vers 1850. C\'est la femelle qui est colorée ainsi de rouge au bas des ailes. A l\'époque de Mortier de Trévise, c\'est donc une curiosité, un peu en disparition, à cause de l\'extension des champs cultivés en cannes à sucre.',
    'https://www.seor.fr/oiseau-25-caille-peinte.html',
    4,
    1,
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
  `birth_date` int NOT NULL,
  `death_date` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
    'Fils de Napoléon Mortier de Trévise (1804-1869), 2e duc de Trévise et de la duchesse née Anne-Marie Lecomte-Stuart (1808-1870), il hérite du château de Sceaux en, 1869, en indivision avec ses frères et sœurs mais il cède ses parts à son frère, Jean-François Hippolyte Mortier, marquis de Trévise qui reste seul propriétaire du domaine.',
    1835,
    1892,
    '1689364383409-authors-Hippolyte.jpeg'
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
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_favorite_user` (`user_id`),
  KEY `fk_favorite_art` (`art_id`),
  CONSTRAINT `fk_favorite_art` FOREIGN KEY (`art_id`) REFERENCES `art` (`id`) ON DELETE CASCADE,
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
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
    1,
    'Admin',
    'Demo',
    'demo@example.com',
    '$argon2id$v=19$m=65536,t=5,p=1$IhRhmE+1XzE+dZMhOECCJA$ZZr2b5m9rNhnYNSpkpKEJX78pamAkwfCI8h8RoDmHko',
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

-- Dump completed on 2023-07-14 21:55:15