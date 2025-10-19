
## 📝 To-Do List App

A simple and interactive To-Do List application built with HTML, CSS, and JavaScript.
Manage your daily tasks efficiently with a clean and intuitive interface.

🌟 Features

➕ Add new tasks with a description

✅ Mark tasks as completed

❌ Delete tasks individually

🗑️ Clear all completed tasks

💾 Persistent storage using localStorage (tasks remain after refresh)

📱 Responsive design for mobile and desktop


## Live Demo (https://shila-mehta.github.io/Todo-List/)

🖼️ Project Screen shots :

# Projects List View
![alt text](<shila-mehta.github.io_Todo-List_ (1).png>)


# Task List View
![alt text](<shila-mehta.github.io_Todo-List_ (2).png>)

# Completed Tasks
![alt text](<shila-mehta.github.io_Todo-List_ (3).png>)

# Inbox Tasks
![alt text](<shila-mehta.github.io_Todo-List_ (4).png>)

## 🛠️ Tech Stack
Frontend	HTML5, CSS3, JavaScript (ES6)
Storage	localStorage API
Layout	Flexbox / CSS Grid, Responsive Design
Version Control	Git & GitHub
💻 Installation & Usage

# Clone the repository:
git clone https://github.com/Shila-Mehta/Todo-List.git
All tasks are stored in localStorage — so your tasks will remain even after refreshing the page.

## 🧩 Project Structure
```
└── 📁TODO LIST
    └── 📁src
        └── 📁assets
            └── 📁fonts
            └── 📁icons
            └── 📁images
        └── 📁components
            ├── createButton.js
            ├── createColorDropDown.js
            ├── createElement.js
            ├── createInput.js
            ├── filterByLabelDropDown.js
            ├── isComing.js
            ├── isToday.js
            ├── searchBar.js
        └── 📁data
            ├── currentProjectId.js
            ├── currentSearchType.js
            ├── LabelData.js
            ├── LocalStorage.js
            ├── matchingSearch.js
            ├── ProjectList.js
        └── 📁eventHandlers
            └── 📁inboxHandlers
                ├── FilterInbox.js
            └── 📁projectHandlers
                ├── newTodoClick.js
                ├── projectClick.js
                ├── projectFormSubmission.js
                ├── renderProjectList.js
                ├── renderTodo.js
                ├── todoFormSubmission.js
            └── 📁searchHandlers
                ├── filterProjects.js
                ├── filterTodos.js
            ├── deleteProjectHandler.js
            ├── deleteTodoHandler.js
            ├── editProjectHandler.js
            ├── editTodoHandler.js
        └── 📁events
            ├── CheckBoxEvents.js
            ├── completedEvents.js
            ├── deleteTodoEvent.js
            ├── editBtnEvent.js
            ├── inboxEvents.js
            ├── isComingEvents.js
            ├── LabelEvents.js
            ├── projectEvents.js
            ├── searchEvents.js
            ├── TodayEvents.js
        └── 📁Forms
            ├── ProjectForm.js
            ├── TodoForm.js
        └── 📁modules
            ├── createProjectCard.js
            ├── createTodoCard.js
            ├── filterByLabel.js
            ├── filterComing.js
            ├── filterCompletedTodos.js
            ├── filterToday.js
        └── 📁pages
            ├── completed.js
            ├── inbox.js
            ├── Labels.js
            ├── projects.js
            ├── searchResults.js
            ├── today.js
            ├── upComing.js
        └── 📁styles
            ├── main.css
            ├── project.css
            ├── todo.css
        └── 📁Templates
            ├── Project_Template.js
            ├── Todo_Template.js
        ├── index.js
        ├── template.html
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── webpack.config.js
```

🚀 Future Enhancements

🌐 Add task categories or priorities

📅 Add due dates and reminders

🔄 Drag-and-drop to reorder tasks

☁️ Sync tasks across devices using a backend

🎨 Dark / Light mode toggle

👩‍💻 Author

Nimra Abdul Jabbar

GitHub:(https://github.com/)

Portfolio:(https://nimra-react-portfolio.netlify.app/)