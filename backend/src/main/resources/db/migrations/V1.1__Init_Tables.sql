DROP TABLE IF EXISTS users;


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(150),
    phone_number VARCHAR(20),
    card_number VARCHAR(25),
    role VARCHAR(100)
);
