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
    - MONGO_URI=<your_mongodb_connection_string>
    - PORT=5000

- Created Express server (server.js) in backend.
- Tested server connection with MongoDB:
    - node server.js
- Verified server is running on:
    - http://localhost:5000

### Day 4: Backend Routes & Server Setup

- Installed **nodemon** for automatic server restarts during development:
npm install --save-dev nodemon
- --save-dev ensures nodemon is only needed during development, not in production.
- Created Express server (server.js) in the backend folder:
    - Connected to MongoDB Atlas using Mongoose.
    - Added middleware:
        - express.json() → parses JSON request bodies.
        - cors() → enables Cross-Origin requests from frontend.
    - Registered routes from routes folder:
        - const authRoutes = require("./routes/auth");
        - app.use("/api/auth", authRoutes);
    - Started server on PORT=5000.
- Created routes folder and auth.js:
    - Defined endpoints like /register and /login.
    - Example: /api/auth/register POST route saves a new user in MongoDB.
- Created models folder and User.js model:
    - Defined user schema: name, email, password.
    - Model represents the users collection in MongoDB.
- Tested backend using Postman:
    - Set method to POST, URL to http://localhost:5000/api/auth/register.
    - Set Headers:
        - Key: Content-Type
        - Value: application/json
    - Selected Body → raw → JSON and sent user data.
    - Verified req.body is correctly received and user is saved in MongoDB.
- Key learnings:
    - models → defines database structure.
    - routes → defines API endpoints.
    - server.js → entry point connecting everything.
    - Content-Type: application/json and raw body are necessary for Express to parse JSON requests.

```bash
    