<h1>
  <p>Property Pulse</p></a>
</h1>

This repository contains the source code for a Real Estate Listing Platform web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The project utilizes Vite as the local development server.<br>


## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Redux State Management](#redux-state-management)
- [Authentication and OAuth](#authentication-and-oauth)<br><br>


## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/athirakc/real-estate.git
```

2. Install dependencies for the frontend and backend:
```bash
cd real-estate/client
npm install

cd real-estate
npm install
```

3. Set up MongoDB:
- Create a MongoDB database and configure the connection in api/index.js.


4. Run the development server:
```bash
cd real-estate/client
npm run dev

cd real-estate
npm run dev
```
<br>

## Project Structure
The project structure is organized as follows:

- <b>client:</b> Frontend React application.
- <b>server:</b> Backend Express.js application.<br><br>

## Features
- User authentication with sign-up, sign-in, and OAuth options.
- Profile management with user details update, deletion, and sign-out.
- Listing management with create, update, delete functionalities.
- Search functionality with filters.
- Responsive design and user-friendly interface.
- Integration with Google OAuth for seamless authentication.
- Image upload functionality for user listings.<br><br>

## Usage
The application provides a comprehensive real estate listing platform experience. Users can sign up, create and manage listings, search for properties, and interact with landlords.<br>

## Redux State Management
The application uses Redux Toolkit and Redux Persist for efficient state management. Actions and reducers are organized in the client/src/redux directory.<br>

## Authentication and OAuth
User authentication is implemented using JWT tokens, and Google OAuth is integrated for a seamless login experience.<br>