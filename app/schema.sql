-- top-level category: Comics / Drawing / Animation
create table categories (
  id serial primary key,
  name text not null unique
);

-- a series belongs to a category (e.g. "Bonnie Brek" under Comics)
-- nullable-friendly: oneshots don't need a series
create table series (
  id serial primary key,
  category_id int references categories(id) not null,
  name text not null,
  description text,
  created_at timestamp default now()
);

-- the actual pieces: comic pages, art pieces, animation entries
create table items (
  id serial primary key,
  category_id int references categories(id) not null,
  series_id int references series(id),        -- null = oneshot
  title text not null,
  image_url text,                              -- link to file in storage
  page_number int,                              -- only relevant for comic pages
  created_at timestamp default now()
);