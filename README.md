# Triplit Server

Self-hosted server for Triplit sync engine using node.js.

## Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AtharvaKolekar/triplit-server.git
   cd triplit-server
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Generate tokens and .env file configuration:
   ```bash
   pnpm run dev:gen
   ```

## Running the Server

### Production Mode
```bash
pnpm start
```

### Development Mode
```bash
pnpm run dev
```

## Health Check

The server exposes a health check endpoint at `/healthcheck`. This endpoint will return a 200 status code if the server is running and healthy.

## Storage Adapters

The server supports multiple storage adapters:

- **memory** (default) - An in-memory storage adapter, which is not durable and will not persist data across server restarts.
- **sqlite** - An SQLite storage adapter, which requires the installation of the `better-sqlite3` package
- **lmdb** - An LMDB storage adapter, which requires the installation of the `lmdb` package (already included in dependencies)

## Available Scripts

- `pnpm start` - Start the server in production mode
- `pnpm run dev` - Start the server in development mode with auto-restart
- `pnpm run dev:gen` - Generate initial configuration files