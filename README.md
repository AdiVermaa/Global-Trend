# TaskFlow - Premium Task Management

A state-of-the-art, full-stack task management application inspired by Apple's minimalist design philosophy. Built with the MERN stack (MongoDB, Express, React, Node.js) and powered by Tailwind CSS.

## 🍎 Design Philosophy

TaskFlow is designed to be clean, intuitive, and distraction-free.

- **Minimalist UI**: High-clarity white glass effects and generous white space.
- **Apple Aesthetics**: Uses the system-standard Apple Blue (`#007AFF`) and soft shadow hierarchies.
- **Micro-interactions**: Smooth, iOS-like transitions and scale-in animations.

---

## 🚀 Quick Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

### 1. Clone the Project

```bash
git clone https://github.com/AdiVermaa/Global-Trend.git
cd Global-Trend
```

### 2. Backend Configuration

1. Navigate to the server directory:
   ```bash
   cd server
   npm install
   ```
2. Create a `.env` file in the `server/` folder and add:
   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_key
   NODE_ENV=development
   ```
3. Start the backend:
   ```bash
   npm run dev
   ```

### 3. Frontend Configuration

1. Navigate to the client directory:
   ```bash
   cd ../client
   npm install
   ```
2. Create a `.env` file in the `client/` folder and add:
   ```env
   VITE_API_URL=http://localhost:5001/api
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

---

## 🛠 Tech Stack

| Tier         | Technology                                      |
| :----------- | :---------------------------------------------- |
| **Frontend** | React (Vite), Tailwind CSS, Lucide Icons, Axios |
| **Backend**  | Node.js, Express.js, JWT Authentication         |
| **Database** | MongoDB Atlas (Cloud)                           |
| **Styling**  | Custom Apple-Design System with PostCSS         |

---

## 📖 Features

- **Secure Auth**: Password hashing with bcrypt and JWT-based session management.
- **Dashboard**: Real-time task statistics (Pending, In-Progress, Completed).
- **CRUD**: Full Create, Read, Update, and Delete capabilities for tasks.
- **Search & Filter**: Instant search and status filtering for efficient management.
- **Responsive**: Fully optimized for macOS, iOS, and Windows browsers.

---

## 📦 Deployment

The application is ready for production:

- **Frontend**: Deploy to **Vercel** (connect the `client` folder).
- **Backend**: Deploy to **Render** or **Railway** (connect the `server` folder).

---

## 🤝 Contributing

Feel free to fork this project and submit PRs for any improvements!

## 📄 License

Licensed under the [MIT License](LICENSE).
