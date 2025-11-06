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
   This generates a usable Service Token and Anonymous Token for connecting to the database.

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

## Dashboard View

You can view and manage your database using the Triplit Console:

1. Visit [https://console.triplit.dev](https://console.triplit.dev)
2. Enter your database URL (typically `http://localhost:6543` for local development)
3. Use the Service Token generated from `pnpm run dev:gen` to authenticate

The console provides a web interface to:
- Browse and query your database
- Manage collections and schemas
- Monitor real-time sync activity
- Debug connection issues

## Storage Adapters

The server supports multiple storage adapters:

- **memory** (default) - An in-memory storage adapter, which is not durable and will not persist data across server restarts.
- **sqlite** - An SQLite storage adapter, which requires the installation of the `better-sqlite3` package
- **lmdb** - An LMDB storage adapter, which requires the installation of the `lmdb` package (already included in dependencies)

## Available Scripts

- `pnpm start` - Start the server in production mode
- `pnpm run dev` - Start the server in development mode with auto-restart
- `pnpm run dev:gen` - Generate initial configuration files