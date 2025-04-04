/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Base de datos del examen diagnóstico ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

CREATE DATABASE tagsPLC;
USE tagsPLC;

/* DDL - Tables */

    /* Strong table(s) */

        CREATE TABLE Devices(
            ID INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,

            name VARCHAR(15),
            description TEXT,
            type ENUM('Sensor', 'Actuador', 'Controlador') DEFAULT 'Sensor',
            model VARCHAR(15),
            status ENUM('Activo', 'Inactivo', 'Mantenimiento') DEFAULT 'Activo',
        ) ENGINE=INNODB CHARSET=UTF8MB4;


    /* Weak table(s) */

        CREATE TABLE Tag(
            ID_Device INT(3), INDEX(ID_Device), FOREIGN KEY (ID_Device) REFERENCES Devices(ID) ON UPDATE CASCADE ON DELETE RESTRICT,
            ID INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            
            name VARCHAR(15),
            description TEXT,
            address VARCHAR(4)
            scale FLOAT(2),
            scanRate FLOAT(4),
            value FLOAT(4)
        ) ENGINE=INNODB CHARSET=UTF8MB4;

        SHOW TABLES;

/* DML - Transactions (CRUD) */

    /* Insertions */

        /* Devices insertions */
            INSERT INTO Devices (studentName, studentPassword) VALUES
            ("Arenita", MD5(111)),
            ("Bob", MD5(222));

        /* Tag insertions */
            INSERT INTO Tag (tutorName, tutorPassword) VALUES
            ("Jirafales", MD5(333)),
            ("Canuta", MD5(444));

        /* Date insertions */
            INSERT INTO Date (ID_Student, ID_Tutor, dateDay, dateHour, dateSubject) VALUES
            (1, 1, "Lune", "10:00", "Junta"),
            (2, 2, "Jueve", "12:00", "Expulsion");

            SELECT * FROM Date;