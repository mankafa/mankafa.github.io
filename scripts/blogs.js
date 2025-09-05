fetch("../data/blog.json")
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById("blog-posts");
      posts.forEach(post => {
        container.innerHTML += `
          <div class="col-md-6">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="text-muted">${post.date}</p>
                <p class="card-text">${post.excerpt}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">Mehr lesen</a>
              </div>
            </div>
          </div>
        `;
    });
});

fetch("../data/blog.json")
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById("blog-posts");
      posts.forEach(post => {
        container.innerHTML += `
          <div class="col-md-6">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="text-muted">${post.date}</p>
                <p class="card-text">${post.excerpt}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">Mehr lesen</a>
              </div>
            </div>
          </div>
        `;
    });
});
