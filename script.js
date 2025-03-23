// Define the tasks and pages
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
    "task11": { "title": "Task 11", "url": "tasks/task11/task11.html" }
};

const pages = {
    "landing": { "url": "tasks/landing.html" },
    "about": { "url": "about.html" },
    "contact": { "url": "contact.html" }
};

// DOM Elements
const contentFrame = document.getElementById('contentFrame');
const taskToggles = document.querySelector('.task-toggles');
const loading = document.querySelector('.loading');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the application
function init() {
    createTaskToggles();
    setupEventListeners();
    
    // Load landing page by default
    loadContent(pages.landing.url);
    
    // Set the first task button as active
    const firstTaskButton = document.querySelector('.task-toggle');
    if (firstTaskButton) {
        firstTaskButton.classList.add('active');
    }
}

// Create task toggle buttons
function createTaskToggles() {
    if (!taskToggles) return;
    
    for (const key in tasks) {
        const button = document.createElement('button');
        button.classList.add('task-toggle');
        button.textContent = tasks[key].title;
        button.dataset.task = key;
        
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.task-toggle').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load the task content
            loadContent(tasks[key].url);
        });
        
        taskToggles.appendChild(button);
    }
}

// Load content into the iframe
function loadContent(url) {
    if (!contentFrame) return;
    
    // Show loading spinner
    if (loading) {
        loading.classList.add('active');
    }
    
    // Set iframe source
    contentFrame.src = url;
    
    // Hide loading spinner when content is loaded
    contentFrame.onload = function() {
        if (loading) {
            loading.classList.remove('active');
        }
    };
}

// Setup event listeners
function setupEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the page to load
            const page = this.dataset.page;
            if (pages[page]) {
                loadContent(pages[page].url);
            }
        });
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);