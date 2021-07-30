//maybe change to get fridgeByUser
const getPostsByUsers = (usersPosts) => {
  const postsByUsers = {};

  for (let post of usersPosts) {
    if (!postsByUsers[post.user_id]) {
      postsByUsers[post.user_id] = {
        userId: post.user_id,
        full_name: post.full_name,
        email: post.email,
        posts: [],
      };
    }

    postsByUsers[post.user_id].posts.push({
      title: post.title,
      content: post.content,
    });
  }

  return Object.values(postsByUsers);
};

module.exports = {
  getPostsByUsers,
};
