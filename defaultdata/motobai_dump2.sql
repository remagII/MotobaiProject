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
-- Dumping data for table `api_account`
--

LOCK TABLES `api_account` WRITE;
/*!40000 ALTER TABLE `api_account` DISABLE KEYS */;
INSERT INTO `api_account` VALUES (1,'MOTORJOY DEPOT INC.','Thomas C. Ongtenco','Representative','Davao City','Ecoland','2nd Floor TPI Building Quimpo Boulevard','09234567891','noah.cruz2024@outlook.com','2024-11-16 02:26:28.737283',0),(2,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','Charlie U. Te','COO','Davao City','Barangay Toril','37 Jorge Saavedra Street','09912345678','alex.rivera123@gmail.com','2024-11-16 02:27:36.884517',0),(3,'DAVAO GOLDEN HARDWARE, INC.','Eugene T. Go','Employee','Davao City','Matina','Goldcrest Building Km. 3, McArthur Highway','09567891234','luna.castillo.temp@protonmail.com','2024-11-16 02:28:24.551618',0),(4,'aaMOTORMALL DAVAO CORPORATION','Felipe S. Barroga','Owner','Davao City','Mintal','Km. 8, Barrio Pampanga','09345678912','isabella.reyes.mail@gmail.com','2024-11-16 02:29:53.165301',1),(5,'Test Account','Joem','CEO','Davao City','asdasd','Street','09566921912','jridpan1225@gmail.com','2024-11-16 05:37:26.239569',1);
/*!40000 ALTER TABLE `api_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_customer`
--

LOCK TABLES `api_customer` WRITE;
/*!40000 ALTER TABLE `api_customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_employee`
--

LOCK TABLES `api_employee` WRITE;
/*!40000 ALTER TABLE `api_employee` DISABLE KEYS */;
INSERT INTO `api_employee` VALUES (1,'Davao City','Catalunan Pequeno','Some Street','09566921912','jridpan1225@gmail.com','2024-11-16 02:30:39.382635','Jose Emmanuel','Idpan','Rabino',0),(2,'Davao City','Calinan','Some Street2','09789123456','rcmn.123@hotmail.com','2024-11-16 02:31:29.976984','Ram Christian','Nacar','Doe',0),(3,'Davao City','Ecoland','Street','09123456789','email@hotmail.com','2024-11-16 02:32:14.426877','Thaddeus','Domingo','Dad',0),(4,'asd','sd','asd','09566921912','jridpan1225@gmail.com','2024-11-16 05:01:39.000980','a','a','asd',0);
/*!40000 ALTER TABLE `api_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_inboundstock`
--

LOCK TABLES `api_inboundstock` WRITE;
/*!40000 ALTER TABLE `api_inboundstock` DISABLE KEYS */;
INSERT INTO `api_inboundstock` VALUES (1,'2024-11-16 03:15:55.140062',1,1),(2,'2024-11-16 03:16:19.951605',1,1),(3,'2024-11-16 03:16:47.778054',1,1),(4,'2024-11-16 03:16:58.888486',1,1),(5,'2024-11-16 03:19:45.899138',1,1),(6,'2024-11-16 03:26:01.742206',1,1);
/*!40000 ALTER TABLE `api_inboundstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_inboundstockitem`
--

LOCK TABLES `api_inboundstockitem` WRITE;
/*!40000 ALTER TABLE `api_inboundstockitem` DISABLE KEYS */;
INSERT INTO `api_inboundstockitem` VALUES (1,5000,1,1),(2,10000,3,1),(3,2500,2,2),(4,100,4,2),(5,245,1,3),(6,12,2,4),(7,100,4,5),(8,200,4,6);
/*!40000 ALTER TABLE `api_inboundstockitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_inventory`
--

LOCK TABLES `api_inventory` WRITE;
/*!40000 ALTER TABLE `api_inventory` DISABLE KEYS */;
INSERT INTO `api_inventory` VALUES (1,2345,100,'2024-11-16 02:34:05.836153','2024-11-16 03:51:23.622456',1,0),(2,2446,25,'2024-11-16 02:35:34.659310','2024-11-16 03:17:59.746525',2,0),(3,5976,50,'2024-11-16 02:37:02.350740','2024-11-16 03:18:35.125332',3,0),(4,75,200,'2024-11-16 02:38:13.481972','2024-11-16 03:51:23.615441',4,0),(5,0,25,'2024-11-16 02:40:09.806560','2024-11-16 05:18:19.887145',5,1),(6,0,100,'2024-11-16 05:18:41.915633','2024-11-16 05:18:41.915633',6,0);
/*!40000 ALTER TABLE `api_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_invoice`
--

LOCK TABLES `api_invoice` WRITE;
/*!40000 ALTER TABLE `api_invoice` DISABLE KEYS */;
INSERT INTO `api_invoice` VALUES (1,741250.00,NULL,NULL,NULL,'2024-11-16 03:17:41.508204',NULL,NULL,1),(2,103500.00,NULL,NULL,NULL,'2024-11-16 03:17:59.766673',NULL,NULL,2),(3,170500.00,NULL,NULL,NULL,'2024-11-16 03:18:04.206533',NULL,NULL,3),(4,1024620.00,NULL,NULL,NULL,'2024-11-16 03:18:35.167261',NULL,NULL,4),(5,4625.00,NULL,NULL,NULL,'2024-11-16 03:18:52.571456',NULL,NULL,5),(6,4625.00,NULL,NULL,NULL,'2024-11-16 03:19:23.119831',NULL,NULL,6),(7,4625.00,NULL,NULL,NULL,'2024-11-16 03:19:56.235882',NULL,NULL,7),(8,4625.00,NULL,NULL,NULL,'2024-11-16 03:23:51.653183',NULL,NULL,8),(9,2035.00,NULL,NULL,NULL,'2024-11-16 03:26:14.950658',NULL,NULL,9),(10,4625.00,NULL,NULL,NULL,'2024-11-16 03:42:41.568557',NULL,NULL,10),(11,555.00,NULL,NULL,NULL,'2024-11-16 03:46:20.899873',NULL,NULL,11),(12,1709625.00,NULL,NULL,NULL,'2024-11-16 03:51:14.508556',NULL,NULL,12);
/*!40000 ALTER TABLE `api_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_order`
--

LOCK TABLES `api_order` WRITE;
/*!40000 ALTER TABLE `api_order` DISABLE KEYS */;
INSERT INTO `api_order` VALUES (1,'MOTORJOY DEPOT INC.','2024-11-16 03:17:41.437407',1,NULL,'','Thomas C. Ongtenco',1,'Jose Emmanuel','Idpan','Rabino',NULL,'Ecoland','Davao City','09234567891','2nd Floor TPI Building Quimpo Boulevard','Delivery'),(2,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','2024-11-16 03:17:59.734387',2,NULL,'','Charlie U. Te',3,'Thaddeus','Domingo','Daddy',NULL,'Barangay Toril','Davao City','09912345678','37 Jorge Saavedra Street','Delivery'),(3,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','2024-11-16 03:18:04.171729',2,NULL,'','Charlie U. Te',3,'Thaddeus','Domingo','Daddy',NULL,'Barangay Toril','Davao City','09912345678','37 Jorge Saavedra Street','Delivery'),(4,'DAVAO GOLDEN HARDWARE, INC.','2024-11-16 03:18:35.112029',3,NULL,'','Eugene T. Go',2,'Ram Christian','Nacar','Doe',NULL,'Matina','Davao City','09567891234','Goldcrest Building Km. 3, McArthur Highway','Delivery'),(5,'MOTORJOY DEPOT INC.','2024-11-16 03:18:52.536390',1,NULL,'','Thomas C. Ongtenco',2,'Ram Christian','Nacar','Doe',NULL,'Ecoland','Davao City','09234567891','2nd Floor TPI Building Quimpo Boulevard','Delivery'),(6,'MOTORJOY DEPOT INC.','2024-11-16 03:19:23.083355',1,NULL,'','Thomas C. Ongtenco',1,'Jose Emmanuel','Idpan','Rabino',NULL,'Ecoland','Davao City','09234567891','2nd Floor TPI Building Quimpo Boulevard','Delivery'),(7,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','2024-11-16 03:19:56.205349',2,NULL,'','Charlie U. Te',2,'Ram Christian','Nacar','Doe',NULL,'Barangay Toril','Davao City','09912345678','37 Jorge Saavedra Street','Delivery'),(8,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','2024-11-16 03:23:51.619289',2,NULL,'','Charlie U. Te',1,'Jose Emmanuel','Idpan','Rabino',NULL,'Barangay Toril','Davao City','09912345678','37 Jorge Saavedra Street','Delivery'),(9,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','2024-11-16 03:26:14.924414',2,NULL,'','Charlie U. Te',1,'Jose Emmanuel','Idpan','Rabino',NULL,'Barangay Toril','Davao City','09912345678','37 Jorge Saavedra Street','Delivery'),(10,'MOTORJOY DEPOT INC.','2024-11-16 03:42:41.539352',1,NULL,'','Thomas C. Ongtenco',3,'Thaddeus','Domingo','Daddy',NULL,'Ecoland','Davao City','09234567891','2nd Floor TPI Building Quimpo Boulevard','Delivery'),(11,'MOTORJOY DEPOT INC.','2024-11-16 03:46:20.871008',1,NULL,'','Thomas C. Ongtenco',1,'Jose Emmanuel','Idpan','Rabino',NULL,'Ecoland','Davao City','09234567891','2nd Floor TPI Building Quimpo Boulevard','Delivery'),(12,'MARS AGRI VENTURES AND COMMODITIES INCORPORATED','2024-11-16 03:51:14.480839',2,NULL,'','Charlie U. Te',2,'Ram Christian','Nacar','Doe',NULL,'Barangay Toril','Davao City','09912345678','37 Jorge Saavedra Street','Delivery');
/*!40000 ALTER TABLE `api_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_orderdetails`
--

LOCK TABLES `api_orderdetails` WRITE;
/*!40000 ALTER TABLE `api_orderdetails` DISABLE KEYS */;
INSERT INTO `api_orderdetails` VALUES (1,250,1705.00,1,'AISIN 5W-30',1),(2,10,4500.00,1,'Mobil 1 5W-30',2),(3,2000,135.00,1,'Superspeed Scooter Oil Semi Synthetic',3),(4,23,4500.00,2,'Mobil 1 5W-30',2),(5,100,1705.00,3,'AISIN 5W-30',1),(6,12,135.00,4,'Superspeed Scooter Oil Semi Synthetic',3),(7,600,1705.00,4,'AISIN 5W-30',1),(8,25,185.00,5,'Superspeed Scooter Oil Fully Synthetic',4),(9,25,185.00,6,'Superspeed Scooter Oil Fully Synthetic',4),(10,25,185.00,7,'Superspeed Scooter Oil Fully Synthetic',4),(11,25,185.00,8,'Superspeed Scooter Oil Fully Synthetic',4),(12,11,185.00,9,'Superspeed Scooter Oil Fully Synthetic',4),(13,25,185.00,10,'Superspeed Scooter Oil Fully Synthetic',4),(14,3,185.00,11,'Superspeed Scooter Oil Fully Synthetic',4),(15,25,185.00,12,'Superspeed Scooter Oil Fully Synthetic',4),(16,1000,1705.00,12,'AISIN 5W-30',1);
/*!40000 ALTER TABLE `api_orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_ordertracking`
--

LOCK TABLES `api_ordertracking` WRITE;
/*!40000 ALTER TABLE `api_ordertracking` DISABLE KEYS */;
INSERT INTO `api_ordertracking` VALUES (1,'cancelled','2024-11-16 03:17:41.501259',NULL,NULL,NULL,'2024-11-16 04:50:02.972000',1),(2,'cancelled','2024-11-16 03:17:59.759500',NULL,NULL,NULL,'2024-11-16 04:50:20.160000',2),(3,'unvalidated','2024-11-16 03:18:04.199995',NULL,NULL,NULL,NULL,3),(4,'returned','2024-11-16 03:18:35.159013',NULL,NULL,NULL,NULL,4),(5,'unvalidated','2024-11-16 03:18:52.565439',NULL,NULL,NULL,NULL,5),(6,'unvalidated','2024-11-16 03:19:23.111358',NULL,NULL,NULL,NULL,6),(7,'unvalidated','2024-11-16 03:19:56.230864',NULL,NULL,NULL,NULL,7),(8,'unvalidated','2024-11-16 03:23:51.645183',NULL,NULL,NULL,NULL,8),(9,'unvalidated','2024-11-16 03:26:14.945646',NULL,NULL,NULL,NULL,9),(10,'validated','2024-11-16 03:42:41.562900','2024-11-16 03:43:17.252000',NULL,NULL,NULL,10),(11,'unvalidated','2024-11-16 03:46:20.891847',NULL,NULL,NULL,NULL,11),(12,'returned','2024-11-16 03:51:14.503030','2024-11-16 03:51:23.587000',NULL,NULL,NULL,12);
/*!40000 ALTER TABLE `api_ordertracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_product`
--

LOCK TABLES `api_product` WRITE;
/*!40000 ALTER TABLE `api_product` DISABLE KEYS */;
INSERT INTO `api_product` VALUES (1,'AISIN 5W-30',1705.00,'greenTECH+','FULLY SYNTHETIC MOTOR OIL','Oils & Fluids','Universal'),(2,'Mobil 1 5W-30',4500.00,'Mobil 1','Fully Synthetic Gasoline Motor Oil','Oil','Motorcycle'),(3,'Superspeed Scooter Oil Semi Synthetic',135.00,'SuperSpeed','Semi Synthetic','Oil','Scooter'),(4,'Superspeed Scooter Oil Fully Synthetic',185.00,'SuperSpeed','Fully Synthetic','Oil','Scooter'),(5,'Motul 1',4500.00,'Mobil 1','Fully Synthetic Gasoline Motor Oil','Oil','Motorcycle'),(6,'MOTUL SCOOTER 10W40',2000.00,'Motorex','Description','Oil','Scooter');
/*!40000 ALTER TABLE `api_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_supplier`
--

LOCK TABLES `api_supplier` WRITE;
/*!40000 ALTER TABLE `api_supplier` DISABLE KEYS */;
INSERT INTO `api_supplier` VALUES (1,'Supplier2','09566921912','Desc',0),(2,'Supplier 231','09566921912','Test Description',0),(3,'Supplier 5','09566921912','123',0);
/*!40000 ALTER TABLE `api_supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add product',7,'add_product'),(26,'Can change product',7,'change_product'),(27,'Can delete product',7,'delete_product'),(28,'Can view product',7,'view_product'),(29,'Can add inventory',8,'add_inventory'),(30,'Can change inventory',8,'change_inventory'),(31,'Can delete inventory',8,'delete_inventory'),(32,'Can view inventory',8,'view_inventory'),(33,'Can add supplier',9,'add_supplier'),(34,'Can change supplier',9,'change_supplier'),(35,'Can delete supplier',9,'delete_supplier'),(36,'Can view supplier',9,'view_supplier'),(37,'Can add employee',10,'add_employee'),(38,'Can change employee',10,'change_employee'),(39,'Can delete employee',10,'delete_employee'),(40,'Can view employee',10,'view_employee'),(41,'Can add inbound stock item',11,'add_inboundstockitem'),(42,'Can change inbound stock item',11,'change_inboundstockitem'),(43,'Can delete inbound stock item',11,'delete_inboundstockitem'),(44,'Can view inbound stock item',11,'view_inboundstockitem'),(45,'Can add inbound stock',12,'add_inboundstock'),(46,'Can change inbound stock',12,'change_inboundstock'),(47,'Can delete inbound stock',12,'delete_inboundstock'),(48,'Can view inbound stock',12,'view_inboundstock'),(49,'Can add account',13,'add_account'),(50,'Can change account',13,'change_account'),(51,'Can delete account',13,'delete_account'),(52,'Can view account',13,'view_account'),(53,'Can add customer',14,'add_customer'),(54,'Can change customer',14,'change_customer'),(55,'Can delete customer',14,'delete_customer'),(56,'Can view customer',14,'view_customer'),(57,'Can add order',15,'add_order'),(58,'Can change order',15,'change_order'),(59,'Can delete order',15,'delete_order'),(60,'Can view order',15,'view_order'),(61,'Can add order details',16,'add_orderdetails'),(62,'Can change order details',16,'change_orderdetails'),(63,'Can delete order details',16,'delete_orderdetails'),(64,'Can view order details',16,'view_orderdetails'),(65,'Can add order tracking',17,'add_ordertracking'),(66,'Can change order tracking',17,'change_ordertracking'),(67,'Can delete order tracking',17,'delete_ordertracking'),(68,'Can view order tracking',17,'view_ordertracking'),(69,'Can add invoice',18,'add_invoice'),(70,'Can change invoice',18,'change_invoice'),(71,'Can delete invoice',18,'delete_invoice'),(72,'Can view invoice',18,'view_invoice');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$720000$hFI6gTUMjB2F6mDfeN9yII$y2n73dfWwwZeaL55JOlnfzgDelYve6W43DOwYaH/axM=',NULL,0,'123','','','',0,1,'2024-11-16 02:23:27.342407'),(2,'pbkdf2_sha256$720000$Ce09kNgMCNc98e6maQClfL$T6uXj/mSXUucumN3ahUPWqBC8I0Ry9x0cv8KPTrH1do=',NULL,0,'666','','','',0,1,'2024-11-16 05:31:41.278178');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(13,'api','account'),(14,'api','customer'),(10,'api','employee'),(12,'api','inboundstock'),(11,'api','inboundstockitem'),(8,'api','inventory'),(18,'api','invoice'),(15,'api','order'),(16,'api','orderdetails'),(17,'api','ordertracking'),(7,'api','product'),(9,'api','supplier'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-10-22 02:35:59.664585'),(2,'auth','0001_initial','2024-10-22 02:36:00.060373'),(3,'admin','0001_initial','2024-10-22 02:36:00.159046'),(4,'admin','0002_logentry_remove_auto_add','2024-10-22 02:36:00.164243'),(5,'admin','0003_logentry_add_action_flag_choices','2024-10-22 02:36:00.169059'),(6,'api','0001_initial','2024-10-22 02:36:00.222898'),(7,'api','0002_product','2024-10-22 02:36:00.234887'),(8,'api','0003_product_brand_product_description_product_status_and_more','2024-10-22 02:36:00.297248'),(9,'api','0004_inventory_delete_note','2024-10-22 02:36:00.356856'),(10,'api','0005_company_orderdetails','2024-10-22 02:36:00.412256'),(11,'api','0006_order_orderdetails_order','2024-10-22 02:36:00.506694'),(12,'api','0007_alter_orderdetails_order_ordertracking','2024-10-22 02:36:00.625537'),(13,'api','0008_alter_ordertracking_date_cancelled_and_more','2024-10-22 02:36:00.799559'),(14,'api','0009_rename_name_company_company_name_and_more','2024-10-22 02:36:00.899727'),(15,'api','0010_rename_order_details_orderdetails_order','2024-10-22 02:36:00.968620'),(16,'api','0011_rename_type_product_product_type_and_more','2024-10-22 02:36:01.007572'),(17,'api','0012_alter_product_brand_alter_product_description_and_more','2024-10-22 02:36:01.014279'),(18,'api','0013_customer_alter_product_price','2024-10-22 02:36:01.028288'),(19,'api','0014_remove_customer_email','2024-10-22 02:36:01.038462'),(20,'api','0015_alter_inventory_stock_and_more','2024-10-22 02:36:01.208419'),(21,'api','0016_employee','2024-10-22 02:36:01.220685'),(22,'api','0017_supplier_remove_employee_employee_name_and_more','2024-10-22 02:36:01.283990'),(23,'api','0018_inboundstock','2024-10-22 02:36:01.380919'),(24,'api','0019_inventory_stock_maximum_threshold','2024-10-22 02:36:01.432469'),(25,'api','0020_remove_inboundstock_inventory_and_more','2024-10-22 02:36:01.673949'),(26,'api','0021_rename_company_account_and_more','2024-10-22 02:36:01.816821'),(27,'api','0022_remove_inventory_stock_maximum_threshold','2024-10-22 02:36:01.830848'),(28,'api','0023_customer_is_deleted','2024-10-22 02:36:01.846205'),(29,'api','0024_account_is_deleted','2024-10-22 02:36:01.866301'),(30,'api','0025_rename_customer_walk_in_name_order_account_name_and_more','2024-10-22 02:36:02.036655'),(31,'api','0026_order_employee_order_employee_first_name_and_more','2024-10-22 02:36:02.132880'),(32,'api','0027_alter_order_account_alter_order_account_name_and_more','2024-10-22 02:36:02.341311'),(33,'api','0028_alter_order_account_alter_order_customer_and_more','2024-10-22 02:36:02.517559'),(34,'api','0029_alter_product_price','2024-10-22 02:36:02.543515'),(35,'api','0030_alter_orderdetails_order','2024-10-22 02:36:02.599914'),(36,'api','0031_alter_inventory_stock_alter_product_brand_and_more','2024-10-22 02:36:02.702583'),(37,'api','0032_alter_account_barangay_alter_account_city_and_more','2024-10-22 02:36:02.858036'),(38,'api','0033_employee_is_deleted_alter_account_account','2024-10-22 02:36:02.903006'),(39,'api','0034_product_is_deleted_alter_employee_barangay_and_more','2024-10-22 02:36:02.934258'),(40,'api','0035_remove_product_is_deleted_inventory_is_deleted_and_more','2024-10-22 02:36:02.967572'),(41,'api','0036_supplier_is_deleted','2024-10-22 02:36:02.984595'),(42,'api','0037_product_is_deleted','2024-10-22 02:36:03.006353'),(43,'api','0038_remove_employee_is_deleted_and_more','2024-10-22 02:36:03.615626'),(44,'api','0039_alter_account_account_alter_account_email_and_more','2024-10-22 02:36:04.339348'),(45,'api','0040_alter_account_phone_number_and_more','2024-10-22 02:36:04.371794'),(46,'api','0041_alter_account_phone_number','2024-10-22 02:36:04.374794'),(47,'api','0042_alter_employee_phone_number','2024-10-22 02:36:04.378786'),(48,'contenttypes','0002_remove_content_type_name','2024-10-22 02:36:04.436458'),(49,'auth','0002_alter_permission_name_max_length','2024-10-22 02:36:04.484254'),(50,'auth','0003_alter_user_email_max_length','2024-10-22 02:36:04.499602'),(51,'auth','0004_alter_user_username_opts','2024-10-22 02:36:04.505601'),(52,'auth','0005_alter_user_last_login_null','2024-10-22 02:36:04.540530'),(53,'auth','0006_require_contenttypes_0002','2024-10-22 02:36:04.542531'),(54,'auth','0007_alter_validators_add_error_messages','2024-10-22 02:36:04.548961'),(55,'auth','0008_alter_user_username_max_length','2024-10-22 02:36:04.596092'),(56,'auth','0009_alter_user_last_name_max_length','2024-10-22 02:36:04.641230'),(57,'auth','0010_alter_group_name_max_length','2024-10-22 02:36:04.653320'),(58,'auth','0011_update_proxy_permissions','2024-10-22 02:36:04.662995'),(59,'auth','0012_alter_user_first_name_max_length','2024-10-22 02:36:04.706461'),(60,'sessions','0001_initial','2024-10-22 02:36:04.727663'),(61,'api','0043_employee_is_deleted_inventory_is_deleted_and_more','2024-10-26 09:51:08.980827'),(62,'api','0044_remove_product_is_deleted','2024-10-26 09:51:08.995918'),(63,'api','0045_alter_account_barangay_alter_account_city_and_more','2024-10-26 09:51:09.924196'),(64,'api','0046_alter_orderdetails_product_name_and_more','2024-10-26 09:51:10.005304'),(65,'api','0047_remove_orderdetails_product_orderdetails_inventory_and_more','2024-10-26 09:51:10.435332'),(66,'api','0048_alter_ordertracking_status','2024-10-26 09:51:10.440086'),(67,'api','0049_remove_ordertracking_order_and_more','2024-10-26 09:51:10.536282'),(68,'api','0050_remove_orderdetails_order_tracking_and_more','2024-10-26 09:51:10.672417'),(69,'api','0051_alter_order_order_tracking','2024-10-26 09:51:10.769338'),(70,'api','0052_alter_order_order_tracking','2024-10-26 09:51:10.891413'),(71,'api','0053_remove_order_order_tracking_ordertracking_order','2024-10-26 09:51:11.008572'),(72,'api','0054_rename_date_packed_ordertracking_date_shipped_and_more','2024-10-26 09:51:11.024674'),(73,'api','0055_invoice','2024-10-27 03:13:37.482146'),(74,'api','0056_delete_invoice','2024-10-27 03:13:37.493146'),(75,'api','0057_invoice','2024-10-27 03:17:17.970777'),(76,'api','0058_alter_invoice_discounted_amount_and_more','2024-10-27 03:22:20.492437'),(77,'api','0059_order_gross_price','2024-11-04 07:29:36.623029'),(78,'api','0055_alter_order_employee_first_name_and_more','2024-11-05 05:04:04.272235'),(79,'api','0059_merge_20241029_1011','2024-11-05 05:04:04.290774'),(80,'api','0002_invoice','2024-11-05 05:31:36.455986'),(81,'api','0003_remove_inboundstockitem_supplier_and_more','2024-11-05 05:44:14.088687'),(82,'api','0004_inboundstock_employee','2024-11-05 06:11:06.559643'),(83,'api','0005_order_barangay_order_city_order_phone_number_and_more','2024-11-05 07:44:07.752410'),(84,'api','0006_order_order_type','2024-11-05 07:47:20.130132'),(85,'api','0007_alter_order_order_type','2024-11-05 07:48:15.550589'),(86,'api','0008_alter_order_account_name_and_more','2024-11-05 07:52:25.263109'),(87,'api','0009_alter_order_account_name_alter_order_barangay_and_more','2024-11-05 07:54:36.568127'),(88,'api','0010_alter_invoice_total_balance','2024-11-05 10:36:58.617081'),(89,'api','0011_remove_inboundstock_inboundstockitems_and_more','2024-11-16 03:05:17.251040');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2024-11-16 14:21:04
