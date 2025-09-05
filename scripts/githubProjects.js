const username = "mankafa"; // your GitHub username
const projectContainer = document.getElementById("github-projects");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
.then(res => res.json())
.then(repos => {
    console.log("Repos from GitHub", repos)
    const featured = repos.filter(repo => !repo.fork && repo.description).slice(0, 6);
    featured.forEach(repo => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
            <a href="${repo.html_url}" class="btn btn-outline-primary btn-sm" target="_blank">➡ GitHub ansehen</a>
        </div>
        </div>`;
    projectContainer.appendChild(card);
    });
})
.catch(err => {
    projectContainer.innerHTML = `<p class="text-danger">Projekte konnten nicht geladen werden.</p>`;
});

const username = "mankafa"; // your GitHub username
const projectContainer = document.getElementById("github-projects");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
.then(res => res.json())
.then(repos => {
    console.log("Repos from GitHub", repos)
    const featured = repos.filter(repo => !repo.fork && repo.description).slice(0, 6);
    featured.forEach(repo => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
            <a href="${repo.html_url}" class="btn btn-outline-primary btn-sm" target="_blank">➡ GitHub ansehen</a>
        </div>
        </div>`;
    projectContainer.appendChild(card);
    });
})
.catch(err => {
    projectContainer.innerHTML = `<p class="text-danger">Projekte konnten nicht geladen werden.</p>`;
});
