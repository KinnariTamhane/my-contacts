## API Created in Express

A backend project to store, access, and manipulate contacts with full user authentication, built using Node.js, Express.js, and MongoDB.

This RESTful API allows users to register, log in, and securely manage their personal contact list.

## ✨ Features

- User Authentication and Authorization
- JWT-based authentication
- Password hashing with bcrypt
- Contact Management
- Create, Read, Update, and Delete (CRUD) operations
- Contacts are private and user-specific
- RESTful API Endpoints
- Follows REST conventions with clear route structure
- Modular Code Structure
- Organized by routes, controllers, middleware, and models
- Validation and Error Handling
- Request validation with meaningful error messages

## 🛠 Tech Stack

- Node.js – JavaScript runtime for server-side development, 
- Express.js – Web framework for routing and middleware, 
- MongoDB – NoSQL database for storing users and contacts, 
- Mongoose – ODM for MongoDB schema and queries, 
- JWT (jsonwebtoken) – For secure authentication tokens, 
- bcryptjs – Password hashing

## API Endpoints Overview

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
