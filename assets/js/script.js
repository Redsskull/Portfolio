const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

//take my markdown file and convert it to html
window.onload = function () {
  const posts = ["test.md"]; // Add the names of your posts here

posts.forEach((post) => {
  fetch(`assets/posts/${post}`)
    .then((response) => response.text())
    .then((text) => {
      const html = window.marked.marked(text);
      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = html;
      document.querySelector(".posts").appendChild(postDiv);
    });
});

};
