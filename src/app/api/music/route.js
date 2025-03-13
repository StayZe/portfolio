import fs from "fs";
import path from "path";

export async function GET(req) {
  const imagesDirectory = path.join(process.cwd(), "public/img/albums");
  const files = fs.readdirSync(imagesDirectory);

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map((file) => `/img/albums/${file}`);

  return new Response(JSON.stringify(images), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
