# Blog API

A full-stack blogging project built as part of [The Odin Project Node.js](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) course. The repository is split into a backend API and two React frontends: one for editors and one for visitors.

## Objective

The goal of this project was to practice:
- Building a REST API with Express
- Protecting routes with JWT authentication
- Working with PostgreSQL through Prisma
- Structuring a backend and multiple frontend clients in one repository
- Building React interfaces for different user roles

## What is it?

A blog platform called The Gutenberg Blog with three separate parts:
- **Backend API**: handles authentication, posts, and comments
- **Editor view**: a React app for authenticated users to create and edit content
- **Visitor view**: a React app for browsing posts and reading content as a guest

## How to Use

Each part of the project is run separately.

### Backend

1. Open the backend folder.
2. Install dependencies:

```bash
cd backend
npm install
```

3. Configure your environment variables.
4. Start the backend server:

```bash
npm run dev
```

### Editor View

1. Open the editor frontend folder.
2. Install dependencies:

```bash
cd blog-editor-view
npm install
```

3. Start the editor app:

```bash
npm run dev
```

### Visitor View

1. Open the visitor frontend folder.
2. Install dependencies:

```bash
cd blog-visitor-view
npm install
```

3. Start the visitor app:

```bash
npm run dev
```

## Features

- **Authentication**: users can register and log in
- **JWT-protected API**: private actions require a valid token
- **Post management**: create, update, publish, unpublish, and delete posts
- **Comment management**: create, list, edit, and delete comments
- **Editor interface**: authenticated users can manage blog content
- **Visitor interface**: guests can browse public posts, view post details and place comments
- **CORS-enabled backend**: API accepts requests from the two local frontend apps

## Project Structure

- `backend/`: Express API, routes, controllers, and Prisma setup
- `blog-editor-view/`: React/Vite application for authenticated editors
- `blog-visitor-view/`: React/Vite application for visitors

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- Passport
- CORS
- React
- Vite

---

Project developed following: [The Odin Project - Blog API](https://www.theodinproject.com/lessons/node-path-nodejs-blog-api)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
