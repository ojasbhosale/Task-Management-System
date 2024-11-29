# Task Management App

This is a task management application built with **React** on the frontend and **Node.js (with SQLite)** on the backend. The app allows users to **add**, **update**, **delete**, and **manage tasks** with **status toggling** between **Pending** and **Completed**.

---

### **Deployement link**


### **Features**
- Add new tasks with title, description, due date, and status.
- View all tasks in a table.
- Edit tasks, update their details, and toggle their status between **Pending** and **Completed**.
- Delete tasks from the list.
- Full **CRUD** operations with a **local SQLite database**.

---

### **Table of Contents**
1. [Installation](#installation)
2. [Usage](#usage)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

---

### **Installation**
Follow these steps to set up the project locally.

#### **1. Clone the Repository**

- git clone https://github.com/ojasbhosale/Task-Management-System.git
- cd task-management-app

#### **2. Backend Setup**

- The backend is built using Node.js and SQLite.

1. Navigate to the Backend Folder
   - cd backend
3. Install Dependencies
  - Install the necessary dependencies using npm:
      - npm install
3. Set Up Database
  Make sure you have SQLite installed. You can initialize the database with the following command (it will create a tasks.db file):
    node setupDatabase.js
4. Start the Backend Server
   Once the setup is complete, start the backend server:
      node app.js
   This will run the backend on http://localhost:5000 by default.

#### **3. Frontend Setup**

The frontend is built with React.

1. Navigate to the Frontend Folder
   cd frontend

2. Install Dependencies
   Install the necessary dependencies using npm:
   npm install
3. Start the React Development Server
   Start the frontend server:
      npm start
   This will run the frontend on http://localhost:3000 by default.

#### **4. Usage**

Open the frontend in your browser by visiting http://localhost:3000.

You can:
   Add tasks by filling out the form on the homepage.
   Manage tasks by clicking on the "Manage Tasks" link in the navbar, which shows all tasks in a table.
   Update tasks by editing their title, description, due date, and status.
   Delete tasks by clicking the "Delete" button next to each task.
   Toggle task status between "Pending" and "Completed" using the "Toggle Status" button.


#### **5. Technologies Used**
   Frontend: React, React Router
   Backend: Node.js, Express, SQLite
   State Management: React useState and useEffect
   API Calls: Axios for interacting with the backend API


#### **6. Contributing**
   Fork the repository.
   Create a new branch:
   
   git checkout -b feature/your-feature-name
   Commit your changes:
   
   git commit -am 'Add a feature'
   Push to the branch:
   
   git push origin feature/your-feature-name
   Open a Pull Request.

   
#### **7. License**
   This project is licensed under the MIT License - see the LICENSE file for details.

This README.md provides a comprehensive guide on setting up the project and understanding its features. You can also optionally include a demo video to showcase the app’s functionality.
Let me know if you need further changes or clarifications! 😊

