import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";

function toHex(x) {
  const buf = typeof x === "string" ? new TextEncoder().encode(x) : x;
  const hashArray = Array.from(buf);
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

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

export default function ConnectButton({ imgDataURL, id }) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const { config } = usePrepareSendTransaction({
    to: address,
    value: 0,
    data: "0x" + toHex(imgDataURL),
  });

  const { data, sendTransaction } = useSendTransaction(config);
  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  const mintImage = async () => {
    const sha = await sha256(imgDataURL);

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
      alert("Error checking the Ethscriptions API!");
      return;
    }

    if (res.result) {
      alert("This image has already been minted, page will reload!");
      window.location.reload();
      return;
    }

    sendTransaction?.();
  };

  return (
    <>
      <button
        className={
          `rounded-md px-2 py-1.5 font-semibold` +
          (address ? " bg-green-500" : " bg-blue-500")
        }
        onClick={() => open()}
      >
        {address ? "See Account" : "Connect"}
      </button>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div>Connect and click the image to mint it.</div>
        <div className="font-bold">Mickey #{id}</div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img
          className="h-96 w-full cursor-pointer"
          src={`/mickey/${id}?format=png`}
          alt="Mickey Mouse"
          onClick={mintImage}
        />
      </div>
      <button
        className="rounded-md bg-orange-500 px-2 py-1.5 font-semibold"
        onClick={() => window.location.reload()}
      >
        Randomize
      </button>
      {isLoading && <div>Wait a few seconds, minting...</div>}

      {isSuccess && (
        <div className="text-green-500">
          Successfully minted! Check on{" "}
          <a
            target="_blank"
            className="text-blue-400"
            href={`https://ethscriptions.com/ethscriptions/${data?.hash}`}
          >
            ethscriptions.com
          </a>
          !
        </div>
      )}
    </>
  );
}
