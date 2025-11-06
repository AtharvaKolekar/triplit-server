import { createServer, createTriplitStorageProvider } from '@triplit/server';
import 'dotenv/config';

if (!process.env.JWT_SECRET || !process.env.LOCAL_DATABASE_URL) {
  console.error(`!! Missing environment variables. Please run 'pnpm run dev:gen' to create a .env file with the required environment variables.\n`);
  process.exit();
}

const port = process.env.PORT || "6543";

const startServer = await createServer({
  storage: await createTriplitStorageProvider('lmdb'), //lmdb or sqlite
  verboseLogs: false,
  jwtSecret: process.env.JWT_SECRET,
});
 
const dbServer = startServer(port);

console.log('Running Triplit Server on Port', port);
process.on('SIGINT', function () {
  dbServer.close(() => {
    console.log('Shutting down server... ');
    process.exit();
  });
});