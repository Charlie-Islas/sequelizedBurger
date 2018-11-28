DROP DATABASE IF EXISTS sequelizedBurgers_db;
CREATE DATABASE sequelizedBurgers_db;
USE sequelizedBurgers_db;


CREATE TABLE burgers (
id INT AUTO_INCREMENT,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);

SELECT * FROM burgers;
