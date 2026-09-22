// getImage() を使うと Astro が最適化前の元画像も dist/_astro に出力する。
// それらは出力物のどこからも参照されないため、ビルド後に取り除く。
// 「どのテキスト出力からも名前が現れない画像だけ」を対象にする安全側の実装。
import { readdir, readFile, stat, unlink } from "node:fs/promises";
import path from "node:path";

const DIST = "dist";
const ASSETS = path.join(DIST, "_astro");
const TEXT_EXT = new Set([".html", ".js", ".css", ".xml", ".txt", ".json", ".map"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = await walk(DIST).catch(() => []);
if (files.length === 0) {
  console.log("prune: dist が見つからないためスキップしました");
  process.exit(0);
}

// 参照側のテキストをまとめて読む
const haystack = (
  await Promise.all(
    files
      .filter((f) => TEXT_EXT.has(path.extname(f).toLowerCase()))
      .map((f) => readFile(f, "utf8").catch(() => "")),
  )
).join("\n");

const candidates = files.filter(
  (f) => f.startsWith(ASSETS + path.sep) && IMAGE_EXT.has(path.extname(f).toLowerCase()),
);

let removed = 0;
let freed = 0;
for (const file of candidates) {
  const name = path.basename(file);
  if (haystack.includes(name)) continue;
  freed += (await stat(file)).size;
  await unlink(file);
  removed += 1;
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(
  removed === 0
    ? `prune: 未参照の画像はありませんでした（検査 ${candidates.length} 件）`
    : `prune: 未参照の画像 ${removed} 件 / ${mb(freed)} MB を削除しました（検査 ${candidates.length} 件）`,
);
