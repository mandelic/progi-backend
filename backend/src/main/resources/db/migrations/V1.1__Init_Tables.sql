DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(100),
    phone_number VARCHAR(15),
    card_number VARCHAR(16),
    roles VARCHAR(100)
);