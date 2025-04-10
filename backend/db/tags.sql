CREATE DATABASE tagsPLC;
USE tagsPLC;

/* DDL - Tables */

    /* Strong table(s) */

        -- Data given by Toman
        CREATE TABLE Devices(
            ID INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,

            name VARCHAR(15),
            status ENUM('Activo', 'Inactivo', 'Mantenimiento') DEFAULT 'Activo',
            
            ID_Model INT(3), INDEX(ID_Model), FOREIGN KEY (ID_Model) REFERENCES deviceModel(ID) ON UPDATE CASCADE ON DELETE RESTRICT,
        ) ENGINE=INNODB CHARSET=UTF8MB4;

/*
mAh:
Longitud:
Nombre
No serie
Compañía
Bool de lectura

Medidor
	Cantidad
	Conteo (suma de antes -> i++)

PowerBridge Céntrica
Báscula
Sensor de flujo Keyence
Sensor de gas EDC (coloquial)
Cámara COGNEXx
*/

 SELECT * FROM  TABLE;

    /* Weak table(s) */
    
        -- Technical Data
        CREATE TABLE DeviceModel(
            ID INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,

            name
            model VARCHAR(25),
            description TEXT,
            type ENUM('Sensor', 'Actuador', 'Controlador') DEFAULT 'Sensor',
        ) ENGINE=INNODB CHARSET=UTF8MB4;

        CREATE TABLE Tag(
            ID_Device INT(3), INDEX(ID_Device), FOREIGN KEY (ID_Device) REFERENCES Devices(ID) ON UPDATE CASCADE ON DELETE RESTRICT,
            ID INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            
            name VARCHAR(15),
            description TEXT,
            address VARCHAR(4)
            scale FLOAT(2),
            rate FLOAT(4),
            value FLOAT(4)
        ) ENGINE=INNODB CHARSET=UTF8MB4;

        SHOW TABLES;

/* DML - Transactions (CRUD) */

    /* Insertions */

        /* Devices insertions */
            INSERT INTO Devices (name, description, model) VALUES
            ("Bridge", MD5(111)),
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