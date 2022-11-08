DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(100),
    phone_number VARCHAR(100),
    card_number VARCHAR(100),
    roles VARCHAR(100)
);