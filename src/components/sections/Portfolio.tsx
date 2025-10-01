import React from "react";

/** Small helper to keep each logo card consistent */
interface LogoCardProps {
  href: string;
  title: string;
  desc: string;
  imgLarge?: string;
  imgSmall: string;
}

function LogoCard({ href, title, desc, imgLarge, imgSmall }: LogoCardProps) {
  return (
    <div className="flex flex-col gap-1 relative">
      <a className="" target="_blank" rel="noopener noreferrer" href={href}>
        <div className="img-swap relative w-full aspect-square overflow-hidden">
          <div className="image overflow-hidden block w-full aspect-square select-none absolute hover:opacity-60">
            <picture>
              {imgLarge && (
                <source srcSet={imgLarge} media="(min-width: 600px)" />
              )}
              <img className="block w-full h-full object-cover" src={imgSmall} alt={title} />
            </picture>
          </div>
        </div>
      </a>
      <div className="flex flex-col gap-half">
        <p className="font-mono font-medium uppercase text-mono-12">
          <a className="link-underline-hover" target="_blank" rel="noopener noreferrer" href={href}>
            {title}
          </a>
        </p>
        <a className="" target="_blank" rel="noopener noreferrer" href={href}>
          <div className="rich-text line-break font-mono text-mono-12">
            <p>{desc}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const featured: LogoCardProps[] = [
    {
      title: "Uniswap",
      href: "https://uniswap.org/",
      desc: "Decentralized crypto exchange protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Coinbase",
      href: "https://www.coinbase.com/",
      desc: "Crypto exchange and wallet",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Optimism",
      href: "https://www.optimism.io/",
      desc: "Ethereum Layer 2 blockchain",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Phantom",
      href: "https://phantom.com/",
      desc: "Web3 wallet",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Fireblocks",
      href: "https://www.fireblocks.com/",
      desc: "Crypto wallet as a service",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Kalshi",
      href: "https://kalshi.com/",
      desc: "Prediction market platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Flashbots",
      href: "https://www.flashbots.net/",
      desc: "MEV infrastructure and research",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Privy",
      href: "https://privy.io/",
      desc: "Embedded wallet infrastructure",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
  ];

  // Add more as needed — I've started the list with a representative set.
  const investments: LogoCardProps[] = [
    {
      title: "Across",
      href: "https://across.to/",
      desc: "Crosschain bridging protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/b8dab808a53dd57dd2588b2e35232acbb92ac79b-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b8dab808a53dd57dd2588b2e35232acbb92ac79b-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/b8dab808a53dd57dd2588b2e35232acbb92ac79b-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b8dab808a53dd57dd2588b2e35232acbb92ac79b-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Agora",
      href: "https://www.agora.finance/",
      desc: "Stablecoin infrastructure platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/5055d844f41897a5873874e243bbdf679d20a405-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5055d844f41897a5873874e243bbdf679d20a405-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/5055d844f41897a5873874e243bbdf679d20a405-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5055d844f41897a5873874e243bbdf679d20a405-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Amber",
      href: "https://www.ambergroup.io/",
      desc: "Crypto financial services platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/c202e84167406a0e6f847230d46a4ec8ba94a7d4-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c202e84167406a0e6f847230d46a4ec8ba94a7d4-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/c202e84167406a0e6f847230d46a4ec8ba94a7d4-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c202e84167406a0e6f847230d46a4ec8ba94a7d4-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "AI Arena",
      href: "https://aiarena.io/",
      desc: "AI-powered NFT gaming",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/42a911ed9f1e90da02cac06b5fde0757ec357454-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/42a911ed9f1e90da02cac06b5fde0757ec357454-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/42a911ed9f1e90da02cac06b5fde0757ec357454-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/42a911ed9f1e90da02cac06b5fde0757ec357454-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Argent",
      href: "https://www.argent.xyz/",
      desc: "DeFi wallet",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/5d208ee6903b4bb194758df542adf77a0707be7e-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5d208ee6903b4bb194758df542adf77a0707be7e-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/5d208ee6903b4bb194758df542adf77a0707be7e-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5d208ee6903b4bb194758df542adf77a0707be7e-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Axiom",
      href: "https://www.axiom.xyz/",
      desc: "Trustlessly compute over Ethereum data",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/3d02530773746eb0ea57eb785cfb48bbf93ac980-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/3d02530773746eb0ea57eb785cfb48bbf93ac980-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/3d02530773746eb0ea57eb785cfb48bbf93ac980-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/3d02530773746eb0ea57eb785cfb48bbf93ac980-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Aztec",
      href: "https://aztec.network/",
      desc: "Privacy-first Layer 2 on Ethereum",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/028b5b96cdf9a78c701da5a1c0dfa64f31eb785d-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/028b5b96cdf9a78c701da5a1c0dfa64f31eb785d-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/028b5b96cdf9a78c701da5a1c0dfa64f31eb785d-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/028b5b96cdf9a78c701da5a1c0dfa64f31eb785d-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Babylon",
      href: "https://babylonlabs.io/",
      desc: "Trustless Bitcoin staking",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/0c5ff696cf27b741da63ca2a815fbbb90583c1c7-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0c5ff696cf27b741da63ca2a815fbbb90583c1c7-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/0c5ff696cf27b741da63ca2a815fbbb90583c1c7-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0c5ff696cf27b741da63ca2a815fbbb90583c1c7-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "BetDex",
      href: "https://www.betdex.com/",
      desc: "Decentralized sports betting protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/0c32e90419b90374451be0a8bc9188b53af40233-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0c32e90419b90374451be0a8bc9188b53af40233-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/0c32e90419b90374451be0a8bc9188b53af40233-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0c32e90419b90374451be0a8bc9188b53af40233-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Bitso",
      href: "https://bitso.com/",
      desc: "Digital currency exchange",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/2783f8a69d580f812d729df8e2bfe42b02e78d1b-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2783f8a69d580f812d729df8e2bfe42b02e78d1b-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/2783f8a69d580f812d729df8e2bfe42b02e78d1b-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2783f8a69d580f812d729df8e2bfe42b02e78d1b-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Blast",
      href: "https://blast.io/",
      desc: "Ethereum Layer 2 with native yield",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/e6079e8c5e509a7d46f5c0c6063c70c813b4a214-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e6079e8c5e509a7d46f5c0c6063c70c813b4a214-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/e6079e8c5e509a7d46f5c0c6063c70c813b4a214-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e6079e8c5e509a7d46f5c0c6063c70c813b4a214-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Blowfish",
      href: "https://blowfish.xyz/",
      desc: "Proactive defense for web3 wallets",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a11fc9cf9ab8e78ab1148bb8591647ffad8ea599-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a11fc9cf9ab8e78ab1148bb8591647ffad8ea599-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a11fc9cf9ab8e78ab1148bb8591647ffad8ea599-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a11fc9cf9ab8e78ab1148bb8591647ffad8ea599-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Blur",
      href: "https://blur.io/",
      desc: "NFT marketplace for pro traders",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/66b49ce161222d44c749db62458961e72d2135e7-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/66b49ce161222d44c749db62458961e72d2135e7-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/66b49ce161222d44c749db62458961e72d2135e7-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/66b49ce161222d44c749db62458961e72d2135e7-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Chainalysis",
      href: "https://www.chainalysis.com/",
      desc: "Blockchain data platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/0392b1290921eb730095b56f4d436206a3975c31-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0392b1290921eb730095b56f4d436206a3975c31-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/0392b1290921eb730095b56f4d436206a3975c31-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0392b1290921eb730095b56f4d436206a3975c31-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Citadel Securities",
      href: "https://www.citadelsecurities.com/",
      desc: "Global market maker",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/cc6b83d4e6cb9b64259b5dd9a33aa91049071202-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/cc6b83d4e6cb9b64259b5dd9a33aa91049071202-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/cc6b83d4e6cb9b64259b5dd9a33aa91049071202-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/cc6b83d4e6cb9b64259b5dd9a33aa91049071202-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Code4rena",
      href: "https://code4rena.com/",
      desc: "Smart contract security marketplace",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/41f84a140995905df91f65d0b67b338788e8ae8b-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/41f84a140995905df91f65d0b67b338788e8ae8b-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/41f84a140995905df91f65d0b67b338788e8ae8b-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/41f84a140995905df91f65d0b67b338788e8ae8b-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Coinbase",
      href: "https://www.coinbase.com/",
      desc: "Crypto exchange and wallet",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/dea2ee435d0100a22944c3d02ef58f625883c065-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "CoinSwitch",
      href: "https://coinswitch.co/",
      desc: "Crypto exchange in India",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/05908a8a3af1b3299c288620dc278c349b04d244-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/05908a8a3af1b3299c288620dc278c349b04d244-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/05908a8a3af1b3299c288620dc278c349b04d244-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/05908a8a3af1b3299c288620dc278c349b04d244-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Compound",
      href: "https://compound.finance/",
      desc: "Lending protocol on Ethereum",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/89676fc693be7c43f9aa7afdccfe07b2b4654083-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/89676fc693be7c43f9aa7afdccfe07b2b4654083-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/89676fc693be7c43f9aa7afdccfe07b2b4654083-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/89676fc693be7c43f9aa7afdccfe07b2b4654083-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Conduit",
      href: "https://conduit.xyz/",
      desc: "Rollup-as-a-service infrastructure platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/10f319f3dab566a75fe0f7b352da0ef443580072-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/10f319f3dab566a75fe0f7b352da0ef443580072-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/10f319f3dab566a75fe0f7b352da0ef443580072-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/10f319f3dab566a75fe0f7b352da0ef443580072-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Cosmos (ATOM)",
      href: "https://cosmos.network/",
      desc: "Blockchain application platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/f6da53711b133cb63359a3a6afa680d8debcc7de-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f6da53711b133cb63359a3a6afa680d8debcc7de-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/f6da53711b133cb63359a3a6afa680d8debcc7de-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f6da53711b133cb63359a3a6afa680d8debcc7de-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "D3",
      href: "https://d3.inc/",
      desc: "Bringing domains on-chain",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/0220e8ec8bf919b30cff3cc8efe9fa5c9957fc96-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0220e8ec8bf919b30cff3cc8efe9fa5c9957fc96-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/0220e8ec8bf919b30cff3cc8efe9fa5c9957fc96-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0220e8ec8bf919b30cff3cc8efe9fa5c9957fc96-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Dework",
      href: "https://dework.xyz/",
      desc: "Web3-native project management",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/56e417d401529ce040d4e2a65b314294d570f20d-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/56e417d401529ce040d4e2a65b314294d570f20d-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/56e417d401529ce040d4e2a65b314294d570f20d-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/56e417d401529ce040d4e2a65b314294d570f20d-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "dYdX",
      href: "https://dydx.exchange/",
      desc: "Decentralized perpetuals exchange",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a33ea3d6b87f1786b2e24128695654ed00e13adb-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a33ea3d6b87f1786b2e24128695654ed00e13adb-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a33ea3d6b87f1786b2e24128695654ed00e13adb-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a33ea3d6b87f1786b2e24128695654ed00e13adb-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Ellipsis Labs",
      href: "https://ellipsislabs.xyz/",
      desc: "Orderbook-based exchange on Solana",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/f1db56378a89a67870216ef69d15bd1458382336-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f1db56378a89a67870216ef69d15bd1458382336-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/f1db56378a89a67870216ef69d15bd1458382336-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f1db56378a89a67870216ef69d15bd1458382336-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Euler",
      href: "https://www.euler.finance/",
      desc: "Permissionless lending protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/f2bd877aa6d93d8015e35dd1c4387d500af9ca46-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f2bd877aa6d93d8015e35dd1c4387d500af9ca46-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/f2bd877aa6d93d8015e35dd1c4387d500af9ca46-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f2bd877aa6d93d8015e35dd1c4387d500af9ca46-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Exponential",
      href: "https://exponential.fi/",
      desc: "DeFi investment discovery platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/163089480b9df33befe937292d50719966f9c946-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/163089480b9df33befe937292d50719966f9c946-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/163089480b9df33befe937292d50719966f9c946-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/163089480b9df33befe937292d50719966f9c946-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Farcaster",
      href: "https://www.farcaster.xyz/",
      desc: "Decentralized social network",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/f5bdbae12937d8ee870ce6303ce96fca4c43d90c-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f5bdbae12937d8ee870ce6303ce96fca4c43d90c-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/f5bdbae12937d8ee870ce6303ce96fca4c43d90c-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f5bdbae12937d8ee870ce6303ce96fca4c43d90c-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Fireblocks",
      href: "https://www.fireblocks.com/",
      desc: "Crypto wallet as a service",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a3eba30769563cf95c69b315cb6700867ed50504-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Flashbots",
      href: "https://www.flashbots.net/",
      desc: "MEV infrastructure and research",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c706f50ee31c242a99f941e6f5c4b6a59d8f9444-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Fractal",
      href: "https://www.fractal.is/",
      desc: "Gaming NFT marketplace",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/c8ae845053e14b4fbc314971af902f23f728813e-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c8ae845053e14b4fbc314971af902f23f728813e-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/c8ae845053e14b4fbc314971af902f23f728813e-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c8ae845053e14b4fbc314971af902f23f728813e-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "friend.tech",
      href: "https://www.friend.tech/",
      desc: "New social experiences",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/db4e1ea95f2a1799ada4c3782407bf0731b0b505-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/db4e1ea95f2a1799ada4c3782407bf0731b0b505-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/db4e1ea95f2a1799ada4c3782407bf0731b0b505-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/db4e1ea95f2a1799ada4c3782407bf0731b0b505-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Gauntlet",
      href: "https://www.gauntlet.xyz/",
      desc: "DeFi risk management",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/90d882b970502811c97f80a0cec7aa39d86792c3-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/90d882b970502811c97f80a0cec7aa39d86792c3-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/90d882b970502811c97f80a0cec7aa39d86792c3-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/90d882b970502811c97f80a0cec7aa39d86792c3-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Genesis Digital Assets",
      href: "https://genesisdigitalassets.com/",
      desc: "Bitcoin mining company",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a16e8f799d413991d1054bb7742bfd9f607724c6-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a16e8f799d413991d1054bb7742bfd9f607724c6-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a16e8f799d413991d1054bb7742bfd9f607724c6-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a16e8f799d413991d1054bb7742bfd9f607724c6-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Mad Realities",
      href: "https://madrealities.xyz/",
      desc: "Decentralized entertainment network",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Magic Eden",
      href: "https://magiceden.io/",
      desc: "NFT marketplace",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/0c73627df157e8e468b59ed8c341761703143a5c-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0c73627df157e8e468b59ed8c341761703143a5c-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/0c73627df157e8e468b59ed8c341761703143a5c-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0c73627df157e8e468b59ed8c341761703143a5c-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Maker (MKR)",
      href: "https://makerdao.com/",
      desc: "Stablecoin protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/14f7123beddfbe709f7923a7c2f5ac9df86d39bb-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/14f7123beddfbe709f7923a7c2f5ac9df86d39bb-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/14f7123beddfbe709f7923a7c2f5ac9df86d39bb-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/14f7123beddfbe709f7923a7c2f5ac9df86d39bb-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Matrixport",
      href: "https://www.matrixport.com/",
      desc: "Crypto financial services platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/e1b657d05221a5c85f0165c90d4eb344982a9e50-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e1b657d05221a5c85f0165c90d4eb344982a9e50-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/e1b657d05221a5c85f0165c90d4eb344982a9e50-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e1b657d05221a5c85f0165c90d4eb344982a9e50-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "MetaDAO",
      href: "https://metadao.fi/",
      desc: "Markets for decision-making",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/c327448a314b813629b0c416598aa8d269b01c41-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c327448a314b813629b0c416598aa8d269b01c41-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/c327448a314b813629b0c416598aa8d269b01c41-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c327448a314b813629b0c416598aa8d269b01c41-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Mesh Connect",
      href: "https://www.meshconnect.com/",
      desc: "seamless crypto payments",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/f02e3b3b3721ecaac12aad8f770d2a257733609c-200x200.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f02e3b3b3721ecaac12aad8f770d2a257733609c-200x200.jpg&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/f02e3b3b3721ecaac12aad8f770d2a257733609c-200x200.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/f02e3b3b3721ecaac12aad8f770d2a257733609c-200x200.jpg&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Monad",
      href: "https://www.monad.xyz/",
      desc: "Parallel EVM blockchain",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/ef619a9910857e48ff3024383b447e9d9a68f12f-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ef619a9910857e48ff3024383b447e9d9a68f12f-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/ef619a9910857e48ff3024383b447e9d9a68f12f-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ef619a9910857e48ff3024383b447e9d9a68f12f-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Moonpay",
      href: "https://www.moonpay.com/",
      desc: "Crypto payments infrastructure",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/8ca42f6ecccee0d879832657f7d4debfea96e5e2-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/8ca42f6ecccee0d879832657f7d4debfea96e5e2-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/8ca42f6ecccee0d879832657f7d4debfea96e5e2-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/8ca42f6ecccee0d879832657f7d4debfea96e5e2-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Noble",
      href: "https://www.noble.xyz/",
      desc: "Stablecoin issuance protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/b84f37605f243106db7205c3ae964ef094215c80-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b84f37605f243106db7205c3ae964ef094215c80-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/b84f37605f243106db7205c3ae964ef094215c80-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b84f37605f243106db7205c3ae964ef094215c80-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Nous Research",
      href: "https://nousresearch.com/",
      desc: "Decentralized AI training",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/2e097fd657519ba61d97e6e46ef6ca78ff544e88-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2e097fd657519ba61d97e6e46ef6ca78ff544e88-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/2e097fd657519ba61d97e6e46ef6ca78ff544e88-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2e097fd657519ba61d97e6e46ef6ca78ff544e88-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "O(1) Labs",
      href: "https://o1labs.org/",
      desc: "Crypto computing system",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/2d92d435ce247f37cefe3c41a9a2804c76a5cf3d-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2d92d435ce247f37cefe3c41a9a2804c76a5cf3d-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/2d92d435ce247f37cefe3c41a9a2804c76a5cf3d-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2d92d435ce247f37cefe3c41a9a2804c76a5cf3d-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "OpenSea",
      href: "https://opensea.io/",
      desc: "NFT marketplace",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/74ac7afce6f89bc1e8bf21b20eea2f164af8004f-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/74ac7afce6f89bc1e8bf21b20eea2f164af8004f-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/74ac7afce6f89bc1e8bf21b20eea2f164af8004f-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/74ac7afce6f89bc1e8bf21b20eea2f164af8004f-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Optimism",
      href: "https://www.optimism.io/",
      desc: "Layer 2 blockchain",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/01aa9069dfe2ad8473d4e759c3e8aca0bb9716d0-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Opyn",
      href: "https://www.opyn.co/",
      desc: "DeFi options protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/9030689a8e584851dacd82195e46e5706c920ca7-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/9030689a8e584851dacd82195e46e5706c920ca7-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/9030689a8e584851dacd82195e46e5706c920ca7-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/9030689a8e584851dacd82195e46e5706c920ca7-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Osmosis",
      href: "https://osmosis.zone/",
      desc: "Cross-chain AMM protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/11754f5de988132e964f8a645f4aca676d564aeb-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/11754f5de988132e964f8a645f4aca676d564aeb-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/11754f5de988132e964f8a645f4aca676d564aeb-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/11754f5de988132e964f8a645f4aca676d564aeb-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Parallel",
      href: "https://parallel.life/",
      desc: "Sci-fi NFT card game",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/e48d749c31364089d426fb1d301315aa76334d77-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e48d749c31364089d426fb1d301315aa76334d77-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/e48d749c31364089d426fb1d301315aa76334d77-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e48d749c31364089d426fb1d301315aa76334d77-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Gitcoin",
      href: "https://www.gitcoin.co/",
      desc: "Developer community platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a71cb0a0fd9b29cfff7b1717be06783d876947a0-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a71cb0a0fd9b29cfff7b1717be06783d876947a0-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a71cb0a0fd9b29cfff7b1717be06783d876947a0-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a71cb0a0fd9b29cfff7b1717be06783d876947a0-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "GTE",
      href: "https://www.gte.xyz/",
      desc: "Decentralized global exchange",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/d230aedbff13a6be399b311b1777131b32f2a5a8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d230aedbff13a6be399b311b1777131b32f2a5a8-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/d230aedbff13a6be399b311b1777131b32f2a5a8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d230aedbff13a6be399b311b1777131b32f2a5a8-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Hang",
      href: "https://www.hang.com/",
      desc: "Web3 powered platform for brand loyalty",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/313d85af4fb93dc58798cf59b2af37af412dd7fd-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/313d85af4fb93dc58798cf59b2af37af412dd7fd-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/313d85af4fb93dc58798cf59b2af37af412dd7fd-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/313d85af4fb93dc58798cf59b2af37af412dd7fd-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Harmonic",
      href: "https://harmonic.fun/",
      desc: "Mathematical reasoning engine",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/9ae6e3f679de3ba99fec5fc012132f8764394f57-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/9ae6e3f679de3ba99fec5fc012132f8764394f57-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/9ae6e3f679de3ba99fec5fc012132f8764394f57-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/9ae6e3f679de3ba99fec5fc012132f8764394f57-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Irreducible",
      href: "https://www.irreducible.com/",
      desc: "Hardware acceleration for zero-knowledge proofs",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/3592cb8f0df5888b7ebd587642be70da8c4a1afd-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/3592cb8f0df5888b7ebd587642be70da8c4a1afd-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/3592cb8f0df5888b7ebd587642be70da8c4a1afd-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/3592cb8f0df5888b7ebd587642be70da8c4a1afd-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Ithaca",
      href: "https://www.ithaca.xyz/",
      desc: "Open source crypto development",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/ece7cdeb7af73ae02331c5e8dc1a0c8629a14a43-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ece7cdeb7af73ae02331c5e8dc1a0c8629a14a43-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/ece7cdeb7af73ae02331c5e8dc1a0c8629a14a43-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ece7cdeb7af73ae02331c5e8dc1a0c8629a14a43-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Jambo",
      href: "https://www.jambo.technology/",
      desc: "Web3 technology ecosystem for emerging markets",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/b6d5ba0a97e906f46774f356ac67d6f3818cfb09-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b6d5ba0a97e906f46774f356ac67d6f3818cfb09-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/b6d5ba0a97e906f46774f356ac67d6f3818cfb09-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b6d5ba0a97e906f46774f356ac67d6f3818cfb09-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Kalshi",
      href: "https://kalshi.com/",
      desc: "Prediction market platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5dad39216c8b4ef570b0e63ef38add60a65cb5b8-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Keep Network",
      href: "https://keep.network/",
      desc: "Blockchain privacy solution",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/84aa52716d715ccc6973c2cb5dd829061c5a0f70-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/84aa52716d715ccc6973c2cb5dd829061c5a0f70-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/84aa52716d715ccc6973c2cb5dd829061c5a0f70-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/84aa52716d715ccc6973c2cb5dd829061c5a0f70-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Kuru Labs",
      href: "https://linktr.ee/kuru.io",
      desc: "Onchain orderbook for Monad",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/730c284b16217e316a2e1f13d696f2f405b20709-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/730c284b16217e316a2e1f13d696f2f405b20709-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/730c284b16217e316a2e1f13d696f2f405b20709-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/730c284b16217e316a2e1f13d696f2f405b20709-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Lido",
      href: "https://lido.fi/",
      desc: "Decentralized Ethereum staking protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/7622cb948a69b592d250a8c9a07e5d15a3d513fa-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7622cb948a69b592d250a8c9a07e5d15a3d513fa-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/7622cb948a69b592d250a8c9a07e5d15a3d513fa-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7622cb948a69b592d250a8c9a07e5d15a3d513fa-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Lightspark",
      href: "https://www.lightspark.com/",
      desc: "Bitcoin payment infrastructure",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/19466a7825f00f9ee2348aef949e549ebee92887-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/19466a7825f00f9ee2348aef949e549ebee92887-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/19466a7825f00f9ee2348aef949e549ebee92887-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/19466a7825f00f9ee2348aef949e549ebee92887-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Limit Break",
      href: "https://limitbreak.com/",
      desc: "Mobile crypto gaming company",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/d38c73eb7df501aa277a0f580c417973256e05a4-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d38c73eb7df501aa277a0f580c417973256e05a4-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/d38c73eb7df501aa277a0f580c417973256e05a4-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d38c73eb7df501aa277a0f580c417973256e05a4-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Lootrush",
      href: "https://www.lootrush.com/",
      desc: "Gaming NFT marketplace",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/a854b0b79efb6ce5995d0654ca7bde6d9335fcb1-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a854b0b79efb6ce5995d0654ca7bde6d9335fcb1-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/a854b0b79efb6ce5995d0654ca7bde6d9335fcb1-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a854b0b79efb6ce5995d0654ca7bde6d9335fcb1-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Mad Realities",
      href: "https://madrealities.xyz/",
      desc: "Decentralized entertainment network",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e7d9c3e2d20035bceedbf06c817363b01a2e0d01-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Phantom",
      href: "https://phantom.app/",
      desc: "Web3 wallet",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b794e56813c9f220bda4e6cb80d91a0f48680b98-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Privy",
      href: "https://www.privy.io/",
      desc: "Embedded wallet infrastructure",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/103f2c7d7d930f46d3d800e23ac28f8becb80c19-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Rain",
      href: "https://www.rain.com/",
      desc: "Crypto exchange in EMEA",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/d83a7a9d1a2e79c09289a185ca622ccc184d1db1-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d83a7a9d1a2e79c09289a185ca622ccc184d1db1-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/d83a7a9d1a2e79c09289a185ca622ccc184d1db1-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d83a7a9d1a2e79c09289a185ca622ccc184d1db1-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Reflexer Labs",
      href: "https://reflexer.finance/",
      desc: "Stablecoin protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/36ea7fda6fd16dde72eeb9406612ad548e012493-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/36ea7fda6fd16dde72eeb9406612ad548e012493-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/36ea7fda6fd16dde72eeb9406612ad548e012493-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/36ea7fda6fd16dde72eeb9406612ad548e012493-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Ribbon Finance",
      href: "https://www.ribbon.finance/",
      desc: "Decentralized structured products",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/382f8fea18eec8230df41f8d1b24d9a082a44a94-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/382f8fea18eec8230df41f8d1b24d9a082a44a94-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/382f8fea18eec8230df41f8d1b24d9a082a44a94-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/382f8fea18eec8230df41f8d1b24d9a082a44a94-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Royal",
      href: "https://royal.io/",
      desc: "Music investment platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/68219debe49e8e72254f82e2a40569f4d9b4dc57-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/68219debe49e8e72254f82e2a40569f4d9b4dc57-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/68219debe49e8e72254f82e2a40569f4d9b4dc57-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/68219debe49e8e72254f82e2a40569f4d9b4dc57-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Shadow",
      href: "https://www.shadow.xyz/",
      desc: "End-to-end data infrastructure",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/7eb36281db8403144f351cb5fce03979f2ddaed2-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7eb36281db8403144f351cb5fce03979f2ddaed2-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/7eb36281db8403144f351cb5fce03979f2ddaed2-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7eb36281db8403144f351cb5fce03979f2ddaed2-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Sky Mavis",
      href: "https://skymavis.com/",
      desc: "Play-to-earn gaming",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/2fff824701840fc93289d1f5b38534137982d1d8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2fff824701840fc93289d1f5b38534137982d1d8-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/2fff824701840fc93289d1f5b38534137982d1d8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/2fff824701840fc93289d1f5b38534137982d1d8-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Sorella Labs",
      href: "https://sorellalabs.xyz/",
      desc: "Sustainable onchain markets mitigating MEV",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/30282ad3e32ec30d4ccd41d47a606df227fd06d8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/30282ad3e32ec30d4ccd41d47a606df227fd06d8-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/30282ad3e32ec30d4ccd41d47a606df227fd06d8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/30282ad3e32ec30d4ccd41d47a606df227fd06d8-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Spacemesh",
      href: "https://spacemesh.io/",
      desc: "Blockmesh operating system",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/1a93ce5e5dedf9dd959614d7a9832fc036119af4-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/1a93ce5e5dedf9dd959614d7a9832fc036119af4-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/1a93ce5e5dedf9dd959614d7a9832fc036119af4-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/1a93ce5e5dedf9dd959614d7a9832fc036119af4-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Starkware",
      href: "https://starkware.co/",
      desc: "ZK-based Layer 2 blockchain",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/44d9ed4e8ce20390e837d72d3b4d2d8d8ace13ea-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/44d9ed4e8ce20390e837d72d3b4d2d8d8ace13ea-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/44d9ed4e8ce20390e837d72d3b4d2d8d8ace13ea-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/44d9ed4e8ce20390e837d72d3b4d2d8d8ace13ea-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Succinct",
      href: "https://succinct.xyz/",
      desc: "Zero-knowledge infrastructure",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/e558788c2a31025bf49b99f65613d73bcda948a8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e558788c2a31025bf49b99f65613d73bcda948a8-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/e558788c2a31025bf49b99f65613d73bcda948a8-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e558788c2a31025bf49b99f65613d73bcda948a8-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Symbiotic",
      href: "https://symbiotic.fi/",
      desc: "Shared security protocol & marketplace",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/5cad4940ea181f6966c6623e479dbb8d61351b42-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5cad4940ea181f6966c6623e479dbb8d61351b42-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/5cad4940ea181f6966c6623e479dbb8d61351b42-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5cad4940ea181f6966c6623e479dbb8d61351b42-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Synthetix (SNX)",
      href: "https://synthetix.io/",
      desc: "Synthetic derivatives protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/96c0bbfbb7b2b4834b8d84dbba7c516909db9426-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/96c0bbfbb7b2b4834b8d84dbba7c516909db9426-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/96c0bbfbb7b2b4834b8d84dbba7c516909db9426-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/96c0bbfbb7b2b4834b8d84dbba7c516909db9426-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "TaxBit",
      href: "https://taxbit.com/",
      desc: "Tax & accounting software",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/ed57a09af0e4b19aec742517c02aae0bf84a3b33-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ed57a09af0e4b19aec742517c02aae0bf84a3b33-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/ed57a09af0e4b19aec742517c02aae0bf84a3b33-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ed57a09af0e4b19aec742517c02aae0bf84a3b33-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Uniswap",
      href: "https://uniswap.org/",
      desc: "Decentralized crypto exchange protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7f011c2f252d76c83b3d94407dec8e504564d301-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Utopia Labs",
      href: "https://utopialabs.com/",
      desc: "Crypto payments & treasury management",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/af289ae924d141266c23437a6bd5d4ed61f73178-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/af289ae924d141266c23437a6bd5d4ed61f73178-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/af289ae924d141266c23437a6bd5d4ed61f73178-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/af289ae924d141266c23437a6bd5d4ed61f73178-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Vana",
      href: "https://www.vana.org/",
      desc: "Network for user-owned data",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/bf77cb78312b53362763a9a5a3e394901af3550c-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/bf77cb78312b53362763a9a5a3e394901af3550c-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/bf77cb78312b53362763a9a5a3e394901af3550c-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/bf77cb78312b53362763a9a5a3e394901af3550c-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Wildcard",
      href: "https://www.wildcardgame.com/",
      desc: "Web3 game",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/c8e37965deee0851a4013a28590748a044a25acc-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c8e37965deee0851a4013a28590748a044a25acc-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/c8e37965deee0851a4013a28590748a044a25acc-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/c8e37965deee0851a4013a28590748a044a25acc-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Yield",
      href: "https://yieldprotocol.com/",
      desc: "Decentralized fixed-rate borrowing & lending protocol",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/ee967024a228d9d7472fc38a8f8f246bbfddf734-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ee967024a228d9d7472fc38a8f8f246bbfddf734-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/ee967024a228d9d7472fc38a8f8f246bbfddf734-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/ee967024a228d9d7472fc38a8f8f246bbfddf734-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
    {
      title: "Zora",
      href: "https://zora.co/",
      desc: "NFT-based social platform",
      imgLarge:
        "https://cdn.sanity.io/images/dgybcd83/production/0217dd004e44bbc2ee03e5620a9482c19d33db70-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0217dd004e44bbc2ee03e5620a9482c19d33db70-800x800.png&w=1000",
      imgSmall:
        "https://cdn.sanity.io/images/dgybcd83/production/0217dd004e44bbc2ee03e5620a9482c19d33db70-800x800.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/0217dd004e44bbc2ee03e5620a9482c19d33db70-800x800.png&w=200&h=200&fit=crop&dpr=3",
    },
  ];

  return (
    <div className="relative min-h-svh">
      <div>
        {/* In-flow grid: left sidebar below navbar, content starts to the right */}
        <div className="px-container-mobile md:px-container-desktop my-10 md:my-12 lg:mt-18">
          <div className="grid grid-cols-12 gap-y-3 gap-x-3">
            {/* Sidebar */}
            <aside className="hidden md:block col-span-3 md:pr-4">
              <div className="sticky top-12 lg:top-18 pointer-events-auto">
                <div className="font-mono text-mono-12 flex flex-col gap-1">
                  <p className="uppercase font-medium">Portfolio</p>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a className="link-tag-push" href="/portfolio#featured">
                        <span>Featured</span>
                      </a>
                    </li>
                    <li>
                      <a className="link-tag-push" href="/portfolio#investments">
                        <span>Investments</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="col-span-12 md:col-span-9 max-w-[1000px]">
              {/* Featured */}
              <section id="featured" className="my-10 md:my-12 lg:mt-0">
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-mono text-mono-12 uppercase font-medium">Featured</h2>
                    <div className="grid lg:grid-cols-2">
                      <div className="rich-text line-break font-mono text-mono-12">
                        <p>
                          We invest in, build, and contribute to companies and protocols with as little as $1M and as much as
                          $100M+.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-x-3 gap-y-4 grid-cols-2 lg:grid-cols-4">
                    {featured.map((f) => (
                      <LogoCard key={f.title} {...f} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Investments */}
              <section id="investments" className="my-10 md:my-12 lg:mt-18">
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-mono text-mono-12 uppercase font-medium">Investments</h2>
                  </div>

                  <div className="grid gap-x-3 gap-y-4 grid-cols-2 lg:grid-cols-4">
                    {investments.map((i) => (
                      <LogoCard key={i.title} {...i} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
