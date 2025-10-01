import React from "react";

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  stars: number;
  contributors: number;
  logo: string;
  links: Array<{
    label: string;
    url: string;
  }>;
}

export default function OpenSource() {
  const projects: Project[] = [
    {
      name: "Foundry",
      description: "Blazing fast, portable and modular toolkit for Ethereum application development written in Rust",
      githubUrl: "https://github.com/foundry-rs/",
      stars: 9339,
      contributors: 555,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/48996e638511204e980132820c1ce65b879f2605-600x600.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Blog", url: "https://www.paradigm.xyz/2021/12/introducing-the-foundry-ethereum-development-toolbox" },
        { label: "Github", url: "https://github.com/foundry-rs/" },
        { label: "Docs", url: "https://book.getfoundry.sh/" },
        { label: "Website", url: "https://getfoundry.sh/" }
      ]
    },
    {
      name: "Reth",
      description: "Modular, contributor-friendly and blazing-fast implementation of the Ethereum protocol, written in Rust",
      githubUrl: "https://github.com/paradigmxyz/reth",
      stars: 4897,
      contributors: 632,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/455718ec5e7c161274d22e3199a8aa5bc3f64d8c-600x600.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Blog", url: "/" },
        { label: "Github", url: "https://github.com/paradigmxyz/reth" }
      ]
    },
    {
      name: "Alloy",
      description: "Stable, well-tested, and performant building blocks for Ethereum, in Rust",
      githubUrl: "https://github.com/alloy-rs",
      stars: 980,
      contributors: 226,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/60cb057e2d8234e108d4ad7f271b9e093784ee5e-600x600.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Blog", url: "https://www.paradigm.xyz/2023/06/alloy" },
        { label: "Github", url: "https://github.com/alloy-rs" }
      ]
    },
    {
      name: "Artemis",
      description: "Framework for MEV bots in Rust, designed to be simple, modular, and fast",
      githubUrl: "https://github.com/paradigmxyz/artemis",
      stars: 2766,
      contributors: 28,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/adbea22352db9456ea6d36b2cb070968db0f230b-600x600.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Blog", url: "https://www.paradigm.xyz/2023/05/artemis" },
        { label: "Github", url: "https://github.com/paradigmxyz/artemis" }
      ]
    },
    {
      name: "Cryo",
      description: "Easiest way to extract blockchain data to Parquet, CSV, JSON, or a Python dataframe",
      githubUrl: "https://github.com/paradigmxyz/cryo",
      stars: 1429,
      contributors: 38,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/9b6ed82eb8843cf4724bb5f7e656d0348d72be52-600x600.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Github", url: "https://github.com/paradigmxyz/cryo" }
      ]
    },
    {
      name: "Solar",
      description: "Blazingly fast, modular and contributor friendly Solidity compiler, written in Rust.",
      githubUrl: "https://github.com/paradigmxyz/solar",
      stars: 454,
      contributors: 28,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/1e3814b7ae24cb6aeef2fed60358aa6f1c887a7a-1356x1356.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Blog", url: "https://www.paradigm.xyz/2024/11/solar" },
        { label: "Github", url: "https://github.com/paradigmxyz/solar" }
      ]
    },
    {
      name: "Flood",
      description: "Load testing tool for benchmarking EVM nodes over RPC",
      githubUrl: "https://github.com/paradigmxyz/flood",
      stars: 353,
      contributors: 17,
      logo: "https://cdn.sanity.io/images/dgybcd83/production/01d5bc105f0acef87b6abbafbfc84c803fbe70b0-600x600.png?auto=format&q=75&w=200&h=200&fit=crop",
      links: [
        { label: "Blog", url: "https://www.paradigm.xyz/2023/06/flood" },
        { label: "Github", url: "https://github.com/paradigmxyz/flood" }
      ]
    }
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <>
      {/* Desktop */}
      <div className="hidden sm:grid grid-cols-5 md:col-span-7 gap-y-2 md:gap-y-0">
        <div className="grid col-span-1">
          <p className="col-span-1 font-mono font-medium uppercase text-mono-12">
            <a className="link-underline-hover" target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
              {project.name}
            </a>
          </p>
        </div>

        <div className="grid col-span-3">
          <div className="flex flex-col gap-1">
            <div className="rich-text line-break font-mono text-mono-12">
              <p>{project.description}</p>
            </div>

            <div className="flex flex-row gap-2 md:1 md:flex-col md:gap-[6px] lg:flex-row lg:gap-2 font-mono text-mono-12">
              <div className="flex flex-row gap-[8px] items-center">
                <span className="font-medium inline-flex items-center" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.69742 2.04086C6.80951 1.77137 7.19126 1.77137 7.30335 2.04086L8.5435 5.02254C8.59075 5.13615 8.69759 5.21378 8.82024 5.22361L12.0392 5.48167C12.3302 5.505 12.4481 5.86807 12.2265 6.05795L9.77394 8.15879C9.6805 8.23884 9.63969 8.36444 9.66824 8.48412L10.4175 11.6253C10.4852 11.9092 10.1764 12.1336 9.92731 11.9815L7.17142 10.2982C7.06642 10.234 6.93435 10.234 6.82935 10.2982L4.07345 11.9815C3.82437 12.1336 3.51553 11.9092 3.58325 11.6253L4.33253 8.48412C4.36108 8.36444 4.32027 8.23884 4.22683 8.15879L1.77431 6.05795C1.55264 5.86807 1.67061 5.505 1.96155 5.48167L5.18052 5.22361C5.30317 5.21378 5.41002 5.13615 5.45727 5.02254L6.69742 2.04086Z" stroke="#090909" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-semiBold inline-flex">{project.stars.toLocaleString()}</span>
                <span className="inline-flex">stars</span>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <span className="font-medium inline-flex items-center" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10.4995 10.9195C10.6439 10.9314 10.79 10.9375 10.9374 10.9375C11.5489 10.9375 12.136 10.8329 12.6818 10.6407C12.6855 10.5943 12.6874 10.5474 12.6874 10.5C12.6874 9.5335 11.9039 8.75 10.9374 8.75C10.5713 8.75 10.2314 8.86242 9.95049 9.05463M10.4995 10.9195C10.4996 10.9255 10.4996 10.9315 10.4996 10.9375C10.4996 11.0687 10.4923 11.1983 10.4783 11.3258C9.4535 11.9138 8.2658 12.25 6.99957 12.25C5.73335 12.25 4.54565 11.9138 3.52087 11.3258C3.5068 11.1983 3.49957 11.0687 3.49957 10.9375C3.49957 10.9315 3.49959 10.9255 3.49962 10.9196M10.4995 10.9195C10.4961 10.2332 10.2951 9.59357 9.95049 9.05463M9.95049 9.05463C9.32871 8.08219 8.23943 7.4375 6.99957 7.4375C5.75987 7.4375 4.6707 8.08203 4.04889 9.05428M4.04889 9.05428C3.76804 8.86228 3.42838 8.75 3.0625 8.75C2.096 8.75 1.3125 9.5335 1.3125 10.5C1.3125 10.5474 1.31438 10.5943 1.31808 10.6407C1.86386 10.8329 2.45097 10.9375 3.0625 10.9375C3.2097 10.9375 3.35548 10.9314 3.49962 10.9196M4.04889 9.05428C3.70415 9.5933 3.50306 10.2331 3.49962 10.9196M8.74957 3.9375C8.74957 4.904 7.96607 5.6875 6.99957 5.6875C6.03307 5.6875 5.24957 4.904 5.24957 3.9375C5.24957 2.971 6.03307 2.1875 6.99957 2.1875C7.96607 2.1875 8.74957 2.971 8.74957 3.9375ZM12.2496 5.6875C12.2496 6.41237 11.6619 7 10.9371 7C10.2122 7 9.62457 6.41237 9.62457 5.6875C9.62457 4.96263 10.2122 4.375 10.9371 4.375C11.6619 4.375 12.2496 4.96263 12.2496 5.6875ZM4.37457 5.6875C4.37457 6.41237 3.78695 7 3.06207 7C2.3372 7 1.74957 6.41237 1.74957 5.6875C1.74957 4.96263 2.3372 4.375 3.06207 4.375C3.78695 4.375 4.37457 4.96263 4.37457 5.6875Z" stroke="#090909" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-semiBold inline-flex">{project.contributors.toLocaleString()}</span>
                <span className="inline-flex">contributors</span>
              </div>
            </div>

            <div className="flex gap-1 flex-wrap relative z-1">
              {project.links.map((link) => (
                <a key={link.label} className="block button button-tag" target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid col-span-1 justify-self-end">
          <a className="link-underline-hover" target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
            <div className="flex-shrink-0 w-13 h-13 sm:w-8 md:w-9">
              <div className="image overflow-hidden block w-full aspect-square">
                <picture>
                  <img src={project.logo} alt={`${project.name} logo`} />
                </picture>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col gap-1">
        <a className="link-underline-hover" target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
          <div className="w-full bg-black flex justify-center min-h-[140px] items-center">
            <div className="h-fit w-fit">
              <div className="flex-shrink-0 w-13 h-13 pointer-events-none">
                <div className="image overflow-hidden block w-full aspect-square">
                  <picture>
                    <img src={project.logo} alt={`${project.name} logo`} />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </a>

        <div className="grid col-span-1">
          <p className="col-span-1 font-mono font-medium uppercase text-mono-12">
            <a className="link-underline-hover" target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
              {project.name}
            </a>
          </p>
        </div>

        <div className="grid col-span-3">
          <div className="flex flex-col gap-1">
            <div className="rich-text line-break font-mono text-mono-12">
              <p>{project.description}</p>
            </div>

            <div className="flex flex-row gap-2 md:1 md:flex-col md:gap-[6px] lg:flex-row lg:gap-2 font-mono text-mono-12">
              <div className="flex flex-row gap-[8px] items-center">
                <span className="font-medium inline-flex items-center" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.69742 2.04086C6.80951 1.77137 7.19126 1.77137 7.30335 2.04086L8.5435 5.02254C8.59075 5.13615 8.69759 5.21378 8.82024 5.22361L12.0392 5.48167C12.3302 5.505 12.4481 5.86807 12.2265 6.05795L9.77394 8.15879C9.6805 8.23884 9.63969 8.36444 9.66824 8.48412L10.4175 11.6253C10.4852 11.9092 10.1764 12.1336 9.92731 11.9815L7.17142 10.2982C7.06642 10.234 6.93435 10.234 6.82935 10.2982L4.07345 11.9815C3.82437 12.1336 3.51553 11.9092 3.58325 11.6253L4.33253 8.48412C4.36108 8.36444 4.32027 8.23884 4.22683 8.15879L1.77431 6.05795C1.55264 5.86807 1.67061 5.505 1.96155 5.48167L5.18052 5.22361C5.30317 5.21378 5.41002 5.13615 5.45727 5.02254L6.69742 2.04086Z" stroke="#090909" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-semiBold inline-flex">{project.stars.toLocaleString()}</span>
                <span className="inline-flex">stars</span>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <span className="font-medium inline-flex items-center" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10.4995 10.9195C10.6439 10.9314 10.79 10.9375 10.9374 10.9375C11.5489 10.9375 12.136 10.8329 12.6818 10.6407C12.6855 10.5943 12.6874 10.5474 12.6874 10.5C12.6874 9.5335 11.9039 8.75 10.9374 8.75C10.5713 8.75 10.2314 8.86242 9.95049 9.05463M10.4995 10.9195C10.4996 10.9255 10.4996 10.9315 10.4996 10.9375C10.4996 11.0687 10.4923 11.1983 10.4783 11.3258C9.4535 11.9138 8.2658 12.25 6.99957 12.25C5.73335 12.25 4.54565 11.9138 3.52087 11.3258C3.5068 11.1983 3.49957 11.0687 3.49957 10.9375C3.49957 10.9315 3.49959 10.9255 3.49962 10.9196M10.4995 10.9195C10.4961 10.2332 10.2951 9.59357 9.95049 9.05463M9.95049 9.05463C9.32871 8.08219 8.23943 7.4375 6.99957 7.4375C5.75987 7.4375 4.6707 8.08203 4.04889 9.05428M4.04889 9.05428C3.76804 8.86228 3.42838 8.75 3.0625 8.75C2.096 8.75 1.3125 9.5335 1.3125 10.5C1.3125 10.5474 1.31438 10.5943 1.31808 10.6407C1.86386 10.8329 2.45097 10.9375 3.0625 10.9375C3.2097 10.9375 3.35548 10.9314 3.49962 10.9196M4.04889 9.05428C3.70415 9.5933 3.50306 10.2331 3.49962 10.9196M8.74957 3.9375C8.74957 4.904 7.96607 5.6875 6.99957 5.6875C6.03307 5.6875 5.24957 4.904 5.24957 3.9375C5.24957 2.971 6.03307 2.1875 6.99957 2.1875C7.96607 2.1875 8.74957 2.971 8.74957 3.9375ZM12.2496 5.6875C12.2496 6.41237 11.6619 7 10.9371 7C10.2122 7 9.62457 6.41237 9.62457 5.6875C9.62457 4.96263 10.2122 4.375 10.9371 4.375C11.6619 4.375 12.2496 4.96263 12.2496 5.6875ZM4.37457 5.6875C4.37457 6.41237 3.78695 7 3.06207 7C2.3372 7 1.74957 6.41237 1.74957 5.6875C1.74957 4.96263 2.3372 4.375 3.06207 4.375C3.78695 4.375 4.37457 4.96263 4.37457 5.6875Z" stroke="#090909" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-semiBold inline-flex">{project.contributors.toLocaleString()}</span>
                <span className="inline-flex">contributors</span>
              </div>
            </div>

            <div className="flex gap-1 flex-wrap relative z-1">
              {project.links.map((link) => (
                <a key={link.label} className="block button button-tag" target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative min-h-svh">
      <div>
        <div className="px-container-mobile md:px-container-desktop my-10 md:my-12 lg:my-18">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 md:col-start-5 xl:col-start-4 xl:col-span-5 max-w-[1000px]">

              {/* Header / Intro */}
              <div className="flex flex-col gap-4 sm:gap-8">
                <div className="grid md:grid-cols-1 gap-y-1 gap-x-3 xl:gap-x-6">
                  <h1 className="text-mono-12 font-mono sm:hidden uppercase font-medium">Open Source</h1>
                  <div className="rich-text rich-text-page line-break font-mono text-mono-12 md:text-mono-13">
                    <p>Paradigm builds and contributes to projects that advance the frontier. We believe in doing so even when there may not be a direct commercial incentive.</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
