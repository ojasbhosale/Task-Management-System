Task Management App
This is a task management application built with React on the frontend and Node.js (with SQLite) on the backend. The app allows users to add, update, delete, and manage tasks with status toggling between Pending and Completed.

Features
Add new tasks with title, description, due date, and status.
View all tasks in a table.
Edit tasks, update their details, and toggle their status between Pending and Completed.
Delete tasks from the list.
Full CRUD operations with a local database.
Table of Contents
Installation
Usage
Backend Setup
Frontend Setup
Optional Demo Video
Installation
Follow these steps to set up the project locally.

1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
Backend Setup
The backend is built using Node.js and SQLite.

1. Navigate to the Backend Folder
bash
Copy code
cd backend
2. Install Dependencies
Install the necessary dependencies using npm.

bash
Copy code
npm install
3. Set Up Database
Make sure you have SQLite installed. You can initialize the database with the following command (it will create a tasks.db file):

bash
Copy code
node setupDatabase.js
4. Start the Backend Server
Once the setup is complete, start the backend server:

bash
Copy code
npm start
This will run the backend on http://localhost:5000 by default.

Frontend Setup
The frontend is built with React.

1. Navigate to the Frontend Folder
bash
Copy code
cd frontend
2. Install Dependencies
Install the necessary dependencies using npm.

bash
Copy code
npm install
3. Start the React Development Server
Start the frontend server:

bash
Copy code
npm start
This will run the frontend on http://localhost:3000 by default.

Usage
Open the frontend in your browser by visiting http://localhost:3000.
You can:
Add tasks by filling out the form on the homepage.
Manage tasks by clicking on the "Manage Tasks" link in the navbar, which shows all tasks in a table.
Update tasks by editing their title, description, due date, and status.
Delete tasks by clicking the "Delete" button next to each task.
Toggle task status between "Pending" and "Completed" using the "Toggle Status" button.
Optional Demo Video
To provide a short demo video, you can use any screen recording tool (such as OBS Studio, Loom, or QuickTime Player) to capture your screen while interacting with the app.

Here are the basic steps to record the demo:

Start the app locally following the above steps.
Record the screen while you demonstrate:
Adding a new task.
Managing tasks (viewing, editing, and deleting tasks).
Toggling the task status between Pending and Completed.
Save and upload the video to a platform like YouTube or Vimeo and include the link here (if applicable).
Technologies Used
Frontend: React, React Router
Backend: Node.js, Express, SQLite
State Management: React useState and useEffect
API Calls: Axios for interacting with the backend API
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -am 'Add a feature').
Push to the branch (git push origin feature/your-feature-name).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

This README.md provides a comprehensive guide on setting up the project and understanding its features. You can also optionally include a demo video to showcase the app’s functionality.

Let me know if you need further changes or clarifications! 😊