import fs from "node:fs/promises";
import pMap from "p-map";

async function sha256(msg, algo) {
  const hashBuffer = await crypto.subtle.digest(
    algo || "SHA-256",
    typeof msg === "string" ? new TextEncoder().encode(msg) : msg,
  );

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

export async function GET() {
  const webps = (await fs.readdir("./public/webp")).map((x) => ({
    filepath: `./public/webp/${x}`,
    id: x.split(".")[0],
  }));

  const shas = await pMap(webps, async ({ filepath, id }) => {
    const imageBase64 = await fs.readFile(filepath, { encoding: "base64" });
    const sha = await sha256(`data:image/webp;base64,${imageBase64}`);

    return { id: Number(id), sha };
  });

  // metadata.collection_items = await fs.readdir("./public/metadata");
  // metadata.collection_items = metadata.collection_items.map();

  return new Response(JSON.stringify(shas), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
