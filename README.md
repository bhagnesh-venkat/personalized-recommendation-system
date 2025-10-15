# Personalized Recommendation System (MERN Stack)

A web application that provides personalized recommendations to users. Built using the **MERN stack** (MongoDB, Express, React, Node.js). This project is still in development and serves as a learning project for building full-stack web applications.

---

## 🌟 Project Summary (Day 1 - Day 3)

### **Day 1: Environment Setup**
- Installed all necessary tools:
  - Node.js
  - Python
  - MongoDB
  - Docker
  - Git
- Verified installations in Windows CMD.
- Ensured the system is ready for backend and frontend development.

### **Day 2: Initial Project Structure**
- Created project folders:
  - `backend` → Express server and API routes
  - `recommendation-frontend` → React frontend
- Understood **role of `index.js` and `app.js`**:
  - `index.js` → Entry point, renders `app.js`
  - `app.js` → Handles routing and renders other components
- Initialized frontend with:
npm init -y

### Day 3: Backend Setup and MongoDB Connection

- Configured MongoDB Atlas:
  - Created cluster and database
  - Obtained connection string

- Updated `.env` file in the `backend` folder:

```env
MONGO_URI=<your_mongodb_connection_string>
PORT=5000

- Created Express server (server.js) in backend.
- Tested server connection with MongoDB:
    - node server.js
- Verified server is running on:
    - http://localhost:5000

```bash
    