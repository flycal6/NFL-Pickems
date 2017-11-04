-- Create database
DROP DATABASE IF EXISTS nfldb;
CREATE DATABASE nfldb;
USE nfldb;

-- Add user
-- Uncomment the lines below as needed
-- DROP USER 'nfl'@'localhost';
-- CREATE USER 'nfl'@'localhost' IDENTIFIED BY 'nfl';
-- GRANT ALL PRIVILEGES ON nfldb.* TO 'nfl'@'localhost';

--  Build tables
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `points` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `user` (email,password, fName, lName, points) VALUES ('admin@admin.com', 'admin', 'Bob' , 'Bobbers', 100);
INSERT INTO `user` (email,password, fName, lName, points) VALUES ('a@a.com', 'pass', 'Joe' , 'Jones', 100);
INSERT INTO `user` (email,password, fName, lName, points) VALUES ('b@b.com', 'pass', 'Sue' , 'Smith', 100);

DROP TABLE IF EXISTS `week`;
CREATE TABLE `week`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `gameWeek` int(4) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `week` (date, gameWeek) VALUES ('2017-09-05',1);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-09-12',2);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-09-19',3);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-09-26',4);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-10-03',5);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-10-10',6);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-10-17',7);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-10-24',8);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-10-31',9);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-11-07',10);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-11-14',11);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-11-21',12);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-11-28',13);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-12-05',14);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-12-12',15);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-12-19',16);
INSERT INTO `week` (date, gameWeek) VALUES ('2017-12-26',17);

DROP TABLE IF EXISTS `league`;
CREATE TABLE `league`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isPublic`  tinyint(1) DEFAULT 0 NOT NULL,
  `name` varchar(100) NOT NULL,
  `cost` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `league` (isPublic, name, cost) VALUES (0, 'test league', 10.00);
INSERT INTO `league` (isPublic, name, cost) VALUES (1, 'test2 league', 10.00);

DROP TABLE IF EXISTS `user_league`;
CREATE TABLE `user_league`(
  `userId` int(11) NOT NULL,
  `leagueId` int(11) NOT NULL,
  FOREIGN KEY (`userId`)
    REFERENCES `user` (`id`),
  FOREIGN KEY (`leagueId`)
    REFERENCES `league` (`id`)
);

DROP TABLE IF EXISTS `league_week`;
CREATE TABLE `league_week`(
  `leagueId` int(11) NOT NULL,
  `weekId` int(11) NOT NULL,
  FOREIGN KEY (`weekId`)
    REFERENCES `week` (`id`),
  FOREIGN KEY (`leagueId`)
    REFERENCES `league` (`id`)
);

DROP TABLE IF EXISTS `team`;
CREATE TABLE `team`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name`  varchar(150) NOT NULL,
  `abbr`  varchar(10) NOT NULL,
  `city`  varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `team` (`id`, `name`, `abbr`, `city`) VALUES
(1, 'Cardinals', 'ARI', 'Arizona'),
(2, 'Falcons', 'ATL', 'Atlanta'),
(3, 'Ravens', 'BAL', 'Baltimore'),
(4, 'Bills', 'BUF', 'Buffalo'),
(5, 'Panthers', 'CAR', 'Carolina'),
(6, 'Bears', 'CHI', 'Chicago'),
(7, 'Bengals', 'CIN', 'Cincinnati'),
(8, 'Browns', 'CLE', 'Cleveland'),
(9, 'Cowboys', 'DAL', 'Dallas'),
(10, 'Broncos', 'DEN', 'Denver'),
(11, 'Lions', 'DET', 'Detroit'),
(12, 'Packers', 'GB', 'Green Bay'),
(13, 'Texans', 'HOU', 'Houston'),
(14, 'Colts', 'IND', 'Indianapolis'),
(15, 'Jaguars', 'JAC', 'Jacksonville'),
(16, 'Chiefs', 'KC', 'Kansas City'),
(17, 'Dolphins', 'MIA', 'Miami'),
(18, 'Vikings', 'MIN', 'Minnesota'),
(19, 'Patriots', 'NE', 'New England'),
(20, 'Saints', 'NO', 'New Orleans'),
(21, 'Giants', 'NYG', 'NY'),
(22, 'Jets', 'NYJ', 'NY'),
(23, 'Raiders', 'OAK', 'Oakland'),
(24, 'Eagles', 'PHI', 'Philadelphia'),
(25, 'Steelers', 'PIT', 'Pittsburgh'),
(26, 'Chargers', 'LAC', 'Los Angeles'),
(27, '49ers', 'SF', 'San Francisco'),
(28, 'Seahawks', 'SEA', 'Seattle'),
(29, 'Rams', 'LA', 'Los Angeles'),
(30, 'Buccaneers', 'TB', 'Tampa Bay'),
(31, 'Titans', 'TEN', 'Tennessee'),
(32, 'Redskins', 'WAS', 'Washington');

DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `homeId`  int(11) NOT NULL,
  `awayId`  int(11) NOT NULL,
  `weekId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`weekId`)
    REFERENCES `week` (`id`),
  FOREIGN KEY (`homeId`)
    REFERENCES `team` (`id`),
  FOREIGN KEY (`awayId`)
    REFERENCES `team` (`id`)
);

INSERT INTO `game` (homeId, awayId, weekId) VALUES (1,2,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (3,4,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (5,6,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (7,8,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (9,10,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (11,12,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (13,14,1);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (2,3,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (4,5,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (6,7,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (8,9,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (10,11,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (12,13,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (14,15,2);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (16,17,3);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (18,19,3);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (20,21,3);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (22,23,3);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (24,25,3);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (26,27,3);
INSERT INTO `game` (homeId, awayId, weekId) VALUES (28,29,3);


DROP TABLE IF EXISTS `pick`;
CREATE TABLE `pick` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teamId`  int(11) NOT NULL,
  `userId`  int(11) NOT NULL,
  `isCorrect` tinyint(1),
  `gameId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`teamId`)
    REFERENCES `team` (`id`),
  FOREIGN KEY (`userId`)
    REFERENCES `user` (`id`),
  FOREIGN KEY (`gameId`)
    REFERENCES `game` (`id`)
);

INSERT INTO `pick` (userId, teamId, gameId) VALUES (1,1,1);

DROP TABLE IF EXISTS `result`;
CREATE TABLE `result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameId` int(11) NOT NULL,
  `homeScore` int(5) NOT NULL,
  `awayScore` int(5) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`gameId`)
    REFERENCES `game` (`id`)
);

INSERT INTO `result` (gameId, homeScore, awayScore) VALUES (1,13,20);
