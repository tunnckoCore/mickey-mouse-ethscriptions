// import fs from "node:fs/promises";
import pMap from "p-map";
import { encode as arrayBufferToBase64 } from "base64-arraybuffer";

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

const collectionMetadata = {
  name: "mickey-mouse",
  description: `The House of Mickey went Public Domain, so... Mickey Mouse is going enciphered as 64x64 WEBP images, ~900 bytes, with 1928 supply.`,
  total_supply: "1928",
  logo_image_uri: `esc://ethscriptions/0x5eacd10493046126e5e1f24e8e34f519b033bcf737a2ba77fb97ea0d94399864/data`,
  banner_image_uri: "",
  background_color: "#001",
  twitter_link: "",
  website_link: "https://mickey-mouse-ethscriptions.vercel.app",
  discord_link: "",
  collection_items: [],
};

async function getEthscription(sha) {
  let res = null;

  try {
    res = await fetch(
      `https://api.ethscriptions.com/api/ethscriptions/exists/${sha}`,
    );
    if (!res.ok) {
      throw new Error("Error fetching api.");
    }

    res = await res.json();
  } catch (e) {
    // alert("Error checking the Ethscriptions API!");
    return 0;
  }

  if (res.result) {
    // alert("This image has already been minted, page will reload!");
    // window.location.reload();
    return res.ethscription;
  }

  return null;
}

export async function GET() {
  const collection_items = await pMap(
    ids,
    async (id) => {
      const imgBuf = await fetch(
        `https://raw.githubusercontent.com/tunnckoCore/mickey-mouse-ethscriptions/master/public/webp/${id}.webp`,
      ).then((x) => x.arrayBuffer());

      const imageBase64 = arrayBufferToBase64(imgBuf);
      const sha = await sha256(`data:image/webp;base64,${imageBase64}`);

      const { attributes } = await fetch(
        `https://raw.githubusercontent.com/tunnckoCore/mickey-mouse-ethscriptions/master/public/json/${id}.json`,
      ).then((x) => x.json());

      const ethscription = await getEthscription(sha);

      attributes.push({ trait_type: "SHA-256", value: sha });

      return {
        sha,
        name: `Mickey Mouse #${id}`,
        description: `Ethscriptions Mickey Mouse #${id}. January 2, 2024. Minted on https://mickey-mouse-ethscriptions.vercel.app`,
        item_attributes: attributes,
        external_url: `https://mickey-mouse-ethscriptions.vercel.app/png/${id}.png`,
        ethscription_id: ethscription ? ethscription.transaction_hash : "",
      };
    },
    { concurrency: 100 },
  );

  // const minted_items = collectionMetadata.collection_items.filter(
  //   (x) => x.ethscription_id !== "",
  // );

  collectionMetadata.minted_count = collection_items.filter(
    (x) => x.ethscription_id !== "",
  ).length;
  // collectionMetadata.minted_items = minted_items;
  collectionMetadata.collection_items = collection_items;

  return new Response(JSON.stringify(collectionMetadata), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
