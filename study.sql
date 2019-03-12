---- db: -h localhost -p 5433 -U postgres studybase
----
CREATE TABLE users (
user_id integer NOT NULL,
login varchar NOT NULL,
password varchar NOT NULL,
isadmin boolean NOT NULL,
taskid integer[], PRIMARY KEY(user_id) );
----
INSERT INTO users VALUES (2134, 'admin', 'admin', true);
----
SELECT * FROM users
WHERE isadmin = false;
----
CREATE TABLE tasks (
title varchar NOT NULL,
id integer NOT NULL,
text jsonb);
----
INSERT INTO tasks VALUES('Энергия', 1, '{"text": "Тела 1 и 2 взаимодействуют только друг с другом. Изменение кинетической энергии тела 2 за некоторый промежуток времени равно 10 Дж. Работа, которую совершили за этот же промежуток времени силы взаимодействия тел 1 и 2, равна 30 Дж. Чему равно изменение кинетической энергии тела 1 за это время? (Ответ дайте в джоулях.)"}'::jsonb);
----
SELECT jsonb_pretty(text) FROM tasks;
----
SELECT id FROM tasks;
----
INSERT INTO tasks VALUES('Кинематика', 14, '{"text": "Теплоход плывет по реке из точки А в точку Б в течение 3 часов, а обратно — в течение 5 часов. Собственная скорость теплохода одинакова в обоих случаях. За какое время из точки А в точку Б доплывет плот?"}'::jsonb)
----
----
