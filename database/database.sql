CREATE DATABASE prueba_bb;

USE prueba_bb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(45),
    function VARCHAR(45),
    id_boss INT(11),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    constraint boss_fk foreign key (id_boss) references employee (id)
);

-- RENAME TABLE employee to employees;

DESCRIBE employee;
