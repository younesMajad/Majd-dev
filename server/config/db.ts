import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Lightweight JSON-file database.
 * 
 * Each collection is stored as a separate JSON file in server/data/.
 * This is designed as a zero-dependency starting point — swap this out
 * for MongoDB, PostgreSQL, or any ORM when ready for production.
 */

const DATA_DIR = path.join(__dirname, '..', 'data');

export interface DatabaseCollection<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  create(item: T): Promise<T>;
  update(id: string, updates: Partial<T>): Promise<T | undefined>;
  delete(id: string): Promise<boolean>;
}

async function ensureDataDir(): Promise<void> {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

function getFilePath(collectionName: string): string {
  return path.join(DATA_DIR, `${collectionName}.json`);
}

async function readCollection<T>(collectionName: string): Promise<T[]> {
  const filePath = getFilePath(collectionName);
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw) as T[];
  } catch {
    // File doesn't exist yet — return empty collection
    return [];
  }
}

async function writeCollection<T>(collectionName: string, data: T[]): Promise<void> {
  const filePath = getFilePath(collectionName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Create a typed collection accessor for a given JSON file.
 * Items must have an `id: string` field.
 */
export function createCollection<T extends { id: string }>(
  collectionName: string
): DatabaseCollection<T> {
  return {
    async getAll(): Promise<T[]> {
      return readCollection<T>(collectionName);
    },

    async getById(id: string): Promise<T | undefined> {
      const items = await readCollection<T>(collectionName);
      return items.find((item) => item.id === id);
    },

    async create(item: T): Promise<T> {
      const items = await readCollection<T>(collectionName);
      items.push(item);
      await writeCollection(collectionName, items);
      return item;
    },

    async update(id: string, updates: Partial<T>): Promise<T | undefined> {
      const items = await readCollection<T>(collectionName);
      const index = items.findIndex((item) => item.id === id);
      if (index === -1) return undefined;
      items[index] = { ...items[index], ...updates };
      await writeCollection(collectionName, items);
      return items[index];
    },

    async delete(id: string): Promise<boolean> {
      const items = await readCollection<T>(collectionName);
      const filtered = items.filter((item) => item.id !== id);
      if (filtered.length === items.length) return false;
      await writeCollection(collectionName, filtered);
      return true;
    },
  };
}

/**
 * Initialize the database directory and seed empty collection files if needed.
 */
export async function initDatabase(): Promise<void> {
  await ensureDataDir();

  const collections = ['projects', 'contacts', 'testimonials'];
  for (const name of collections) {
    const filePath = getFilePath(name);
    try {
      await fs.access(filePath);
    } catch {
      await writeCollection(name, []);
      console.log(`  📁 Created collection: ${name}.json`);
    }
  }

  console.log('  ✅ Database initialized (JSON file store)');
}
