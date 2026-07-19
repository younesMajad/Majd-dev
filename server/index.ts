import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as apiRouter } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { initDatabase } from './config/db.js';

dotenv.config({ path: '../.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── API Routes ──────────────────────────────────────────
app.use('/api', apiRouter);

// ─── Health Check ────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Global Error Handler ────────────────────────────────
app.use(errorHandler);

// ─── Start Server ────────────────────────────────────────
async function start() {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`\n  Server running at http://localhost:${PORT}`);
      console.log(`   API base:  http://localhost:${PORT}/api`);
      console.log(`   Health:    http://localhost:${PORT}/api/health\n`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

start();
