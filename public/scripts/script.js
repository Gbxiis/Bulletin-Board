// document.addEventListener("DOMContentLoaded", () => {
//   updatePosts();
// });

// function updatePosts() {
//   fetch("http://192.168.1.8:5000/api/all")
//     .then((res) => {
//       return res.json();
//     })
//     .then((json) => {
//       let postElements = "";
//       let posts = JSON.parse(json);
//       posts.forEach((post) => {
//         let postElement = `<div id=${post.id} class="card mb-4">
//                               <div class="card-header bg-dark text-white d-flex justify-content-between" style = "cursor: pointer">
//                                 <h4 class="card-title">${post.title}</h4>
//                                 <img onclick="removePost()" src="./assets/x_close_icon_143474.png" alt="close post">
//                               </div>
//                               <div class="card-body">
//                                 <div class="card-text">${post.description}</div>
//                               </div>
//                            </div>`;
//         postElements += postElement;
//       });
//       document.getElementById("posts").innerHTML = postElements;
//     });
// }

// function newPost() {
//   let title = document.getElementById("title").value;
//   let description = document.getElementById("desc").value;

//   if (title.trim() === "" || description.trim() === "") {
//     let alert = document.getElementById("alert");
//     alert.style.display = "block";
//     return;
//   }

//   let post = { title, description };

//   const options = {
//     method: "POST",
//     headers: new Headers({ "content-type": "application/json" }),
//     body: JSON.stringify(post),
//   };

//   fetch("http://192.168.1.8:5000/api/new", options).then((res) => {
//     updatePosts();
//     document.getElementById("title").value = "";
//     document.getElementById("desc").value = "";
//   });
// }

// function removeAlert() {
//   let alert = document.getElementById("alert");
//   alert.style.display = "none";}

document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://192.168.1.8:5000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";
      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElement = `<div id=${post.id} class="card mb-4">
                              <div class="card-header bg-dark text-white d-flex justify-content-between" style = "cursor: pointer">
                                <h4 class="card-title">${post.title}</h4>
                                <img onclick="removePost('${post.title}', '${post.description}')" src="./assets/x_close_icon_143474.png" alt="close post">
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

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;

  if (title.trim() === "" || description.trim() === "") {
    let alert = document.getElementById("alert");
    alert.style.display = "block";
    return;
  }

  let post = { title, description };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("http://192.168.1.8:5000/api/new", options).then((res) => {
    updatePosts();
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
  });
}

function removePost(title, description) {
  let options = {
    method: "DELETE",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({ title, description }),
  };

  fetch("http://192.168.1.8:5000/api/remove", options)
    .then((res) => {
      updatePosts();
    })
    .catch((error) => {
      console.error("Erro ao remover post:", error);
    });
}

function removeAlert() {
  let alert = document.getElementById("alert");
  alert.style.display = "none";
}
