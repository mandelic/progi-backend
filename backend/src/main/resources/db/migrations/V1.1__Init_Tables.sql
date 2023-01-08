DROP TABLE IF EXISTS list_member;
DROP TABLE IF EXISTS dc_grade;
DROP TABLE IF EXISTS news_author;
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS columns;
DROP TABLE IF EXISTS ranked_list;
DROP TABLE IF EXISTS tournament_members;
DROP TABLE IF EXISTS training_member;
DROP TABLE IF EXISTS training;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tournament;
DROP TABLE IF EXISTS daily_challenge;
DROP TABLE IF EXISTS daily_challenge_error;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(150),
    phone_number VARCHAR(20),
    card_number VARCHAR(25),
    list_id INTEGER,
    role VARCHAR(100)
);

CREATE TABLE columns
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100)
);


CREATE TABLE news
(
    id SERIAL PRIMARY KEY,
    date DATE,
    title VARCHAR(200),
    content TEXT,
    visible BOOLEAN,
    column_id INTEGER,
    author_id INTEGER
);

CREATE TABLE ranked_list
(
    id SERIAL PRIMARY KEY,
    points INTEGER,
    member INTEGER
);

CREATE TABLE tournament
(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    title VARCHAR(100),
    location VARCHAR(200),
    visible BOOLEAN,
    coach_id INTEGER
);

CREATE TABLE tournament_members
(
    tournament_id INTEGER,
    member_id INTEGER,
    CONSTRAINT tournament_member_pk PRIMARY KEY(member_id, tournament_id),
    CONSTRAINT member_fk FOREIGN KEY (member_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT tournament_fk FOREIGN KEY (tournament_id) REFERENCES tournament(id) ON DELETE CASCADE
);

CREATE TABLE transactions
(
    id SERIAL PRIMARY KEY,
    month VARCHAR(100),
    year VARCHAR(4),
    price INTEGER,
    member_id INTEGER
);

CREATE TABLE training
(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    location VARCHAR(200),
    visible BOOLEAN,
    duration INTEGER,
    coach_id INTEGER
);

CREATE TABLE training_member
(
    training_id INTEGER,
    member_id INTEGER,
    CONSTRAINT training_member_pk PRIMARY KEY(member_id, training_id),
    CONSTRAINT member_fk FOREIGN KEY (member_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT training_fk FOREIGN KEY (training_id) REFERENCES training(id) ON DELETE CASCADE
);

CREATE TABLE daily_challenge
(
    id SERIAL PRIMARY KEY,
    date DATE,
    grade FLOAT,
    num_of_grades INTEGER,
    assignment_number INTEGER,
    visible BOOLEAN,
    coach_id INTEGER
);

CREATE TABLE dc_grade
(
    id SERIAL PRIMARY KEY,
    points INTEGER,
    solution VARCHAR(10),
    bonus BOOLEAN,
    member_id INTEGER,
    daily_challenge_id INTEGER
);

CREATE TABLE daily_challenge_error
(
    id SERIAL PRIMARY KEY,
    solution VARCHAR(10),
    description TEXT,
    checked BOOLEAN,
    valid BOOLEAN,
    member_id INTEGER,
    daily_challenge_id INTEGER
);