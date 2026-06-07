// public/script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");

    // Fetch projects from the Express API endpoint dynamically
    fetch('/api/projects')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not perfectly operational.");
            }
            return response.json();
        })
        .then(data => {
            // Clear loading placeholder text
            container.innerHTML = "";

            // Loop through data array and construct presentation nodes
            data.forEach(project => {
                const card = document.createElement("div");
                card.className = "project-card";

                // Generate tech tags strings
                const tagsHTML = project.techStack
                    .map(tech => `<span class="tech-tag">${tech}</span>`)
                    .join("");

                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags-container">${tagsHTML}</div>
                `;
                
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching project catalogs:", error);
            container.innerHTML = `<p style="color:red;">Error loading project data. Make sure backend server is active on port 5000.</p>`;
        });
});