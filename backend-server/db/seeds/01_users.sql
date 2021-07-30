DELETE FROM users;

INSERT INTO
users(full_name, email, password)
VALUES
    ('Mario Bros', 'mario@nintendo.com', 'mushroom'),
    ('Luigi Bros', 'luigi@nintendo.com', 'mansion'),
    (
        'Princess Peach',
        'peach@nintendo.com',
        'toad'
    ),
    (
        'Princess Daisy',
        'daisy@nintendo.com',
        'luigi'
    ),
    ('Donkey Kong', 'donkey@nintendo.com', 'diddy');