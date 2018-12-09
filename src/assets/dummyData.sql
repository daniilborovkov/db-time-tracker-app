-- Table with tags
create table IF NOT EXISTS tags(id integer primary key AUTOINCREMENT, name varchar(256), color varchar(128));

-- Table with time meters
create table IF NOT EXISTS time_meters(id integer primary key AUTOINCREMENT, start_time datetime NOT NULL, duration integer NOT NULL);

-- Time meters to tags
create table if not exists tags_to_meter(id integer primary key autoincrement, tag_id integer not null, meter_id integer not null);