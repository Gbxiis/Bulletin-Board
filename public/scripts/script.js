document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});
function updatePosts() {
  fetch("http://localhost:5000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";
      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElement = `<div id=${post.id} class="card mb-4">
                              <div class="card-header bg-dark text-white">
                                <h4 class="card-title">${post.title}</h4>
                              </div>
                              <div class="card-body">
                                <div class="card-text">${post.description}</div>
                              </div>
                           </div>`;
        postElements += postElement;
      });
      document.getElementById("posts").innerHTML = postElements;
    });
}

function newPost() {}
  
