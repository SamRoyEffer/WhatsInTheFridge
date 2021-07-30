DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS fridge CASCADE;
DROP TABLE IF EXISTS ingredients CADE;
DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "email" varchar,
  "password" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "fridge" (
  "id" int PRIMARY KEY,
  "user_id" int
);

CREATE TABLE "ingredients" (
  "id" SERIAL PRIMARY KEY,
  "api_id" int,
  "fridge_id" int
);

CREATE TABLE "recipes" (
  "id" SERIAL PRIMARY KEY,
  "api_recipe_id" int,
  "user_id" int
);

ALTER TABLE "fridge" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "ingredients" ADD FOREIGN KEY ("fridge_id") REFERENCES "fridge" ("id");

ALTER TABLE "recipes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

