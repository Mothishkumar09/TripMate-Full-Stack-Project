use tripmate;
show tables;
select * from users;
select * from user_activity;
CREATE TABLE user_activity (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    trip_place VARCHAR(255),
    start_date VARCHAR(50),
    end_date VARCHAR(50),
    budget DOUBLE,
    saved_date VARCHAR(20),
    saved_time VARCHAR(20)
);
