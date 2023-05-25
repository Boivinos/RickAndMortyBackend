DROP DATABASE IF EXISTS `rick_and_morty`;
CREATE DATABASE `rick_and_morty`;
USE `rick_and_morty`;


DROP DATABASE IF EXISTS `rick_character`;
CREATE TABLE `rick_character` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `created` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO `rick_character` VALUES 
(1,'Rick Sanchez','Alive','Earth','2017-11-04T18:48:46.250Z', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'),
(2,'Morty Smith','Alive','Earth','2017-11-04T18:50:21.651Z', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'),
(3,'Summer Smith','Alive','Earth','2017-11-04T19:09:56.428Z', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'),
(4,'Beth Smith','Alive','Earth','2017-11-04T19:22:43.665Z', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg');