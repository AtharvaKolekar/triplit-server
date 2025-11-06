import crypto from 'crypto';
import fs from 'fs';
import jwt from 'jsonwebtoken';

const PORT = "6543";
const DATABASE_URL = './db/app.db';
const TRIPLIT_DB_URL = "http://localhost:" + PORT;

const signingKey = crypto.randomBytes(32).toString('base64')
const secret = new TextEncoder().encode(signingKey);
 
const anonKey = jwt.sign({ 'x-triplit-token-type': 'anon' }, secret, {
  algorithm: 'HS256',
});
const serviceKey = jwt.sign({ 'x-triplit-token-type': 'secret' }, secret, {
  algorithm: 'HS256',
});

if(!fs.existsSync('./db')) {
  fs.mkdirSync('./db');
}

fs.writeFileSync('.env', `PORT="${PORT}"\nLOCAL_DATABASE_URL="${DATABASE_URL}"\nJWT_SECRET="${signingKey}"\n\n# Triplit Secrets\nTRIPLIT_DB_URL="${TRIPLIT_DB_URL}"\nTRIPLIT_SERVICE_TOKEN="${serviceKey}"\nTRIPLIT_ANON_TOKEN="${anonKey}"`);

console.log('Generated keys and saved to .env file:');