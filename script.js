const tasks = {
    "task1": { "title": "Task 1", "url": "tasks/task1/index.html" },
    "task2": { "title": "Task 2", "url": "tasks/task2/index.html" },
    "task3": { "title": "Task 3", "url": "tasks/task3/index.html" },
    "task4": { "title": "Task 4", "url": "tasks/task4/task4.html" },
    "task5": { "title": "Task 5", "url": "tasks/task5/task5.html" },
    "task6": { "title": "Task 6", "url": "tasks/task6/task6.html" },
    "task7": { "title": "Task 7", "url": "tasks/task7/task7.html" },
    "task8": { "title": "Task 8", "url": "tasks/task8/task8.html" },
    "task9": { "title": "Task 9", "url": "tasks/task9/index.html" },
    "task10": { "title": "Task 10", "url": "tasks/task10/index.html" },
    "task11": { "title": "Task 11", "url": "tasks/task11/task11.html" },
};

// Function to dynamically create links for projects
function loadProjectLinks() {
    let container = document.querySelector(".project-links");
    container.innerHTML = ""; // Clear existing content

    for (let key in tasks) {
        let link = document.createElement("a");
        link.textContent = tasks[key].title;
        link.href = "#"; // Prevent default navigation
        link.classList.add("project-link");
        link.dataset.project = key;
        link.onclick = function (event) {
            event.preventDefault();
            loadProject(tasks[key].url);
        };
        container.appendChild(link);
    }
}

// Function to update the iframe source dynamically
function loadProject(url) {
    let frame = document.getElementById("projectFrame");
    let loading = document.querySelector(".loading");

    if (frame) {
        loading.classList.add("active");
        frame.src = url;
        console.log(`Updated iframe source to: ${url}`);

        frame.onload = function() {
            loading.classList.remove("active");
        };
    } else {
        console.error("Iframe not found!");
    }
}

// Load project links when the page loads
window.onload = function () {
    loadProjectLinks();
    loadProject("tasks/landing.html");
};
