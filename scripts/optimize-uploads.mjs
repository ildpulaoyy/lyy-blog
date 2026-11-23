/**
 * 构建前用：把 CMS 上传目录里过大的原图压到合理尺寸。
 * 原地覆盖同名文件，引用路径不变，重复执行安全（已达标即跳过）。
 */
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DIR = "public/images/uploads";
const MAX_WIDTH = 1600;
const SIZE_LIMIT = 400 * 1024;

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.log("[optimize-uploads] sharp 不可用，跳过图片优化");
  process.exit(0);
}

let names = [];
try {
  names = await readdir(DIR);
} catch {
  console.log("[optimize-uploads] 没有上传目录，跳过");
  process.exit(0);
}

const targets = names.filter((n) => /\.(jpe?g|png)$/i.test(n));
let saved = 0;

for (const name of targets) {
  const file = path.join(DIR, name);
  try {
    const info = await stat(file);
    const input = await readFile(file);
    const meta = await sharp(input).metadata();
    const tooBig = info.size > SIZE_LIMIT || (meta.width || 0) > MAX_WIDTH;
    if (!tooBig) continue;

    const isPng = /\.png$/i.test(name);
    let pipeline = sharp(input).rotate().resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
    const buffer = isPng
      ? await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer()
      : await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();

    if (buffer.length < info.size) {
      await writeFile(file, buffer);
      saved += info.size - buffer.length;
      console.log(
        `[optimize-uploads] ${name}: ${Math.round(info.size / 1024)}KB -> ${Math.round(buffer.length / 1024)}KB`
      );
    }
  } catch (error) {
    console.warn(`[optimize-uploads] ${name} 处理失败，跳过：${error.message}`);
  }
}

console.log(`[optimize-uploads] 完成，共省 ${Math.round(saved / 1024)}KB`);
