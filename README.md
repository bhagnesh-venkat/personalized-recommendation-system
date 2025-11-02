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


### Day 5 Progress Summary

- Today, I worked on connecting the frontend and backend for user authentication in the MERN stack project.

    ✅ Implemented the register and login routes in Express.js using MongoDB for data storage.
    ✅ Tested both routes using Postman, verifying user creation, validation errors, and duplicate email handling (E11000 duplicate key error).
    ✅ Ensured proper error handling for missing fields like name, email, or password.
    ✅ Verified login functionality by sending email and password in JSON format through Postman.
    ✅ Improved understanding of how MongoDB validation and unique index constraints work.

### Day 6 Summary: JWT Authentication & Protected Routes
- Features Implemented
    - JWT (JSON Web Token) Authentication:
        - Used JWT to create a token after successful login.
        - Token expires after 1 hour.
    - Middleware (verifyToken):
        - Validates the token sent from client in the Authorization header.
        - Denies access if token is missing or invalid.
        - Attaches decoded user info to req.user for protected routes.
    - Protected User Route:
        -Created /api/users/profile route.
        - Only accessible if valid JWT token is provided.

Steps Taken
    1. Installed jsonwebtoken for token generation.
    2. Updated login route to generate JWT token after verifying user credentials.
    3. Created verifyToken.js middleware:
        - Reads token from req.headers.authorization
        - Verifies the token using secret key
        - Attaches user info to req.user
    4. Tested protected route /api/users/profile using Postman with Bearer token.

Example Token Usage in Postman
    - Method: GET
    - URL: http://localhost:5000/api/users/profile
    - Authorization → Type: Bearer Token → Paste the token received from login

### 🔐Day 7 – Implemented JWT Authentication

    -Integrated JWT (JSON Web Token) for user login authentication.
    -After successful login, a token is generated using the jsonwebtoken library.
    -This token stores the user’s ID securely and is later used to verify identity.
    -Tested the login route using Postman and confirmed token generation.

### 🧱Day 8 – Created Protected User Profile Route

    -Added a middleware (verifyToken.js) to verify JWT tokens sent by users.
    -Created a protected route /api/users/profile that only allows access with a valid token.
    -If the token is missing or invalid → access is denied.
    -Successfully tested via Postman using the Bearer Token authorization method.

### 🧰Day 9 – Added Secure User Profile Update

    -Implemented a PUT route /api/users/update to update user details like name, email, or password.
    -Secured it with the same JWT middleware to ensure only logged-in users can update their info.
    -Used bcrypt to hash the new password before saving.
    -Successfully tested in Postman with Bearer Token authentication.

### 🌟 Day 10 – Delete User Profile (Protected Route)
- Added a new DELETE route `/api/users/delete` in `userRoutes.js`.
- Used **verifyToken middleware** to protect route so only logged-in users can delete their own account.
- Deleted user data using:
    await User.findByIdAndDelete(req.user.id);
    Tested the route using Postman:
- Method: DELETE
    URL: http://localhost:5000/api/users/delete
    Authorization: Bearer Token (from login)
    Verified user deletion in MongoDB Atlas.
```bash
    