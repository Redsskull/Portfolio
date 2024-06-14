const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})

const posts = ['myfirstpost.md', 'mysecondpost.md']; // Add the names of your posts here

posts.forEach(post => {
  fetch(`posts/${post}`)
    .then(response => response.text())
    .then(text => {
      const html = marked(text);
      const article = document.createElement('article');
      article.innerHTML = html;
      document.querySelector('main').appendChild(article);
    });
});

