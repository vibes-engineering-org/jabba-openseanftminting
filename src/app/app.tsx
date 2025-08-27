"use client";

import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          Mint NFT
        </h2>
        <NFTMintFlow
          contractAddress="0xFec4F0164a3CD358AaD6173CD314CEf9cb36aFdE"
          tokenId="1"
          network="base"
          buttonText="Mint NFT"
        />
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
