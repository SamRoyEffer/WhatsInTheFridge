module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmailAndPassword = (email, password) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1 AND password = $2`,
      values: [email, password],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (full_name, email, password) => {
    const query = {
      text: `INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      values: [full_name, email, password],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //change to getUsersItems or Food
  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, full_name, email, posts.id as post_id, title, content
      FROM users
      INNER JOIN posts
      ON users.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const saveUsersIngredients = (api_id, fridge_id) => {
    const query = {
      text: `INSERT INTO ingredients (api_id, fridge_id) VALUES ($1, $2)`,
      values: [api_id, fridge_id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmailAndPassword,
    addUser,
    getUsersPosts,
    saveUsersIngredients,
  };
};
