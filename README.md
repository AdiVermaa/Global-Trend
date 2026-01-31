# TaskFlow Enterprise Strategy

## Overview

TaskFlow is a robust, full-stack task orchestration platform engineered for high-performance productivity. This repository implements a high-availability architecture using the MERN stack (MongoDB, Express.js, React, Node.js), adhering to industry-standard design patterns and Apple's Human Interface Guidelines for a premium, minimalist user experience.

---

## System Architecture

### Frontend Layer

- **Framework**: React 19 (Vite)
- **State Management**: React Context API with Hooks
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend Layer

- **Runtime**: Node.js
- **Framework**: Express.js
- **Persistence**: MongoDB Atlas (Cloud Tier)
- **ODM**: Mongoose 8.0
- **Security**: JWT (Stateless Auth), bcryptjs (Hashing)

---

## Dependency Documentation

### Client-Side Dependencies

- `react` & `react-dom`: Core library for building declarative user interfaces.
- `react-router-dom`: Client-side routing for dynamic single-page application (SPA) navigation.
- `axios`: Promise-based HTTP client for secure backend communication.
- `lucide-react`: High-quality, consistent icon set system.
- `tailwindcss`: Utility-first CSS framework for rapid UI development.
- `vite`: Fast build tool and development server for modern web projects.

### Server-Side Dependencies

- `express`: Minimalist web framework for Node.js API development.
- `mongoose`: Elegant object modeling for MongoDB.
- `jsonwebtoken`: Implementation of JSON Web Tokens for secure authentication flows.
- `bcryptjs`: Optimized password hashing algorithm for credential security.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `dotenv`: Zero-dependency module for managing sensitive environment variables.
- `express-validator`: Specialized middleware for comprehensive request payload validation.
- `nodemon`: Development utility for automatic server state synchronization.

---

## API Documentation

### Authentication Service

- `POST /api/auth/register`
  - Purpose: Provisions a new user account.
  - Body: `{ name, email, password }`
  - Success: `201 Created` with JWT token.
- `POST /api/auth/login`
  - Purpose: Validates credentials and initializes session.
  - Body: `{ email, password }`
  - Success: `200 OK` with session token.
- `GET /api/auth/me`
  - Purpose: Retrieves current authenticated session details.
  - Headers: `Authorization: Bearer <token>`
  - Success: `200 OK`.

### Task Management Service

- `GET /api/tasks`
  - Purpose: Fetches user-specific tasks with optional status filtering.
  - Query: `?status=[pending|in-progress|completed|all]`
  - Access: Private (Requires JWT).
- `POST /api/tasks`
  - Purpose: Instantiates a new task object.
  - Body: `{ title, description, status }`
  - Access: Private.
- `PUT /api/tasks/:id`
  - Purpose: Updates an existing task entity.
  - Body: `{ title, description, status }`
  - Access: Private (Ownership checked).
- `DELETE /api/tasks/:id`
  - Purpose: Soft/Hard removal of a task entry.
  - Access: Private (Ownership checked).

---

## Setup and Development

### Prerequisites

- Node.js LTS (v18+)
- MongoDB Atlas (Cloud Connection String)
- Terminal/Shell Access

### Initial Configuration

1. **Repository Setup**:

   ```bash
   git clone https://github.com/AdiVermaa/Global-Trend.git
   cd Global-Trend
   ```

2. **Backend Provisioning**:
   - Directory: `server/`
   - Commands: `npm install`
   - Configuration (`.env`):
     ```env
     PORT=5001
     MONGODB_URI=your_mongodb_atlas_uri
     JWT_SECRET=your_secure_secret
     NODE_ENV=development
     ```
   - Launch: `npm run dev`

3. **Frontend Implementation**:
   - Directory: `client/`
   - Commands: `npm install`
   - Configuration (`.env`):
     ```env
     VITE_API_URL=http://localhost:5001/api
     ```
   - Launch: `npm run dev`

---

## Operational Excellence

To ensure optimal performance and security:

- **Authentication**: All private routes verify JWT expiration (30-day TTL).
- **Validation**: Strict input sanitization and schema validation on every write operation.
- **Design**: Implements glassmorphism and Apple-compliant typography for high user retention.

---

## Support and Contribution

Contributions are reviewed through a standard PR lifecycle. For high-priority issues, please refer to the internal DevOps dashboard.

**License**: Distributed under the MIT License.
