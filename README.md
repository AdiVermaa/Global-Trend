# Global Trend - Task Management Application

A modern, full-stack task management web application built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks
- 🎨 **Modern UI**: Responsive design with Tailwind CSS and smooth animations
- 🔐 **Authentication**: Secure user authentication with JWT
- 🔍 **Filters**: Filter tasks by status (All, Pending, In Progress, Completed)
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Premium Design**: Modern glassmorphism effects and vibrant gradients

## Tech Stack

### Frontend

- React 18
- Tailwind CSS
- Vite
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- CORS enabled

## Project Structure

```
Global_Trend/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API for state management
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main app component
│   └── package.json
├── server/                # Backend Node.js application
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   └── server.js         # Server entry point
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
cd Global_Trend
```

2. **Setup Backend**

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-management
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

3. **Setup Frontend**

```bash
cd ../client
npm install
```

### Running the Application

1. **Start MongoDB** (if running locally)

```bash
mongod
```

2. **Start Backend Server**

```bash
cd server
npm run dev
```

3. **Start Frontend Development Server**

```bash
cd client
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks

- `GET /api/tasks` - Get all tasks (requires authentication)
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Design Choices

1. **Component-Based Architecture**: The frontend is built using reusable React components for maintainability and scalability.

2. **JWT Authentication**: Secure token-based authentication ensures that only authenticated users can access and manage their tasks.

3. **RESTful API Design**: The backend follows REST principles with clear, predictable endpoints for all CRUD operations.

4. **Modern UI/UX**: Implemented glassmorphism effects, smooth animations, and a vibrant color palette to create an engaging user experience that goes beyond a basic MVP.

5. **Context API**: Used React Context for global state management instead of prop drilling, making the codebase cleaner and more maintainable.

## Testing

Run tests with:

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## Deployment

### Backend (Render/Railway)

1. Push code to GitHub
2. Connect repository to deployment platform
3. Set environment variables
4. Deploy

### Frontend (Vercel/Netlify)

1. Build the production bundle: `npm run build`
2. Connect repository to deployment platform
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
