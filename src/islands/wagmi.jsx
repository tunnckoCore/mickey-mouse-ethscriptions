import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "d10035f161c5f127080ec9ea31f372d1";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
