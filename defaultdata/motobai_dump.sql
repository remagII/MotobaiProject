-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: motobai
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `api_account`
--

DROP TABLE IF EXISTS `api_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_account` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account` varchar(64) NOT NULL,
  `representative_name` varchar(64) NOT NULL,
  `representative_position` varchar(64) NOT NULL,
  `city` varchar(100) NOT NULL,
  `barangay` varchar(100) NOT NULL,
  `street` varchar(100) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_account`
--

LOCK TABLES `api_account` WRITE;
/*!40000 ALTER TABLE `api_account` DISABLE KEYS */;
INSERT INTO `api_account` VALUES (1,'Effanix Motorparts','Tiffany','CEO','Davao City','Talomo','Km 12 Davao-Bukidnon Rd','09566921912','tiffanix@gmail.com','2024-10-22 02:37:47.948733',0),(2,'BroomBroomart Motorparts','Kent Uni','Employee','Davao City','Tugbok','3GP5+933, Evergreen St','09566921913','walz@gmail.com','2024-10-22 03:31:32.821057',0),(3,'Gregory\'s Motor Parts & Hardware','Greg','CEO','Davao City','Mintal','48 R Magsaysay Av','09566921912','greg@gmail.com','2024-10-22 03:32:32.244284',0);
/*!40000 ALTER TABLE `api_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_customer`
--

DROP TABLE IF EXISTS `api_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(64) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_customer`
--

LOCK TABLES `api_customer` WRITE;
/*!40000 ALTER TABLE `api_customer` DISABLE KEYS */;
INSERT INTO `api_customer` VALUES (1,'John Doe','09566921912','2024-10-22 03:33:35.476675',0),(2,'Mary Doe','09566921912','2024-10-22 03:33:54.695950',0),(3,'Joem Doe','09566921912','2024-10-22 03:34:04.670165',0);
/*!40000 ALTER TABLE `api_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_employee`
--

DROP TABLE IF EXISTS `api_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_employee` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(100) NOT NULL,
  `barangay` varchar(100) NOT NULL,
  `street` varchar(100) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `first_name` varchar(34) NOT NULL,
  `last_name` varchar(34) NOT NULL,
  `middle_name` varchar(34) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_employee`
--

LOCK TABLES `api_employee` WRITE;
/*!40000 ALTER TABLE `api_employee` DISABLE KEYS */;
INSERT INTO `api_employee` VALUES (1,'Davao City','Mintal','123 St, Wallflower','09566921912','joem.gamer@gmail.com','2024-10-22 03:34:59.149812','Jose Emmanuel','Idpan','Rabino'),(2,'Davao City','Calinan','535 Camella','09566921912','rcmn.123@yahoo.com','2024-10-22 03:36:01.567872','Ram Christian','Nacar','Middle'),(3,'Davao City','Ecoland','Malapit sa SM','09566921912','thad3131@hotmail.com','2024-10-22 03:36:44.307257','Thaddeus','Domingo','M.');
/*!40000 ALTER TABLE `api_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_inboundstock`
--

DROP TABLE IF EXISTS `api_inboundstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_inboundstock` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_inboundstock`
--

LOCK TABLES `api_inboundstock` WRITE;
/*!40000 ALTER TABLE `api_inboundstock` DISABLE KEYS */;
INSERT INTO `api_inboundstock` VALUES (1,'2024-10-22 03:53:52.281798'),(2,'2024-10-22 03:54:41.101511'),(3,'2024-10-22 03:55:06.382370');
/*!40000 ALTER TABLE `api_inboundstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_inboundstock_inboundstockitems`
--

DROP TABLE IF EXISTS `api_inboundstock_inboundstockitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_inboundstock_inboundstockitems` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `inboundstock_id` bigint NOT NULL,
  `inboundstockitem_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `api_inboundstock_inbound_inboundstock_id_inbounds_8e9c64c1_uniq` (`inboundstock_id`,`inboundstockitem_id`),
  KEY `api_inboundstock_inb_inboundstockitem_id_d388f004_fk_api_inbou` (`inboundstockitem_id`),
  CONSTRAINT `api_inboundstock_inb_inboundstock_id_a4a5ab4a_fk_api_inbou` FOREIGN KEY (`inboundstock_id`) REFERENCES `api_inboundstock` (`id`),
  CONSTRAINT `api_inboundstock_inb_inboundstockitem_id_d388f004_fk_api_inbou` FOREIGN KEY (`inboundstockitem_id`) REFERENCES `api_inboundstockitem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_inboundstock_inboundstockitems`
--

LOCK TABLES `api_inboundstock_inboundstockitems` WRITE;
/*!40000 ALTER TABLE `api_inboundstock_inboundstockitems` DISABLE KEYS */;
INSERT INTO `api_inboundstock_inboundstockitems` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4),(5,3,5),(6,3,6);
/*!40000 ALTER TABLE `api_inboundstock_inboundstockitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_inboundstockitem`
--

DROP TABLE IF EXISTS `api_inboundstockitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_inboundstockitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int unsigned DEFAULT NULL,
  `inventory_id` bigint NOT NULL,
  `supplier_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_inboundstockitem_inventory_id_dabf0e21_fk_api_inventory_id` (`inventory_id`),
  KEY `api_inboundstockitem_supplier_id_3584ab0c_fk_api_supplier_id` (`supplier_id`),
  CONSTRAINT `api_inboundstockitem_inventory_id_dabf0e21_fk_api_inventory_id` FOREIGN KEY (`inventory_id`) REFERENCES `api_inventory` (`id`),
  CONSTRAINT `api_inboundstockitem_supplier_id_3584ab0c_fk_api_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `api_supplier` (`id`),
  CONSTRAINT `api_inboundstockitem_chk_1` CHECK ((`quantity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_inboundstockitem`
--

LOCK TABLES `api_inboundstockitem` WRITE;
/*!40000 ALTER TABLE `api_inboundstockitem` DISABLE KEYS */;
INSERT INTO `api_inboundstockitem` VALUES (1,100,5,1),(2,50,2,1),(3,1000,3,1),(4,500,5,2),(5,250,5,1),(6,1,2,1);
/*!40000 ALTER TABLE `api_inboundstockitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_inventory`
--

DROP TABLE IF EXISTS `api_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_inventory` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `stock` int unsigned DEFAULT NULL,
  `stock_minimum_threshold` int unsigned DEFAULT NULL,
  `date_added` datetime(6) NOT NULL,
  `date_updated` datetime(6) NOT NULL,
  `product_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_inventory_product_id_82ce36d9_fk_api_product_id` (`product_id`),
  CONSTRAINT `api_inventory_product_id_82ce36d9_fk_api_product_id` FOREIGN KEY (`product_id`) REFERENCES `api_product` (`id`),
  CONSTRAINT `api_inventory_chk_1` CHECK ((`stock` >= 0)),
  CONSTRAINT `api_inventory_chk_2` CHECK ((`stock_minimum_threshold` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_inventory`
--

LOCK TABLES `api_inventory` WRITE;
/*!40000 ALTER TABLE `api_inventory` DISABLE KEYS */;
INSERT INTO `api_inventory` VALUES (1,0,100,'2024-10-22 03:40:18.332776','2024-10-22 03:41:17.219679',1),(2,51,250,'2024-10-22 03:41:09.638670','2024-10-22 03:55:06.399312',2),(3,1000,50,'2024-10-22 03:43:37.317564','2024-10-22 03:53:52.336509',3),(4,0,350,'2024-10-22 03:46:53.494719','2024-10-22 03:49:22.355841',4),(5,850,50,'2024-10-22 03:50:34.763823','2024-10-22 03:55:06.393314',5);
/*!40000 ALTER TABLE `api_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_order`
--

DROP TABLE IF EXISTS `api_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `account_name` varchar(64) DEFAULT NULL,
  `order_date` datetime(6) NOT NULL,
  `account_id` bigint DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `customer_name` varchar(64) DEFAULT NULL,
  `representative_name` varchar(64) DEFAULT NULL,
  `employee_id` bigint DEFAULT NULL,
  `employee_first_name` varchar(34) DEFAULT NULL,
  `employee_last_name` varchar(34) DEFAULT NULL,
  `employee_middle_name` varchar(34) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_order_account_id_cef34b0f_fk_api_account_id` (`account_id`),
  KEY `api_order_customer_id_8cb4e7b7_fk_api_customer_id` (`customer_id`),
  KEY `api_order_employee_id_01db7c0f_fk_api_employee_id` (`employee_id`),
  CONSTRAINT `api_order_account_id_cef34b0f_fk_api_account_id` FOREIGN KEY (`account_id`) REFERENCES `api_account` (`id`),
  CONSTRAINT `api_order_customer_id_8cb4e7b7_fk_api_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `api_customer` (`id`),
  CONSTRAINT `api_order_employee_id_01db7c0f_fk_api_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `api_employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_order`
--

LOCK TABLES `api_order` WRITE;
/*!40000 ALTER TABLE `api_order` DISABLE KEYS */;
INSERT INTO `api_order` VALUES (1,'test','2024-10-22 03:33:35.476675',1,1,'asdas','asdasd',1,'asda','asdasd','asdasd');
/*!40000 ALTER TABLE `api_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_orderdetails`
--

DROP TABLE IF EXISTS `api_orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_orderdetails` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int unsigned NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_id` bigint NOT NULL,
  `order_id` bigint NOT NULL,
  `product_name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `api_orderdetails_product_id_a7b7c226_fk_api_product_id` (`product_id`),
  KEY `api_orderdetails_order_id_1a3c87ba_fk_api_order_id` (`order_id`),
  CONSTRAINT `api_orderdetails_order_id_1a3c87ba_fk_api_order_id` FOREIGN KEY (`order_id`) REFERENCES `api_order` (`id`),
  CONSTRAINT `api_orderdetails_product_id_a7b7c226_fk_api_product_id` FOREIGN KEY (`product_id`) REFERENCES `api_product` (`id`),
  CONSTRAINT `api_orderdetails_chk_1` CHECK ((`quantity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_orderdetails`
--

LOCK TABLES `api_orderdetails` WRITE;
/*!40000 ALTER TABLE `api_orderdetails` DISABLE KEYS */;
INSERT INTO `api_orderdetails` VALUES (1,25,25.00,1,1,'test_product');
/*!40000 ALTER TABLE `api_orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_ordertracking`
--

DROP TABLE IF EXISTS `api_ordertracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_ordertracking` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `status` varchar(32) NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `date_validated` datetime(6) DEFAULT NULL,
  `date_packed` datetime(6) DEFAULT NULL,
  `date_completed` datetime(6) DEFAULT NULL,
  `date_cancelled` datetime(6) DEFAULT NULL,
  `order_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_ordertracking_order_id_d5d3daa1_fk_api_order_id` (`order_id`),
  CONSTRAINT `api_ordertracking_order_id_d5d3daa1_fk_api_order_id` FOREIGN KEY (`order_id`) REFERENCES `api_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_ordertracking`
--

LOCK TABLES `api_ordertracking` WRITE;
/*!40000 ALTER TABLE `api_ordertracking` DISABLE KEYS */;
INSERT INTO `api_ordertracking` VALUES (1,'hello state','2024-10-22 03:33:35.476675','2024-10-22 03:33:35.476675','2024-10-22 03:33:35.476675','2024-10-22 03:33:35.476675','2024-10-22 03:33:35.476675',1);
/*!40000 ALTER TABLE `api_ordertracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_product`
--

DROP TABLE IF EXISTS `api_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_name` varchar(64) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `brand` varchar(32) DEFAULT NULL,
  `description` longtext,
  `product_type` varchar(100) DEFAULT NULL,
  `vehicle_type` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_product`
--

LOCK TABLES `api_product` WRITE;
/*!40000 ALTER TABLE `api_product` DISABLE KEYS */;
INSERT INTO `api_product` VALUES (1,'CHAINWAX',250.00,'Motorex','Long Desc.','Lubricating Oil','Any'),(2,'MOTO MATT CARE',1000.00,'Motorex','Spezielles Matt-Pflegespray für das perfekte Finish nach der Fahrzeugreinigung.','Wax Formula','Motorcycle'),(3,'ATV QUAD 4T SAE 10W/40 MA2',2500.00,'Motorex','Synthetic Motor Oil','Motor Oil','Motorcycle'),(4,'J.C.A.P. Motor Oil',450.00,'J.C.A.P','Specified to API and/or ACEA to suit a wide range of vehicles, conditions, and climates.','Oil','Any'),(5,'Havoline® SuperMatic 4T Fully Synthetic SAE 5W-40',637.00,'Caltex','A premium fully synthetic oil formulated with Havoline C.O.R.E.+','Oil','Scooter');
/*!40000 ALTER TABLE `api_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_supplier`
--

DROP TABLE IF EXISTS `api_supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_supplier` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(64) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_supplier`
--

LOCK TABLES `api_supplier` WRITE;
/*!40000 ALTER TABLE `api_supplier` DISABLE KEYS */;
INSERT INTO `api_supplier` VALUES (1,'Supplier 1','09566921912','Secret Supplier 1'),(2,'Supplier 2','09566921912','Secret Supplier 2'),(3,'Supplier 3','09566921912','LONG CHARACTER TEST ASOJKASDFASDFDFNASDFASDFASLKDFJNALOSKDJFOSAIUDFHNOIASUHNDFOIASUDNHFIUSADFHJNLAST');
/*!40000 ALTER TABLE `api_supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add product',7,'add_product'),(26,'Can change product',7,'change_product'),(27,'Can delete product',7,'delete_product'),(28,'Can view product',7,'view_product'),(29,'Can add inventory',8,'add_inventory'),(30,'Can change inventory',8,'change_inventory'),(31,'Can delete inventory',8,'delete_inventory'),(32,'Can view inventory',8,'view_inventory'),(33,'Can add order details',9,'add_orderdetails'),(34,'Can change order details',9,'change_orderdetails'),(35,'Can delete order details',9,'delete_orderdetails'),(36,'Can view order details',9,'view_orderdetails'),(37,'Can add order',10,'add_order'),(38,'Can change order',10,'change_order'),(39,'Can delete order',10,'delete_order'),(40,'Can view order',10,'view_order'),(41,'Can add order tracking',11,'add_ordertracking'),(42,'Can change order tracking',11,'change_ordertracking'),(43,'Can delete order tracking',11,'delete_ordertracking'),(44,'Can view order tracking',11,'view_ordertracking'),(45,'Can add customer',12,'add_customer'),(46,'Can change customer',12,'change_customer'),(47,'Can delete customer',12,'delete_customer'),(48,'Can view customer',12,'view_customer'),(49,'Can add employee',13,'add_employee'),(50,'Can change employee',13,'change_employee'),(51,'Can delete employee',13,'delete_employee'),(52,'Can view employee',13,'view_employee'),(53,'Can add supplier',14,'add_supplier'),(54,'Can change supplier',14,'change_supplier'),(55,'Can delete supplier',14,'delete_supplier'),(56,'Can view supplier',14,'view_supplier'),(57,'Can add inbound stock',15,'add_inboundstock'),(58,'Can change inbound stock',15,'change_inboundstock'),(59,'Can delete inbound stock',15,'delete_inboundstock'),(60,'Can view inbound stock',15,'view_inboundstock'),(61,'Can add inbound stock item',16,'add_inboundstockitem'),(62,'Can change inbound stock item',16,'change_inboundstockitem'),(63,'Can delete inbound stock item',16,'delete_inboundstockitem'),(64,'Can view inbound stock item',16,'view_inboundstockitem'),(65,'Can add account',17,'add_account'),(66,'Can change account',17,'change_account'),(67,'Can delete account',17,'delete_account'),(68,'Can view account',17,'view_account');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$720000$fyFv5WOgvt67CwhJxOR1G8$DKaQhKADt9zAiP6/Q0lS3AWX47KW5Bnv/nesKLXLjwg=',NULL,0,'123','','','',0,1,'2024-10-22 02:37:04.653122');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(17,'api','account'),(12,'api','customer'),(13,'api','employee'),(15,'api','inboundstock'),(16,'api','inboundstockitem'),(8,'api','inventory'),(10,'api','order'),(9,'api','orderdetails'),(11,'api','ordertracking'),(7,'api','product'),(14,'api','supplier'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-10-22 02:35:59.664585'),(2,'auth','0001_initial','2024-10-22 02:36:00.060373'),(3,'admin','0001_initial','2024-10-22 02:36:00.159046'),(4,'admin','0002_logentry_remove_auto_add','2024-10-22 02:36:00.164243'),(5,'admin','0003_logentry_add_action_flag_choices','2024-10-22 02:36:00.169059'),(6,'api','0001_initial','2024-10-22 02:36:00.222898'),(7,'api','0002_product','2024-10-22 02:36:00.234887'),(8,'api','0003_product_brand_product_description_product_status_and_more','2024-10-22 02:36:00.297248'),(9,'api','0004_inventory_delete_note','2024-10-22 02:36:00.356856'),(10,'api','0005_company_orderdetails','2024-10-22 02:36:00.412256'),(11,'api','0006_order_orderdetails_order','2024-10-22 02:36:00.506694'),(12,'api','0007_alter_orderdetails_order_ordertracking','2024-10-22 02:36:00.625537'),(13,'api','0008_alter_ordertracking_date_cancelled_and_more','2024-10-22 02:36:00.799559'),(14,'api','0009_rename_name_company_company_name_and_more','2024-10-22 02:36:00.899727'),(15,'api','0010_rename_order_details_orderdetails_order','2024-10-22 02:36:00.968620'),(16,'api','0011_rename_type_product_product_type_and_more','2024-10-22 02:36:01.007572'),(17,'api','0012_alter_product_brand_alter_product_description_and_more','2024-10-22 02:36:01.014279'),(18,'api','0013_customer_alter_product_price','2024-10-22 02:36:01.028288'),(19,'api','0014_remove_customer_email','2024-10-22 02:36:01.038462'),(20,'api','0015_alter_inventory_stock_and_more','2024-10-22 02:36:01.208419'),(21,'api','0016_employee','2024-10-22 02:36:01.220685'),(22,'api','0017_supplier_remove_employee_employee_name_and_more','2024-10-22 02:36:01.283990'),(23,'api','0018_inboundstock','2024-10-22 02:36:01.380919'),(24,'api','0019_inventory_stock_maximum_threshold','2024-10-22 02:36:01.432469'),(25,'api','0020_remove_inboundstock_inventory_and_more','2024-10-22 02:36:01.673949'),(26,'api','0021_rename_company_account_and_more','2024-10-22 02:36:01.816821'),(27,'api','0022_remove_inventory_stock_maximum_threshold','2024-10-22 02:36:01.830848'),(28,'api','0023_customer_is_deleted','2024-10-22 02:36:01.846205'),(29,'api','0024_account_is_deleted','2024-10-22 02:36:01.866301'),(30,'api','0025_rename_customer_walk_in_name_order_account_name_and_more','2024-10-22 02:36:02.036655'),(31,'api','0026_order_employee_order_employee_first_name_and_more','2024-10-22 02:36:02.132880'),(32,'api','0027_alter_order_account_alter_order_account_name_and_more','2024-10-22 02:36:02.341311'),(33,'api','0028_alter_order_account_alter_order_customer_and_more','2024-10-22 02:36:02.517559'),(34,'api','0029_alter_product_price','2024-10-22 02:36:02.543515'),(35,'api','0030_alter_orderdetails_order','2024-10-22 02:36:02.599914'),(36,'api','0031_alter_inventory_stock_alter_product_brand_and_more','2024-10-22 02:36:02.702583'),(37,'api','0032_alter_account_barangay_alter_account_city_and_more','2024-10-22 02:36:02.858036'),(38,'api','0033_employee_is_deleted_alter_account_account','2024-10-22 02:36:02.903006'),(39,'api','0034_product_is_deleted_alter_employee_barangay_and_more','2024-10-22 02:36:02.934258'),(40,'api','0035_remove_product_is_deleted_inventory_is_deleted_and_more','2024-10-22 02:36:02.967572'),(41,'api','0036_supplier_is_deleted','2024-10-22 02:36:02.984595'),(42,'api','0037_product_is_deleted','2024-10-22 02:36:03.006353'),(43,'api','0038_remove_employee_is_deleted_and_more','2024-10-22 02:36:03.615626'),(44,'api','0039_alter_account_account_alter_account_email_and_more','2024-10-22 02:36:04.339348'),(45,'api','0040_alter_account_phone_number_and_more','2024-10-22 02:36:04.371794'),(46,'api','0041_alter_account_phone_number','2024-10-22 02:36:04.374794'),(47,'api','0042_alter_employee_phone_number','2024-10-22 02:36:04.378786'),(48,'contenttypes','0002_remove_content_type_name','2024-10-22 02:36:04.436458'),(49,'auth','0002_alter_permission_name_max_length','2024-10-22 02:36:04.484254'),(50,'auth','0003_alter_user_email_max_length','2024-10-22 02:36:04.499602'),(51,'auth','0004_alter_user_username_opts','2024-10-22 02:36:04.505601'),(52,'auth','0005_alter_user_last_login_null','2024-10-22 02:36:04.540530'),(53,'auth','0006_require_contenttypes_0002','2024-10-22 02:36:04.542531'),(54,'auth','0007_alter_validators_add_error_messages','2024-10-22 02:36:04.548961'),(55,'auth','0008_alter_user_username_max_length','2024-10-22 02:36:04.596092'),(56,'auth','0009_alter_user_last_name_max_length','2024-10-22 02:36:04.641230'),(57,'auth','0010_alter_group_name_max_length','2024-10-22 02:36:04.653320'),(58,'auth','0011_update_proxy_permissions','2024-10-22 02:36:04.662995'),(59,'auth','0012_alter_user_first_name_max_length','2024-10-22 02:36:04.706461'),(60,'sessions','0001_initial','2024-10-22 02:36:04.727663');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-22 12:09:19
