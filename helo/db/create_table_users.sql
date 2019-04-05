CREATE TABLE users (
username VARCHAR(10),
password TEXT,
image TEXT,
id SERIAL PRIMARY KEY
)

INSERT INTO users (
username,
password,
image,
id
)

VALUES (
'username1',
'password1',
'image1',
1
),
 (
'username1',
'password1',
'image1',
2
),
 (
'username1',
'password1',
'image1',
3
)