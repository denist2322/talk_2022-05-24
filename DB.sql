/*
SQLyog Community v13.1.8 (64 bit)
MySQL - 10.4.24-MariaDB 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `todo` (
	`id` int (10),
	`regDate` datetime ,
	`talk` varchar (900),
	`name` varchar (180),
	`hit` int (10),
	`like` int (10),
	`dislike` int (10)
); 
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('1','2022-05-24 09:48:40','눈물 흘리지 마라, 화내지 마라. 이해하라.','바뤼흐 스피노자','5','4','4');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('2','2022-05-24 09:48:40','허물이 있다면, 버리기를 두려워 말라','공자','9','7','7');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('3','2022-05-24 09:48:40','모든 국가는 그에 걸맞은 정부를 가진다.','조제프 드 메스트르','6','4','4');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('4','2022-05-24 09:48:40','관찰하는데 있어서는 준비된 자에게만 기회가 온다.','루이 파스퇴르','5','3','3');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('5','2022-05-24 09:48:40','국민을 비굴하게 만드는 정치가 가장 나쁜 정치다.','마하트마 간디','9','7','7');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('6','2022-05-24 09:48:40','끝날 때까지는 끝난 게 아니다.','요기 베라','1','0','0');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('7','2022-05-24 09:48:40','나비처럼 날아서 벌처럼 쏜다.','무하마드 알리','5','5','5');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('8','2022-05-24 09:48:40','나를 죽일 수는 있어도 정의를 죽일 수는 없다.','오스카 로메로','7','5','5');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('9','2022-05-24 09:48:40','말할 수 없는 것에 대해서는 침묵해야 한다.','루드비히 비트겐슈타인','6','2','2');
insert into `todo` (`id`, `regDate`, `talk`, `name`, `hit`, `like`, `dislike`) values('10','2022-05-24 09:48:40','모든 단점은, 장점이 될 수 있다.','리오넬 메시','5','3','3');

UPDATE todo SET `like` = 0, dislike = 0, hit = 0;
SELECT * FROM todo;
