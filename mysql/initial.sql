SHOW DATABASES;
USE sql6590431;

CREATE TABLE sql6590431.Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);


use sql6590431;

INSERT INTO sql6590431.Persons (PersonID, FirstName, LastName, Address, City )
VALUES ('Cardinal', 'Tom B.', 'Erichsen', 'Skagen 21',  'Norway');

select * from sql6590431.Persons;