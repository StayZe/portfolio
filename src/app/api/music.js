import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), "/public/img/albums");
  const files = fs.readdirSync(imagesDirectory);

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file) => `/img/albums/${file}`); // Correction ici

  res.status(200).json(images);
}
