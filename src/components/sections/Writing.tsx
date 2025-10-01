"use client";

import React, { useState } from "react";

interface Post {
  title: string;
  href: string;
  excerpt: string;
  date: string;
  authors: Array<{
    name: string;
    href?: string;
    external?: boolean;
  }>;
  image: {
    src: string;
    srcSet?: string;
  };
}

export default function Writing() {
  const [activeCategory, setActiveCategory] = useState("Research");

  const categories = ["Research", "Policy", "Commentary", "News"];

  const featuredPosts: Post[] = [
    {
      title: "Introducing the 2025 Paradigm Fellowship",
      href: "/2025/06/introducing-the-2025-paradigm-fellowship",
      excerpt: "We're excited to announce our third annual Paradigm Fellowship: a program for students, recent grads, and dropouts who are curious techno-optimists – drawn to markets, incentive design, and shaping how money moves online.",
      date: "06.16.2025",
      authors: [
        { name: "Caitlin Pintavorn", href: "/team/caitlin-pintavorn" },
        { name: "Ricardo de Arruda", href: "/team/ricardo-de-arruda" }
      ],
      image: {
        src: "https://cdn.sanity.io/images/dgybcd83/production/9e0ef3172d452149feb5ab5ec5f6048390d4adc3-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/9e0ef3172d452149feb5ab5ec5f6048390d4adc3-2400x1350.png&w=200&h=200&dpr=2&fit=crop",
        srcSet: "https://cdn.sanity.io/images/dgybcd83/production/9e0ef3172d452149feb5ab5ec5f6048390d4adc3-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/9e0ef3172d452149feb5ab5ec5f6048390d4adc3-2400x1350.png&w=400&h=225&dpr=2&fit=crop"
      }
    },
    {
      title: "Bitcoin for the Sovereign",
      href: "/2024/11/btc-for-the-sovereign",
      excerpt: "Why the game theory for sovereign adoption of BTC has changed.",
      date: "11.14.2024",
      authors: [
        { name: "Matt Huang", href: "/team/matt-huang" }
      ],
      image: {
        src: "https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png&w=200&h=200&dpr=2&fit=crop",
        srcSet: "https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png&w=400&h=225&dpr=2&fit=crop"
      }
    },
    {
      title: "Announcing Paradigm's Third Fund",
      href: "/2024/06/paradigms-third-fund",
      excerpt: "Paradigm has raised our third fund: an $850M venture fund focused on crypto projects at the earliest stages.",
      date: "06.13.2024",
      authors: [
        { name: "Matt Huang", href: "/team/matt-huang" }
      ],
      image: {
        src: "https://cdn.sanity.io/images/dgybcd83/production/b1638ea8d5baee0598d7395678707bf9ab06a4a9-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b1638ea8d5baee0598d7395678707bf9ab06a4a9-2400x1350.png&w=200&h=200&dpr=2&fit=crop",
        srcSet: "https://cdn.sanity.io/images/dgybcd83/production/b1638ea8d5baee0598d7395678707bf9ab06a4a9-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/b1638ea8d5baee0598d7395678707bf9ab06a4a9-2400x1350.png&w=400&h=225&dpr=2&fit=crop"
      }
    }
  ];

  const allPosts: Post[] = [
    {
      title: "Opportunity Markets",
      href: "/2025/08/opportunity-markets",
      excerpt: "Introducing opportunity markets, private prediction markets where those who spot opportunities get paid by those who can act on them",
      date: "08.18.2025",
      authors: [
        { name: "Dave White", href: "/team/dave-white" },
        { name: "Matt Liston", href: "https://x.com/no__________end", external: true }
      ],
      image: {
        src: "https://cdn.sanity.io/images/dgybcd83/production/39a7a63dd174847da21b57482bcfc328f631c2bd-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/39a7a63dd174847da21b57482bcfc328f631c2bd-2400x1350.png&w=200&h=200&dpr=2&fit=crop",
        srcSet: "https://cdn.sanity.io/images/dgybcd83/production/39a7a63dd174847da21b57482bcfc328f631c2bd-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/39a7a63dd174847da21b57482bcfc328f631c2bd-2400x1350.png&w=400&h=225&fit=crop&dpr=2"
      }
    },
    {
      title: "Quantum Markets",
      href: "/2025/06/quantum-markets",
      excerpt: "A capital efficient mechanism for scaling futarchy.",
      date: "06.12.2025",
      authors: [
        { name: "Alpin Yukseloglu", href: "/team/alpin-yukseloglu" },
        { name: "Sofiane Larbi", href: "/team/sofiane-larbi" }
      ],
      image: {
        src: "https://cdn.sanity.io/images/dgybcd83/production/acaaad9e7ea30a5192c9483cf6fda1daef6d6126-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/acaaad9e7ea30a5192c9483cf6fda1daef6d6126-2400x1350.png&w=200&h=200&dpr=2&fit=crop",
        srcSet: "https://cdn.sanity.io/images/dgybcd83/production/acaaad9e7ea30a5192c9483cf6fda1daef6d6126-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/acaaad9e7ea30a5192c9483cf6fda1daef6d6126-2400x1350.png&w=400&h=225&fit=crop&dpr=2"
      }
    }
  ];

  const PostCard = ({ post, featured = false }: { post: Post; featured?: boolean }) => (
    <div className="flex flex-col gap-1 md:gap-2">
      <div className={`flex ${featured ? 'flex-col sm:flex-row' : 'flex-row-reverse md:flex-row'} justify-between items-start gap-2 lg:gap-4 relative`}>
        <a className={featured ? "w-full sm:w-12 lg:w-20" : ""} href={post.href}>
          <div className={`${featured ? 'lg:flex-shrink-0 w-full sm:w-12 lg:w-20' : 'flex-shrink-0 w-10 md:w-12 lg:w-20'} post-summary__image cursor-pointer`}>
            <div className={`image overflow-hidden block w-full ${featured ? 'aspect-[16/9] sm:aspect-square lg:aspect-[16/9]' : 'aspect-square lg:aspect-[16/9]'}`}>
              <picture>
                {post.image.srcSet && (
                  <source srcSet={post.image.srcSet} media="(min-width: 600px)" />
                )}
                <img src={post.image.src} alt={post.title} />
              </picture>
            </div>
          </div>
        </a>

        <div className="flex-grow">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-mono-12 uppercase font-medium md:text-mono-18 md:normal-case md:font-normal line-clamp-3">
              <a className="link-underline-hover" href={post.href}>{post.title}</a>
            </p>
            <a href={post.href}>
              <p className="text-serif-14 line-clamp-3">{post.excerpt}</p>
            </a>
            
            {featured ? (
              <p className="font-mono text-mono-12 gap-1 md:truncate w-full md:max-w-[310px] xl:max-w-[320px] 2xl:max-w-[440px] 3xl:max-w-[540px] justify-between">
                <span>{post.date}</span>
                <span className="px-1">|</span>
                {post.authors.map((author, index) => (
                  <span key={author.name} className={`content-none ${index < post.authors.length - 1 ? 'after:content-[","] pr-1' : ''} ${index === 0 ? 'before:content-["By_"]' : ''}`}>
                    {author.href ? (
                      <a 
                        className="link-underline-hover" 
                        href={author.href}
                        {...(author.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {author.name}
                      </a>
                    ) : (
                      <span>{author.name}</span>
                    )}
                  </span>
                ))}
              </p>
            ) : (
              <div className="flex flex-col lg:flex-row justify-start gap-1 w-full md:max-w-[310px] xl:max-w-[320px] 2xl:max-w-[440px] 3xl:max-w-[540px]">
                <p className="flex font-mono text-mono-12 text-space-black min-w-fit text-nowrap">{post.date}</p>
                <p className="hidden lg:flex font-mono text-mono-12 text-space-black min-w-fit text-nowrap">|</p>
                <div className="flex font-mono text-mono-12 gap-[1ch] lg:max-w-[calc(100%-90px)]">
                  <p>By</p>
                  <span className="md:truncate">
                    {post.authors.map((author, index) => (
                      <span key={author.name}>
                        {author.href ? (
                          <a 
                            className="link-underline-hover text-nowrap" 
                            href={author.href}
                            {...(author.external && { target: "_blank", rel: "noopener noreferrer" })}
                          >
                            {author.name}
                          </a>
                        ) : (
                          <span>{author.name}</span>
                        )}
                        {index < post.authors.length - 1 && <span className="inline-block mr-[1ch]">, </span>}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-svh">
      <div>
        <div className="my-10 md:my-12 lg:first:mt-18 lg:last:mb-18">
          <div className="px-container-mobile md:px-container-desktop">

            {/* In-flow grid: left sidebar below navbar, content to the right */}
            <div className="grid grid-cols-12 gap-y-3 gap-x-3">
              {/* Sidebar */}
              <aside className="hidden md:block col-span-3 md:pr-4">
                <div className="sticky top-12 lg:top-18 pointer-events-auto">
                  <div className="font-mono text-mono-12 flex flex-col gap-1">
                    <p className="uppercase font-medium">Writing</p>
                    <ul className="flex flex-col gap-1">
                      {categories.map((category) => (
                        <li key={category}>
                          <button 
                            className={`block link-tag-push font-mono text-mono-12 text-left ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                          >
                            <span>{category}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className="col-span-12 md:col-span-9 max-w-[1000px]">

                {/* FEATURED */}
                <section className="flex flex-col pb-6 md:pb-5 grid-container-reset-mobile px-container-mobile md:px-0 gap-2 border-b border-solid md:border-none border-gray-border">
                  <p className="font-mono text-mono-12 font-medium">FEATURED</p>

                  <div className="grid md:grid-cols-1 gap-x-3 lg:gap-x-6 3xl:gap-x-10 gap-y-4 md:gap-y-5">
                    {featuredPosts.map((post) => (
                      <PostCard key={post.href} post={post} featured={true} />
                    ))}
                  </div>
                </section>

                {/* ALL WRITING */}
                <section className="flex flex-col py-4 grid-container-reset-mobile px-container-mobile md:px-0 gap-2">
                  <p className="font-mono text-mono-12 font-medium">ALL WRITING</p>

                  {/* mobile categories removed per request; desktop filters only */}

                  {/* search */}
                  <form>
                    <input name="query" placeholder="Search" className="block w-full input-search mb-2" />
                    <button type="submit" className="hidden" value="Search"></button>
                  </form>

                  {/* list */}
                  <div className="grid md:grid-cols-1 gap-x-3 lg:gap-x-6 3xl:gap-x-10 gap-y-4 md:gap-y-5">
                    {allPosts.map((post) => (
                      <PostCard key={post.href} post={post} />
                    ))}
                  </div>

                  {/* pagination */}
                  <div>
                    <div className="flex gap-1 items-center">
                      <p className="font-mono text-mono-12 opacity-50 hidden xl:block">1-10 of 99</p>
                      <div className="flex gap-1 items-center">
                        <button className="w-2 h-2 block link-opacity-hover" tabIndex={-1} disabled>
                          <svg width="5" height="8" viewBox="0 0 5 8" className="block mx-auto rotate-180" aria-hidden="true">
                            <path d="M0.588432 -3.85672e-07L5 4L0.588431 8L4.66431e-08 7.46647L3.82314 4L6.52739e-07 0.533534L0.588432 -3.85672e-07Z" fill="currentColor"></path>
                          </svg>
                        </button>

                        <ul className="flex gap-1">
                          <li><a tabIndex={0} className="block button button-tag active" aria-current="page">1</a></li>
                          <li><a tabIndex={0} className="block button button-tag" href="#">2</a></li>
                          <li><a tabIndex={0} className="block button button-tag" href="#">3</a></li>
                          <li><span className="block button button-tag pointer-events-none" aria-hidden="true">…</span></li>
                          <li><a tabIndex={0} className="block button button-tag" href="#">10</a></li>
                        </ul>

                        <button className="w-2 h-2 block link-opacity-hover" tabIndex={0}>
                          <svg width="5" height="8" viewBox="0 0 5 8" className="block mx-auto" aria-hidden="true">
                            <path d="M0.588432 -3.85672e-07L5 4L0.588431 8L4.66431e-08 7.46647L3.82314 4L6.52739e-07 0.533534L0.588432 -3.85672e-07Z" fill="currentColor"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                </section>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
