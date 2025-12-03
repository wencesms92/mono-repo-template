# Monorepo Template

A monorepo template with a React.js frontend and Node.js backend application.

## Project Structure

```
mono-repo-template/
├── frontend/          # React.js frontend application (TypeScript)
├── backend/           # Node.js backend application (Express)
├── package.json       # Root package.json with npm workspaces
└── README.md
```

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Setup

1. Install all dependencies (for both frontend and backend):

   ```bash
   npm install
   ```

   This will install dependencies for both workspaces automatically.

## Development

### Run both frontend and backend together

From the root directory:

```bash
npm run dev
```

This will start:

- Frontend: http://localhost:3000 (Vite dev server)
- Backend: http://localhost:3001 (Express server)

### Run individually

**Frontend only:**

```bash
cd frontend
npm run dev
# or
npm start
```

**Backend only:**

```bash
cd backend
npm run dev
# or
npm start
```

## Available Scripts

### Root level

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production
- `npm run start` - Start the backend server
- `npm install:all` - Install all dependencies

### Frontend

- `npm run dev` / `npm start` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests (Vitest)

### Backend

- `npm run dev` - Start backend with watch mode
- `npm start` - Start backend server

## API Endpoints

The backend provides the following endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api` - Welcome message

## Technologies

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Node.js, Express, CORS

## License

ISC
