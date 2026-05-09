import sharp from "sharp";

await sharp("./src/assets/works/this-portfolio-cover.png")
  .resize(1200, 630, { fit: "contain", background: { r: 255, g: 255, b: 255 } })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile("./public/og-default.png");

console.log("og-default.png written (1200x630)");
