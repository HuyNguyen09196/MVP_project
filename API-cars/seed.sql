DROP TABLE IF EXISTS brand CASCADE;
DROP TABLE IF EXISTS cars ;
DROP TABLE IF EXISTS build ;
DROP TABLE IF EXISTS contact;
CREATE TABLE brand (
    id SERIAL ,
    PRIMARY KEY(id),
    name text,
    country varchar(25),
    img text
);
CREATE TABLE cars (
    id SERIAL NOT NULL ,
    name varchar(100),
    model varchar(100),
    type varchar(25),
    color varchar(25),
    year int,
    price text,
    img text,
    brand_id integer,
    FOREIGN KEY(brand_id)
    REFERENCES brand(id)ON DELETE CASCADE

);
CREATE TABLE build (
    id SERIAL NOT NULL ,
    brand varchar(100),
    model varchar(100),
    type varchar(25),
    color varchar(25),
    year int,
    img text,
    brand_id integer,
    FOREIGN KEY(brand_id)
    REFERENCES brand(id)ON DELETE CASCADE

);
CREATE TABLE contact (
    phone text,
    email text,
    address text
)