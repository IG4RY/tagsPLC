/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Base de datos del examen diagnóstico ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

CREATE DATABASE tagsPLC;
USE tagsPLC;

/* DDL - Tables */

    /* Strong tables */

        CREATE TABLE Devices
        (
            ID_Device INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,

            tutorName VARCHAR(30),
            tutorPassword BLOB
        ) ENGINE=INNODB CHARSET=UTF8MB4;

        CREATE TABLE Student
        (
            ID_Student INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,

            studentName VARCHAR(30),
            studentPassword BLOB
        ) ENGINE=INNODB CHARSET=UTF8MB4;


    /* Weak tables */

        CREATE TABLE Date
        (
            ID_Date INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,

            ID_Student INT(11), INDEX(ID_Student),
            FOREIGN KEY (ID_Student) REFERENCES Student(ID_Student) ON UPDATE CASCADE ON DELETE RESTRICT,

            ID_Tutor INT(11), INDEX(ID_Tutor),
            FOREIGN KEY (ID_Tutor) REFERENCES Tutor(ID_Tutor) ON UPDATE CASCADE ON DELETE RESTRICT,

            dateDay VARCHAR(9),
            dateHour VARCHAR(5),
            dateSubject VARCHAR(60)
        ) ENGINE=INNODB CHARSET=UTF8MB4;

        SHOW TABLES;

/* DML - Transactions (CRUD) */

    /* Insertions */

        /* Students insertions */
            INSERT INTO Student (studentName, studentPassword) VALUES
            ("Arenita", MD5(111)),
            ("Bob", MD5(222));

        /* Tutor insertions */
            INSERT INTO Tutor (tutorName, tutorPassword) VALUES
            ("Jirafales", MD5(333)),
            ("Canuta", MD5(444));

        /* Date insertions */
            INSERT INTO Date (ID_Student, ID_Tutor, dateDay, dateHour, dateSubject) VALUES
            (1, 1, "Lune", "10:00", "Junta"),
            (2, 2, "Jueve", "12:00", "Expulsion");

            SELECT * FROM Date;