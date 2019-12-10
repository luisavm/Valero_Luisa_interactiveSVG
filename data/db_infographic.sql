-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2019 at 10:19 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_elephants`
--

CREATE TABLE `tbl_elephants` (
  `ID` int(11) NOT NULL,
  `poe` varchar(30) NOT NULL,
  `year` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_elephants`
--

INSERT INTO `tbl_elephants` (`ID`, `poe`, `year`) VALUES
(1, '10,000,000', 'In 1930'),
(2, '415,000', 'In 2018');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_killing`
--

CREATE TABLE `tbl_killing` (
  `ID` int(11) NOT NULL,
  `killing` varchar(50) NOT NULL,
  `year` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_killing`
--

INSERT INTO `tbl_killing` (`ID`, `killing`, `year`) VALUES
(1, '+ than 35,000', 'In 2013'),
(2, '20,000', 'In 2015'),
(3, '9', 'In 2014'),
(4, '87', 'In 2018');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_elephants`
--
ALTER TABLE `tbl_elephants`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_killing`
--
ALTER TABLE `tbl_killing`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_elephants`
--
ALTER TABLE `tbl_elephants`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_killing`
--
ALTER TABLE `tbl_killing`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
