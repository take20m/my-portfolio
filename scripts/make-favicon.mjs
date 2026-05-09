import sharp from "sharp";

const size = 256;
const mask = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
);

await sharp("./src/assets/profile/avatar.png")
  .resize(size, size, { fit: "cover" })
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toFile("./public/favicon.png");

console.log("favicon.png written");
