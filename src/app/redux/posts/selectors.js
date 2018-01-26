export const addUserToPost = (users, posts) => {
  if(users && posts) {
    const userLookup = users.reduce((userLookup, user) => {
      userLookup[user.id] = user.name;
      return userLookup;
    }, {});
  
    const updatedPosts = posts.map((post) => {
      post.author = userLookup[post.userId] ? userLookup[post.userId] : 'Anonymous';
      return post;
    })
  
    return updatedPosts
  }
}