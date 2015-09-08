/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table workshop_participants
# ------------------------------------------------------------

LOCK TABLES `workshop_participants` WRITE;
/*!40000 ALTER TABLE `workshop_participants` DISABLE KEYS */;

INSERT INTO `workshop_participants` (`id`, `workshop`, `participant`, `recurrent`, `active`)
VALUES
	(1,1,2,1,1),
	(2,1,3,0,1),
	(3,1,4,1,0);

/*!40000 ALTER TABLE `workshop_participants` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table workshops
# ------------------------------------------------------------

LOCK TABLES `workshops` WRITE;
/*!40000 ALTER TABLE `workshops` DISABLE KEYS */;

INSERT INTO `workshops` (`id`, `date`, `start_time`, `end_time`, `teacher`, `type`, `recurrent`, `author`)
VALUES
	(1,'2015-09-08','14:00:00','17:00:00',1,NULL,1,1),
	(2,'2015-09-08','20:00:00','23:00:00',NULL,1,1,1);

/*!40000 ALTER TABLE `workshops` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
