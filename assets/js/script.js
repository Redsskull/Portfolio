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

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postParam = urlParams.get('post');

  if (window.location.pathname.endsWith('post.html') && postParam) {
    // We're on the post.html page and a post parameter is provided
    const postElement = document.querySelector(".post");
    if (postElement) {
      fetch(`assets/posts/${postParam}`)
        .then((response) => response.text())
        .then((text) => {
          // Split the text into metadata and content
          const splitIndex = text.indexOf('\n', text.indexOf('}'));
          const content = text.substring(splitIndex + 1);

          // Convert the content from markdown to HTML
          const html = window.marked.marked(content);

          // Add the HTML to the post element
          postElement.innerHTML = html;
        });
    }
  } else {
    // We're on the main page
    const postsElement = document.querySelector(".posts");
    if (postsElement) {
      const posts = ["test.md"];

      posts.forEach((post) => {
        fetch(`assets/posts/${post}`)
          .then((response) => response.text())
          .then((text) => {
            // Split the text into metadata and content
            const splitIndex = text.indexOf('\n', text.indexOf('}'));
            const metadata = text.substring(0, splitIndex);

            // Parse the metadata into a JavaScript object
            const metadataObj = JSON.parse(metadata);

            // Create a new div for the post preview
            const previewDiv = document.createElement("div");
            previewDiv.className = "post-preview";

            // Create a link to the post's HTML page using the markdown file name
            const postLink = document.createElement("a");
            postLink.href = `post.html?post=${post}`;
            postLink.innerHTML = `<h2>${metadataObj.title}</h2>`;

            // Append the link to the preview div
            previewDiv.appendChild(postLink);

            // Add the tags to the preview div
            const tagsP = document.createElement("p");
            tagsP.textContent = metadataObj.tags.join(", ");
            previewDiv.appendChild(tagsP);

            // Append the preview div to the posts element
            postsElement.appendChild(previewDiv);
          });
      });
    }
  }
};

