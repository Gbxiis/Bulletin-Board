module.exports = {
  posts: [],
  getAll() {
    return this.posts;
  },
  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },
  removePost(title, description) {
    this.posts = this.posts.filter(
      (post) => post.title !== title || post.description !== description
    );
  },
};

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}
