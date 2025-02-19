# LearnAI - AI-Powered English Learning Platform

LearnAI is an interactive platform that uses artificial intelligence to help users improve their English language skills. The platform provides personalized lessons, real-time conversations, and adaptive learning experiences.

## Features

- 🤖 AI-powered language tutor
- 💬 Real-time conversation practice
- 🎯 Personalized learning experience
- 🗣️ Speech-to-text and text-to-speech capabilities
- 🔐 User authentication system
- 📱 Responsive design

## Tech Stack

### Frontend

- React with TypeScript
- Vite
- Material-UI
- React Router
- AOS (Animate on Scroll)
- JWT Authentication

### Backend

- Node.js with Express
- MongoDB
- Passport.js
- Python Flask (for AI service)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Python 3.x
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/failaip12/LearnAI
    cd LearnAI
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd react-app
    npm install
    ```

4. Install Python dependencies:

    ```bash
    pip install flask flask-cors pymongo requests
    ```

## Configuration

1. Set up MongoDB connection in `server/config.js`
2. Configure JWT secret in `routes/config/config.js`
3. Set up AI service endpoints in `waiter/waiter.py`

## Running the Application

1. Start the MongoDB server

2. Start the backend server:

    ```bash
    node server/server.js
    ```

3. Start the frontend development server:

    ```bash
    cd react-app
    npm run dev
    ```

4. Start the Python AI service:

    ```bash
    python waiter/waiter.py
    ```

## Project Structure

- `/react-app` - Frontend React application
- `/server` - Node.js backend server
- `/routes` - API routes
- `/models` - Database models
- `/services` - Business logic
- `/waiter` - Python AI service

## Features in Detail

### User Authentication

- User registration and login
- JWT-based authentication
- Role-based access control

### AI Conversation

- Real-time chat interface
- Speech-to-text input
- Text-to-speech output
- Conversation history storage

### User Interface

- Responsive navigation
- Animated sections
- Pricing plans
- About us information
