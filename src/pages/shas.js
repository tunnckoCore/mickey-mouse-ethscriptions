// import fs from "node:fs/promises";
import { encode as arrayBufferToBase64 } from "base64-arraybuffer";
import pMap from "p-map";

const ids = Array.from({ length: 1928 })
  .fill(0)
  .map((_, i) => i + 1);

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
  const shas = await pMap(
    ids,
    async (id) => {
      const imgBuf = await fetch(
        `https://raw.githubusercontent.com/tunnckoCore/mickey-mouse-ethscriptions/master/public/webp/${id}.webp`,
      ).then((x) => x.arrayBuffer());

      const imageBase64 = arrayBufferToBase64(imgBuf);
      const sha = await sha256(`data:image/webp;base64,${imageBase64}`);

      return { id, sha };
      // https://raw.githubusercontent.com/tunnckoCore/mickey-mouse-ethscriptions/master/public/webp/${params.id}.webp
    },
    { concurrency: 100 },
  );

  // const webps = (await fs.readdir("./public/webp")).map((x) => ({
  //   filepath: `./public/webp/${x}`,
  //   id: x.split(".")[0],
  // }));

  // const shas = await pMap(webps, async ({ filepath, id }) => {
  //   const imageBase64 = await fs.readFile(filepath, { encoding: "base64" });
  //   const sha = await sha256(`data:image/webp;base64,${imageBase64}`);

  //   return { id: Number(id), sha };
  // });

  // metadata.collection_items = await fs.readdir("./public/metadata");
  // metadata.collection_items = metadata.collection_items.map();

  return new Response(JSON.stringify(shas), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
