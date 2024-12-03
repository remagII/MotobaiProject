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
INSERT INTO `api_account` VALUES (1,'Motorjoy Depot Inc.','Mark Anthony','CEO','Davao City','Catalunan Pequeno',' TPI Bldg, Quimpo Blvd PH','09564931912','motor@gmail.com','2024-12-03 11:23:41.699263',0),(2,'Rusi','Gabriel','Employee','Davao City','Quimpo Blvd 8000 PH','Door No: 1, Sato Building','09566023417','rusi@official.com','2024-12-03 11:24:40.804642',0),(3,'Effanix Motorparts','Camille','CEO','Davao City','Datu Abing','St 8000','09567922991','tyche@gmail.com','2024-12-03 11:25:33.623516',0),(4,'DHCI Cyclehaus','Juan Santos','Manager','Davao City','134 Quezon Blvd ','8000 PH','09822271150','Santos@gmail.com','2024-12-03 11:26:36.095735',0),(5,'Eversure','Christine Rivera','Owner','Davao City','Diversion Road','Block 8, Lot 27, Old San Isidro','09822995969','eversosure@gmail.com','2024-12-03 11:27:40.784390',0);
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
INSERT INTO `api_employee` VALUES (1,'Davao City','Catalunan Pequeno','Block 8, Lot 27, Old San Isidro','09566921912','joem@gmail.com','2024-12-03 11:28:17.519558','Jose Emmanuel','Idpan','R.',0),(2,'Davao City','Ecoland','SM Megamall','09865921911','thaddy@gmail.com','2024-12-03 11:29:02.697559','Thaddeus','Domingo','C.',0),(3,'Davao City','Camella','Homes','09866321911','ram@gmail.com','2024-12-03 11:29:35.744666','Ram Christian','Nacar','N.',0);
/*!40000 ALTER TABLE `api_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_inboundstock`
--

LOCK TABLES `api_inboundstock` WRITE;
/*!40000 ALTER TABLE `api_inboundstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_inboundstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_inboundstockitem`
--

LOCK TABLES `api_inboundstockitem` WRITE;
/*!40000 ALTER TABLE `api_inboundstockitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_inboundstockitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_inventory`
--

LOCK TABLES `api_inventory` WRITE;
/*!40000 ALTER TABLE `api_inventory` DISABLE KEYS */;
INSERT INTO `api_inventory` VALUES (1,0,50,'2024-12-03 11:32:48.502578','2024-12-03 11:32:48.503578',1,0),(2,0,75,'2024-12-03 11:33:36.159245','2024-12-03 11:33:36.159245',2,0),(3,0,100,'2024-12-03 11:34:24.814410','2024-12-03 11:34:24.814410',3,0),(4,0,50,'2024-12-03 11:36:21.945341','2024-12-03 11:36:21.945341',4,0),(5,0,135,'2024-12-03 11:38:26.814303','2024-12-03 11:38:26.814303',5,0),(6,0,35,'2024-12-03 11:39:36.085666','2024-12-03 11:39:36.085666',6,0),(7,0,250,'2024-12-03 11:40:24.703715','2024-12-03 11:40:24.703715',7,0);
/*!40000 ALTER TABLE `api_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_order`
--

LOCK TABLES `api_order` WRITE;
/*!40000 ALTER TABLE `api_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_orderdetails`
--

LOCK TABLES `api_orderdetails` WRITE;
/*!40000 ALTER TABLE `api_orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_ordertracking`
--

LOCK TABLES `api_ordertracking` WRITE;
/*!40000 ALTER TABLE `api_ordertracking` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_ordertracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_outboundstock`
--

LOCK TABLES `api_outboundstock` WRITE;
/*!40000 ALTER TABLE `api_outboundstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_outboundstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_outboundstockitem`
--

LOCK TABLES `api_outboundstockitem` WRITE;
/*!40000 ALTER TABLE `api_outboundstockitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_outboundstockitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_payment`
--

LOCK TABLES `api_payment` WRITE;
/*!40000 ALTER TABLE `api_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_product`
--

LOCK TABLES `api_product` WRITE;
/*!40000 ALTER TABLE `api_product` DISABLE KEYS */;
INSERT INTO `api_product` VALUES (1,'TSMP WF Pulley',550.00,'TSMP','Nmax and Aerox models','Parts','Scooter','SCOOTER -001'),(2,'TSMP Clutch Bell',350.00,'TSMP','Clutch Bell','Parts','Scooter','SCOOTER -002'),(3,'TSMP Clutch Lining Assy',550.00,'TSMP','Nmax and Aerox','Parts','Scooter','SCOOTER -003'),(4,'PRO HONDA ENGINE OIL 10W-30 SL',315.00,'PRO HONDA','10W-30 SL API SERVICE JASO MB FULLY SYNTHETIC','Oils & Fluids','Motorcycle','MOTORCYCLE -001'),(5,'MOTUL SCOOTER POWER LE 5w40',550.00,'MOTUL','1Liter ( FULLY SYNTHETIC )','Oils & Fluids','Scooter','SCOOTER -004'),(6,'OXFORD OX666 CARGO NET 17\" X 17\"',490.00,'OXFORD','CARGO NET 17\" X 17\"','Parts','Motorcycle','MOTORCYCLE -002'),(7,'GIVI Z191 COMPRESSION SPRING',50.00,'GIVI','COMPRESSION SPRING','Parts','Motorcycle','MOTORCYCLE -003');
/*!40000 ALTER TABLE `api_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_supplier`
--

LOCK TABLES `api_supplier` WRITE;
/*!40000 ALTER TABLE `api_supplier` DISABLE KEYS */;
INSERT INTO `api_supplier` VALUES (1,'Supplier 1','09570311911','Secret Supplier',0);
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
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add product',7,'add_product'),(26,'Can change product',7,'change_product'),(27,'Can delete product',7,'delete_product'),(28,'Can view product',7,'view_product'),(29,'Can add inventory',8,'add_inventory'),(30,'Can change inventory',8,'change_inventory'),(31,'Can delete inventory',8,'delete_inventory'),(32,'Can view inventory',8,'view_inventory'),(33,'Can add supplier',9,'add_supplier'),(34,'Can change supplier',9,'change_supplier'),(35,'Can delete supplier',9,'delete_supplier'),(36,'Can view supplier',9,'view_supplier'),(37,'Can add employee',10,'add_employee'),(38,'Can change employee',10,'change_employee'),(39,'Can delete employee',10,'delete_employee'),(40,'Can view employee',10,'view_employee'),(41,'Can add inbound stock item',11,'add_inboundstockitem'),(42,'Can change inbound stock item',11,'change_inboundstockitem'),(43,'Can delete inbound stock item',11,'delete_inboundstockitem'),(44,'Can view inbound stock item',11,'view_inboundstockitem'),(45,'Can add inbound stock',12,'add_inboundstock'),(46,'Can change inbound stock',12,'change_inboundstock'),(47,'Can delete inbound stock',12,'delete_inboundstock'),(48,'Can view inbound stock',12,'view_inboundstock'),(49,'Can add outbound stock item',13,'add_outboundstockitem'),(50,'Can change outbound stock item',13,'change_outboundstockitem'),(51,'Can delete outbound stock item',13,'delete_outboundstockitem'),(52,'Can view outbound stock item',13,'view_outboundstockitem'),(53,'Can add outbound stock',14,'add_outboundstock'),(54,'Can change outbound stock',14,'change_outboundstock'),(55,'Can delete outbound stock',14,'delete_outboundstock'),(56,'Can view outbound stock',14,'view_outboundstock'),(57,'Can add account',15,'add_account'),(58,'Can change account',15,'change_account'),(59,'Can delete account',15,'delete_account'),(60,'Can view account',15,'view_account'),(61,'Can add customer',16,'add_customer'),(62,'Can change customer',16,'change_customer'),(63,'Can delete customer',16,'delete_customer'),(64,'Can view customer',16,'view_customer'),(65,'Can add order',17,'add_order'),(66,'Can change order',17,'change_order'),(67,'Can delete order',17,'delete_order'),(68,'Can view order',17,'view_order'),(69,'Can add order details',18,'add_orderdetails'),(70,'Can change order details',18,'change_orderdetails'),(71,'Can delete order details',18,'delete_orderdetails'),(72,'Can view order details',18,'view_orderdetails'),(73,'Can add order tracking',19,'add_ordertracking'),(74,'Can change order tracking',19,'change_ordertracking'),(75,'Can delete order tracking',19,'delete_ordertracking'),(76,'Can view order tracking',19,'view_ordertracking'),(77,'Can add payment',20,'add_payment'),(78,'Can change payment',20,'change_payment'),(79,'Can delete payment',20,'delete_payment'),(80,'Can view payment',20,'view_payment');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$720000$yY3CgY181NJgSobg9QBIoC$RCiYZ0NzsBrPokt+7r5KUw+XTmK4jclNMGDU6+dw/4s=',NULL,0,'123','','','',0,1,'2024-12-03 11:17:31.345176');
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
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(15,'api','account'),(16,'api','customer'),(10,'api','employee'),(12,'api','inboundstock'),(11,'api','inboundstockitem'),(8,'api','inventory'),(17,'api','order'),(18,'api','orderdetails'),(19,'api','ordertracking'),(14,'api','outboundstock'),(13,'api','outboundstockitem'),(20,'api','payment'),(7,'api','product'),(9,'api','supplier'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-10-22 02:35:59.664585'),(2,'auth','0001_initial','2024-10-22 02:36:00.060373'),(3,'admin','0001_initial','2024-10-22 02:36:00.159046'),(4,'admin','0002_logentry_remove_auto_add','2024-10-22 02:36:00.164243'),(5,'admin','0003_logentry_add_action_flag_choices','2024-10-22 02:36:00.169059'),(6,'api','0001_initial','2024-10-22 02:36:00.222898'),(7,'api','0002_product','2024-10-22 02:36:00.234887'),(8,'api','0003_product_brand_product_description_product_status_and_more','2024-10-22 02:36:00.297248'),(9,'api','0004_inventory_delete_note','2024-10-22 02:36:00.356856'),(10,'api','0005_company_orderdetails','2024-10-22 02:36:00.412256'),(11,'api','0006_order_orderdetails_order','2024-10-22 02:36:00.506694'),(12,'api','0007_alter_orderdetails_order_ordertracking','2024-10-22 02:36:00.625537'),(13,'api','0008_alter_ordertracking_date_cancelled_and_more','2024-10-22 02:36:00.799559'),(14,'api','0009_rename_name_company_company_name_and_more','2024-10-22 02:36:00.899727'),(15,'api','0010_rename_order_details_orderdetails_order','2024-10-22 02:36:00.968620'),(16,'api','0011_rename_type_product_product_type_and_more','2024-10-22 02:36:01.007572'),(17,'api','0012_alter_product_brand_alter_product_description_and_more','2024-10-22 02:36:01.014279'),(18,'api','0013_customer_alter_product_price','2024-10-22 02:36:01.028288'),(19,'api','0014_remove_customer_email','2024-10-22 02:36:01.038462'),(20,'api','0015_alter_inventory_stock_and_more','2024-10-22 02:36:01.208419'),(21,'api','0016_employee','2024-10-22 02:36:01.220685'),(22,'api','0017_supplier_remove_employee_employee_name_and_more','2024-10-22 02:36:01.283990'),(23,'api','0018_inboundstock','2024-10-22 02:36:01.380919'),(24,'api','0019_inventory_stock_maximum_threshold','2024-10-22 02:36:01.432469'),(25,'api','0020_remove_inboundstock_inventory_and_more','2024-10-22 02:36:01.673949'),(26,'api','0021_rename_company_account_and_more','2024-10-22 02:36:01.816821'),(27,'api','0022_remove_inventory_stock_maximum_threshold','2024-10-22 02:36:01.830848'),(28,'api','0023_customer_is_deleted','2024-10-22 02:36:01.846205'),(29,'api','0024_account_is_deleted','2024-10-22 02:36:01.866301'),(30,'api','0025_rename_customer_walk_in_name_order_account_name_and_more','2024-10-22 02:36:02.036655'),(31,'api','0026_order_employee_order_employee_first_name_and_more','2024-10-22 02:36:02.132880'),(32,'api','0027_alter_order_account_alter_order_account_name_and_more','2024-10-22 02:36:02.341311'),(33,'api','0028_alter_order_account_alter_order_customer_and_more','2024-10-22 02:36:02.517559'),(34,'api','0029_alter_product_price','2024-10-22 02:36:02.543515'),(35,'api','0030_alter_orderdetails_order','2024-10-22 02:36:02.599914'),(36,'api','0031_alter_inventory_stock_alter_product_brand_and_more','2024-10-22 02:36:02.702583'),(37,'api','0032_alter_account_barangay_alter_account_city_and_more','2024-10-22 02:36:02.858036'),(38,'api','0033_employee_is_deleted_alter_account_account','2024-10-22 02:36:02.903006'),(39,'api','0034_product_is_deleted_alter_employee_barangay_and_more','2024-10-22 02:36:02.934258'),(40,'api','0035_remove_product_is_deleted_inventory_is_deleted_and_more','2024-10-22 02:36:02.967572'),(41,'api','0036_supplier_is_deleted','2024-10-22 02:36:02.984595'),(42,'api','0037_product_is_deleted','2024-10-22 02:36:03.006353'),(43,'api','0038_remove_employee_is_deleted_and_more','2024-10-22 02:36:03.615626'),(44,'api','0039_alter_account_account_alter_account_email_and_more','2024-10-22 02:36:04.339348'),(45,'api','0040_alter_account_phone_number_and_more','2024-10-22 02:36:04.371794'),(46,'api','0041_alter_account_phone_number','2024-10-22 02:36:04.374794'),(47,'api','0042_alter_employee_phone_number','2024-10-22 02:36:04.378786'),(48,'contenttypes','0002_remove_content_type_name','2024-10-22 02:36:04.436458'),(49,'auth','0002_alter_permission_name_max_length','2024-10-22 02:36:04.484254'),(50,'auth','0003_alter_user_email_max_length','2024-10-22 02:36:04.499602'),(51,'auth','0004_alter_user_username_opts','2024-10-22 02:36:04.505601'),(52,'auth','0005_alter_user_last_login_null','2024-10-22 02:36:04.540530'),(53,'auth','0006_require_contenttypes_0002','2024-10-22 02:36:04.542531'),(54,'auth','0007_alter_validators_add_error_messages','2024-10-22 02:36:04.548961'),(55,'auth','0008_alter_user_username_max_length','2024-10-22 02:36:04.596092'),(56,'auth','0009_alter_user_last_name_max_length','2024-10-22 02:36:04.641230'),(57,'auth','0010_alter_group_name_max_length','2024-10-22 02:36:04.653320'),(58,'auth','0011_update_proxy_permissions','2024-10-22 02:36:04.662995'),(59,'auth','0012_alter_user_first_name_max_length','2024-10-22 02:36:04.706461'),(60,'sessions','0001_initial','2024-10-22 02:36:04.727663'),(61,'api','0043_employee_is_deleted_inventory_is_deleted_and_more','2024-10-26 09:51:08.980827'),(62,'api','0044_remove_product_is_deleted','2024-10-26 09:51:08.995918'),(63,'api','0045_alter_account_barangay_alter_account_city_and_more','2024-10-26 09:51:09.924196'),(64,'api','0046_alter_orderdetails_product_name_and_more','2024-10-26 09:51:10.005304'),(65,'api','0047_remove_orderdetails_product_orderdetails_inventory_and_more','2024-10-26 09:51:10.435332'),(66,'api','0048_alter_ordertracking_status','2024-10-26 09:51:10.440086'),(67,'api','0049_remove_ordertracking_order_and_more','2024-10-26 09:51:10.536282'),(68,'api','0050_remove_orderdetails_order_tracking_and_more','2024-10-26 09:51:10.672417'),(69,'api','0051_alter_order_order_tracking','2024-10-26 09:51:10.769338'),(70,'api','0052_alter_order_order_tracking','2024-10-26 09:51:10.891413'),(71,'api','0053_remove_order_order_tracking_ordertracking_order','2024-10-26 09:51:11.008572'),(72,'api','0054_rename_date_packed_ordertracking_date_shipped_and_more','2024-10-26 09:51:11.024674'),(73,'api','0055_invoice','2024-10-27 03:13:37.482146'),(74,'api','0056_delete_invoice','2024-10-27 03:13:37.493146'),(75,'api','0057_invoice','2024-10-27 03:17:17.970777'),(76,'api','0058_alter_invoice_discounted_amount_and_more','2024-10-27 03:22:20.492437'),(77,'api','0059_order_gross_price','2024-11-04 07:29:36.623029'),(78,'api','0055_alter_order_employee_first_name_and_more','2024-11-05 05:04:04.272235'),(79,'api','0059_merge_20241029_1011','2024-11-05 05:04:04.290774'),(80,'api','0002_invoice','2024-11-05 05:31:36.455986'),(81,'api','0003_remove_inboundstockitem_supplier_and_more','2024-11-05 05:44:14.088687'),(82,'api','0004_inboundstock_employee','2024-11-05 06:11:06.559643'),(83,'api','0005_order_barangay_order_city_order_phone_number_and_more','2024-11-05 07:44:07.752410'),(84,'api','0006_order_order_type','2024-11-05 07:47:20.130132'),(85,'api','0007_alter_order_order_type','2024-11-05 07:48:15.550589'),(86,'api','0008_alter_order_account_name_and_more','2024-11-05 07:52:25.263109'),(87,'api','0009_alter_order_account_name_alter_order_barangay_and_more','2024-11-05 07:54:36.568127'),(88,'api','0010_alter_invoice_total_balance','2024-11-05 10:36:58.617081'),(89,'api','0011_remove_inboundstock_inboundstockitems_and_more','2024-11-16 03:05:17.251040'),(90,'api','0012_inboundstock_reference_number_inventory_sku_and_more','2024-11-17 06:59:18.057782'),(91,'api','0013_ordertracking_last_updated','2024-11-17 07:26:54.265799'),(92,'api','0014_payment_delete_invoice','2024-11-17 07:51:59.113792'),(93,'api','0015_alter_payment_payment_method','2024-11-17 08:27:22.893969'),(94,'api','0016_alter_order_account_alter_order_customer_and_more','2024-11-20 15:29:02.331201'),(95,'api','0017_remove_order_customer_alter_customer_phone_number','2024-11-21 01:40:37.663276'),(96,'api','0018_alter_account_account_alter_product_product_name_and_more','2024-11-21 02:14:13.904427'),(97,'api','0019_alter_order_account','2024-11-23 10:47:34.037661'),(98,'api','0020_alter_account_account_alter_order_account','2024-11-23 10:48:58.767628'),(99,'api','0017_alter_customer_phone_number','2024-12-02 07:18:24.301428'),(100,'api','0019_merge_20241121_1417','2024-12-02 07:18:24.313367'),(101,'api','0021_merge_20241129_1906','2024-12-02 07:18:24.318890'),(102,'api','0022_alter_account_account','2024-12-02 07:18:24.325893'),(103,'api','0023_ordertracking_date_recieved','2024-12-02 07:18:24.385300'),(104,'api','0024_rename_date_recieved_ordertracking_date_received','2024-12-02 07:18:24.415686'),(105,'api','0025_order_deduction_order_initial_price','2024-12-02 08:50:24.478885'),(106,'api','0026_rename_initial_price_order_initial_balance','2024-12-02 09:10:12.017171'),(107,'api','0027_rename_discounted_amount_payment_deductions_and_more','2024-12-02 09:22:02.074699'),(108,'api','0028_alter_inboundstock_reference_number_and_more','2024-12-02 09:29:40.715970'),(109,'api','0029_alter_order_reference_number','2024-12-02 09:42:35.342658'),(110,'api','0030_alter_inboundstock_reference_number','2024-12-02 09:44:21.224586'),(111,'api','0031_orderdetails_deductions','2024-12-02 10:25:01.278234'),(112,'api','0032_remove_orderdetails_deductions','2024-12-02 10:30:43.406394'),(113,'api','0033_orderdetails_sku','2024-12-02 12:04:33.714064'),(114,'api','0034_alter_orderdetails_sku','2024-12-02 12:04:33.753901'),(115,'api','0035_alter_orderdetails_sku','2024-12-02 12:04:33.776664'),(116,'api','0036_alter_orderdetails_sku','2024-12-02 12:04:33.880964'),(117,'api','0037_rename_sku_orderdetails_sku_hold','2024-12-02 12:04:33.911069'),(118,'api','0038_alter_inventory_sku','2024-12-02 12:04:33.940926'),(119,'api','0039_alter_inventory_sku','2024-12-02 12:04:33.970828'),(120,'api','0040_remove_orderdetails_sku_hold','2024-12-02 12:08:32.167544'),(121,'api','0041_remove_inventory_sku_product_sku','2024-12-02 12:16:06.615295'),(122,'api','0042_alter_product_sku','2024-12-02 12:16:32.061809'),(123,'api','0043_orderdetails_sku_hold','2024-12-02 12:25:54.469226'),(124,'api','0044_alter_orderdetails_sku_hold','2024-12-02 12:30:30.352475'),(125,'api','0045_outboundstock_outboundstockitem','2024-12-03 02:04:04.875819'),(126,'api','0046_remove_outboundstockitem_inbound_stock_and_more','2024-12-03 02:39:13.202772'),(127,'api','0047_order_deductions','2024-12-03 03:13:48.642116'),(128,'api','0048_payment_reference_number','2024-12-03 09:34:47.618639');
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

-- Dump completed on 2024-12-03 19:43:00
