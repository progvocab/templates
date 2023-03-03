SHOW DATABASES;
USE progvocab;

CREATE TABLE progvocab.Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);


 

INSERT INTO progvocab.Persons (PersonID, FirstName, LastName, Address, City )
VALUES ('Cardinal', 'Tom B.', 'Erichsen', 'Skagen 21',  'Norway');

select * from progvocab.Persons;


delete from progvocab.Persons 
where personid in ( select personid from progvocab.Persons where personid = '1 )
                   
select * from 
                (   select FirstName, LastName from  progvocab.Persons )
where FirstName = 'Tom B.'
