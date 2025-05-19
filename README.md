

A backend project to store, access, and manipulate contacts with full user authentication, built using Node.js, Express.js, and MongoDB.

This RESTful API allows users to register, log in, and securely manage their personal contact list.

Features

(1) User Authentication and Authorization
(2) JWT-based authentication
(3) Password hashing with bcrypt
(4) Contact Management
(5) Create, Read, Update, and Delete (CRUD) operations
(6) Contacts are private and user-specific
(7) RESTful API Endpoints
(8) Follows REST conventions with clear route structure
(9) Modular Code Structure
(10) Organized by routes, controllers, middleware, and models
(11) Validation and Error Handling
(12) Request validation with meaningful error messages

Technologies

- Node.js – JavaScript runtime for server-side development, 
- Express.js – Web framework for routing and middleware, 
- MongoDB – NoSQL database for storing users and contacts, 
- Mongoose – ODM for MongoDB schema and queries, 
- JWT (jsonwebtoken) – For secure authentication tokens, 
- bcryptjs – Password hashing

API Endpoints Overview

Auth Routes

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | /api/auth/register   | Register a new user     |
| POST   | /api/auth/login      | Authenticate user and return JWT |

Contact Routes

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | /api/contacts        | Get all contacts for user |
| POST   | /api/contacts        | Add a new contact       |
| PUT    | /api/contacts/:id    | Update a contact by ID  |
| DELETE | /api/contacts/:id    | Delete a contact by ID  |
