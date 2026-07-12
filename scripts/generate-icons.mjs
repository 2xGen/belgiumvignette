import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "favicon.svg");
const iconsDir = path.join(root, "public", "icons");

const pngSizes = [48, 96, 192, 512];

const svg = await readFile(svgPath);
await mkdir(iconsDir, { recursive: true });

for (const size of pngSizes) {
  await sharp(svg).resize(size, size).png().toFile(path.join(iconsDir, `icon-${size}.png`));
}

await sharp(svg).resize(180, 180).png().toFile(path.join(iconsDir, "apple-touch-icon.png"));

const icoBuffers = await Promise.all(
  [16, 32, 48].map((size) => sharp(svg).resize(size, size).png().toBuffer()),
);

const ico = await toIco(icoBuffers);
await writeFile(path.join(root, "public", "favicon.ico"), ico);

console.log("Generated favicon.ico and PNG icons in public/icons/");
