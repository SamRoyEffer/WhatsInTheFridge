DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS fridge CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);


CREATE TABLE "ingredients" (
  "id" SERIAL PRIMARY KEY,
  "api_name" varchar
  
);
CREATE TABLE "fridge" (
  "id" int PRIMARY KEY,
  "ingredient_id" int REFERENCES ingredients(id)
);

CREATE TABLE "recipes" (
  "id" SERIAL PRIMARY KEY,
  "api_recipe_id" int,
  "user_id" int REFERENCES users(id)
);