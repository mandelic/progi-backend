INSERT INTO users(email, first_name, last_name, password, phone_number, card_number, list_id, role)
VALUES (
        'admin',
        'admin',
        'admin',
        '$2a$11$Xhln5JuapOW9Tz51YUL8POiFES.GgOiVpcuI2raFj6sQcAxV4GdjW', /* admin */
        '0919999555',
        '48485555544444',
        null,
        'ROLE_ADMIN'
       ),(
           'stadic@gmail.com',
           'Sladan',
           'Tadic',
           '$2a$11$tbtVdC.10cWRv5ldNPD8.evxrWYr8rT7RlqipI6Rv7u47a/3LdJF2', /* sensei */
           '0911111222',
           '484855526664',
           null,
           'ROLE_SENSEI'
       ),(
           'fhunski@gmail.com',
           'Fran',
           'Hunski',
           '$2a$11$NFT7gKwxG7dQP.U9RD9dIuMWzFLS/i3m1xDYhDgIhFHKgjxQbMlv2', /* member */
           '0911111222',
           '484855526664',
           null,
           'ROLE_MEMBER'
       ),
        (
        'mroginic@gmail.com',
        'Matija',
        'Roginic',
        '$2a$11$.ly/N0gw8VoaHQP4uO3s1OLT73dObro8dqnyDFvTv86dzXbWPrJNu', /* unpaid */
        '0911111222',
        '484855526664',
        null,
        'ROLE_UNPAID'
        );