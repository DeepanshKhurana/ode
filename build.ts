import fs from 'fs';
import path from 'path';
import fm from "front-matter";

const piecesPath = './public/content/pieces/';
const indexPath = './public/content/pieces.json';
const collectionsPath = './public/content/collections.json';

type Piece = {
  slug: string;
  title: string;
  date: string;
  collections: string[];
};

type Collection = {
  name: string;
  total: number;
  pieces: string[];
};

const files = fs.readdirSync(piecesPath);
if (files.length === 0) {
  console.log('No files found in the pieces directory.');
  process.exit(0);
}

const index: Piece[] = [];

files.forEach(file => {
  const filePath = path.join(piecesPath, file);
  const stats = fs.statSync(filePath);
  if (stats.isFile()) {
    console.log(`Indexing: ${file}, Size: ${stats.size} bytes`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = fm<{ title?: string; date?: string; categories?: string[] }>(raw);
    index.push({
      slug: path.basename(file, path.extname(file)),
      title: parsed.attributes.title || 'Untitled',
      date: parsed.attributes.date || 'Unknown',
      collections: parsed.attributes.categories || []
    });
  }
});

index.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
console.log(`pieces.json created successfully with ${index.length} entries.`);

const pieces: Piece[] = index;
const collectionsMap: { [key: string]: Collection } = {};

pieces.forEach(piece => {
  piece.collections.forEach(collectionName => {
    if (!collectionsMap[collectionName]) {
      collectionsMap[collectionName] = { name: collectionName, pieces: [], total: 0 };
    }
    collectionsMap[collectionName].total += 1;
    collectionsMap[collectionName].pieces.push(piece.slug);
  });
});

const collections = Object.values(collectionsMap);
fs.writeFileSync(collectionsPath, JSON.stringify(collections, null, 2));
console.log(`collections.json created successfully with ${collections.length} categories and ${pieces.length} total pieces.`);