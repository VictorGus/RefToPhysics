---- db: -h localhost -p 5433 -U postgres studybase
----
CREATE TABLE users (
user_id integer NOT NULL,
login varchar NOT NULL,
password varchar NOT NULL,
isadmin boolean NOT NULL,
solvedtasks jsonb[], PRIMARY KEY(user_id) );
----
INSERT INTO users VALUES (2134, 'admin', 'admin', true);
----
SELECT * FROM users
WHERE isadmin = false;
----
----
