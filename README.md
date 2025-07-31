# 📝 JSL02 Project Brief: Task Input and Status Validation System
---
## 📘 Project Overview (🧩 Kanban Task Management Interface)

The **Kanban Task Management Interface** is a browser-based task board that allows users to visually manage tasks across three workflow stages: **TODO**, **DOING**, and **DONE**. Built with HTML, CSS, and JavaScript, it offers a clean layout, responsive design, and dynamic interaction through JavaScript prompts.

The JavaScript component includes user-driven task creation, input validation for task statuses, and real-time filtering and display of completed tasks via the browser console.

---

## ⚙️ Technologies Used

- **HTML5** – for structuring the user interface.
- **CSS3** – for styling and responsive layout.
- **JavaScript** – for task input, validation, filtering, and logic.
- **Browser APIs** – `prompt()`, `alert()`, and `console.log()` for user interaction and feedback.

---

## ✨ Features

### ✅ UI Features
- Sidebar with board name and navigation.
- Responsive layout with 3 Kanban-style columns (TODO, DOING, DONE).
- Styled cards representing individual tasks.
- Themed colors for each status group.
- Mobile-first responsive design.

### ✅ JavaScript Functionalities
- Prompts user to input task **title**, **description**, and **status**.
- Validates that the **status** is one of `"todo"`, `"doing"`, or `"done"` (case-insensitive).
- Stores and manages multiple tasks using an array.
- Filters tasks marked `"done"` and displays them in the console.
- Outputs a motivational message if no task is completed.

---

## 🚀 Setup Instructions

To run the project locally:

1. **Clone the repository or download the files.**

2. Ensure your project has the following file structure:

/📂**project-root**
├── index.html
├── styles.css
├── script.js
└── /assets
└── favicon.svg
└── logo-light.svg

3. Open the HTML file in any modern browser (Chrome, Firefox, Edge).

4. You’ll be prompted to enter details for two tasks via the browser.

5. View results in your **developer console** (`F12` or `Right Click > Inspect > Console`).

---

## ▶️ Usage Example

Upon loading, the user is prompted to enter two tasks. Example interaction:

1. **Prompt 1:** `Enter task 1 title:` → "Make corrections to JSL01"
2. **Prompt 2:** `Enter task 1 description:` → "Update skills with modern JS"
3. **Prompt 3:** `Enter task 1 status (todo, doing, done):` → "done"
4. (Same process for Task 2)

If one or more tasks are marked as `"done"`, the console will show: 
**Title: Make corrections to JSL01, Status: done**

If no task is completed, the console will show:
**No tasks completed, let's get to work!**

---

## 🧑‍💻 Interaction Instructions

- Task entry is managed via popup prompts (`prompt()`).
- Status input is **case-insensitive**, but must match one of: `todo`, `doing`, `done`.
- Feedback is shown in the **browser console**.
- Tasks displayed in the UI are static. The JavaScript logic affects only console output.

---

## 📱 Responsive Design

The layout adjusts for smaller screens:
- Sidebar becomes stacked
- Columns expand to full width
- Font sizes and paddings adjust for readability

---

## 👨‍💻 Author

**David Aniekan**  
Frontend learner & builder.
[GitHub](https://github.com/Davidaniekan) | [LinkedIn](https://linkedin.com/in/david-aniekan)
