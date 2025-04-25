CREATE DATABASE IF NOT EXISTS `riesgo_crediticio`;
USE `riesgo_crediticio`;

CREATE TABLE `risk_levels` (
  `risk_level_id` INT AUTO_INCREMENT PRIMARY KEY,
  `risk_level` VARCHAR(10)
);

CREATE TABLE `risk_assessments` (
  `risk_assessment_id` INT AUTO_INCREMENT PRIMARY KEY,
  `application_id` INT,
  `risk_level_id` INT,
  `assessment_date` DATE,
  `score` FLOAT,
  FOREIGN KEY (`risk_level_id`) REFERENCES `risk_levels`(`risk_level_id`)
);

CREATE TABLE `document_types` (
  `document_type_id` INT AUTO_INCREMENT PRIMARY KEY,
  `type` VARCHAR(20)
);

CREATE TABLE `roles` (
  `role_id` INT AUTO_INCREMENT PRIMARY KEY,
  `role_name` VARCHAR(15)
);

CREATE TABLE `people` (
  `person_id` INT PRIMARY KEY,
  `document_type_id` INT,
  `role_id` INT,
  `first_name` VARCHAR(50),
  `last_name` VARCHAR(50),
  `phone` VARCHAR(20),
  `email` VARCHAR(50),
  `address` VARCHAR(150),
  FOREIGN KEY (`document_type_id`) REFERENCES `document_types`(`document_type_id`),
  FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`)
);

CREATE TABLE `application_statuses` (
  `status_id` INT AUTO_INCREMENT PRIMARY KEY,
  `status_name` VARCHAR(30)
);

CREATE TABLE `applications` (
  `application_id` INT AUTO_INCREMENT PRIMARY KEY,
  `person_id` INT,
  `status_id` INT,
  `requested_amount` DECIMAL(10, 0),
  `application_date` DATE,
  FOREIGN KEY (`person_id`) REFERENCES `people`(`person_id`),
  FOREIGN KEY (`status_id`) REFERENCES `application_statuses`(`status_id`)
);

CREATE TABLE `contract_types` (
  `contract_type_id` INT AUTO_INCREMENT PRIMARY KEY,
  `contract_name` VARCHAR(20)
);

CREATE TABLE `jobs` (
  `job_id` INT AUTO_INCREMENT PRIMARY KEY,
  `contract_type_id` INT,
  `person_id` INT,
  `company` VARCHAR(100),
  `position` VARCHAR(100),
  `start_date` DATE,
  `end_date` DATE,
  `salary` DECIMAL(10, 0),
  FOREIGN KEY (`contract_type_id`) REFERENCES `contract_types`(`contract_type_id`),
  FOREIGN KEY (`person_id`) REFERENCES `people`(`person_id`)
);

CREATE TABLE `credit_history` (
  `credit_history_id` INT AUTO_INCREMENT PRIMARY KEY,
  `person_id` INT,
  `days_in_arrears` INT,
  `total_credits` INT,
  `defaulted_credits` INT,
  FOREIGN KEY (`person_id`) REFERENCES `people`(`person_id`)
);

CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(25),
  `password` VARCHAR(10)
);

CREATE TABLE `financial_information` (
  `financial_info_id` INT AUTO_INCREMENT PRIMARY KEY,
  `person_id` INT,
  `job_id` INT,
  `monthly_income` DECIMAL(10, 0),
  `monthly_expenses` DECIMAL(10, 0),
  `debts` DECIMAL(10, 0),
  `assets` DECIMAL(10, 0),
  `last_updated` DATE,
  FOREIGN KEY (`person_id`) REFERENCES `people`(`person_id`)
);

INSERT INTO `users` (`username`, `password`) VALUES
('admin', 'admin'),
('alex', 'alex'),
('harold', 'harold123'),
('santiago', 'santiago*'),
('laura', 'laura123*'),
('sebastian', 'Sebastian*'),
('camila', 'camila123'),
('juan', 'juan+'),
('paula', 'paula'),
('daniela', 'daniela123');