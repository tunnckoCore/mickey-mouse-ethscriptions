// import fs from "node:fs/promises";

export async function GET({ params, ...rest }) {
  const formats = {
    png: {
      type: "image/png",
      ext: "png",
    },
    webp: {
      type: "image/webp",
      ext: "webp",
    },
    json: {
      type: "application/json",
      ext: "json",
    },
  };

  const fmt = formats[rest.url.searchParams.get("format") || "png"];

  if (fmt.ext === "png") {
    // proxy through ipfs, cuz we cannot host all 1928 pngs on github, haha
    const res = await fetch(
      `https://bafybeigsgx2fx52lb2ikpilj3jaigdiaspk3d4i7fu7vbjl5tc6c7aacey.ipfs.dweb.link/${params.id}.png`,
    );

    return new Response(res.body, {
      status: 200,
      headers: {
        "content-type": "image/png",
        "cache-control": "public, max-age=31536000",
      },
    });
  } else if (fmt.ext === "webp") {
    const res = await fetch(
      `https://raw.githubusercontent.com/tunnckoCore/mickey-mouse-ethscriptions/master/public/webp/${params.id}.webp`,
    );

    return new Response(res.body, {
      status: 200,
      headers: {
        "content-type": "image/webp",
        "cache-control": "public, max-age=31536000",
      },
    });
  } else if (fmt.ext === "json") {
    const { attributes } = await fetch(
      `https://raw.githubusercontent.com/tunnckoCore/mickey-mouse-ethscriptions/master/public/json/${params.id}.json`,
    ).then((x) => x.json());

    const json = {
      name: `Mickey Mouse #${params.id}`,
      attributes,
      description: `Ethscriptions Mickey Mouse #${params.id}. January 2, 2024. Minted on https://mickey-mouse-ethscriptions.vercel.app`,
      external_url: `https://mickey-mouse-ethscriptions.vercel.app/png/${params.id}.png`,
    };

    return new Response(JSON.stringify(json), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response("Not found", { status: 404 });
}
