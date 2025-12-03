# Monorepo Template

A monorepo template with a React.js frontend and Node.js backend application.

## Project Structure

```
mono-repo-template/
├── frontend/          # React.js frontend application (TypeScript + Vite)
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

- Frontend: http://localhost:5173 (Vite dev server)
- Backend: http://localhost:3000 (Express server)

The frontend is configured with a proxy that forwards `/api/*` requests to the backend automatically.

### Run individually

**Frontend only:**

```bash
cd frontend
npm run dev
# or
npm start
```

The frontend will run on http://localhost:5173 with API proxy to http://localhost:3000

**Backend only:**

```bash
cd backend
npm run dev
# or
npm start
```

The backend will run on http://localhost:3000

## Available Scripts

### Root level

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production (generates `frontend/dist/`)
- `npm run start` - Build frontend and start backend server (production mode)
- `npm install:all` - Install all dependencies

### Frontend

- `npm run dev` / `npm start` - Start Vite development server (port 5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm test` - Run tests (Vitest)

### Backend

- `npm run dev` - Start backend with watch mode (port 3000)
- `npm start` - Start backend server (port 3000)

## API Endpoints

The backend provides the following endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api` - Welcome message

## Production Deployment

In production, the backend serves the frontend static files as a single service:

1. Build the frontend: `npm run build`
2. Start the backend: `npm run start` (builds frontend automatically)

Or use the root script:

```bash
npm run start
```

This will:

1. Build the frontend (creates `frontend/dist/`)
2. Start the backend server

The backend will:

- Serve API routes at `/api/*`
- Serve static files from `frontend/dist/`
- Serve `index.html` for all other routes (SPA routing support)

**Single service deployment:**

- All traffic goes to: `http://localhost:3000`
- Frontend routes: `http://localhost:3000/*`
- API routes: `http://localhost:3000/api/*`

This setup is ideal for platforms like Railway, Render, or Fly.io where you deploy a single service.

## Development vs Production

### Development Mode

- Frontend: Vite dev server on port 5173 (with HMR)
- Backend: Express server on port 3000
- API proxy: Frontend automatically proxies `/api/*` to backend

### Production Mode

- Single service: Backend on port 3000 serves everything
- Frontend static files: Served from `frontend/dist/`
- API: Available at `/api/*` on the same server

## Technologies

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Node.js, Express, CORS
- **Build Tool**: Vite (replaces Create React App)
- **Package Management**: npm workspaces

## License

ISC
