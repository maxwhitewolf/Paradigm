import React from "react";

interface TeamMemberProps {
  slug: string;
}

export default function TeamMember({ slug }: TeamMemberProps) {
  return (
    <div className="md:px-container-desktop my-8 md:my-12 lg:my-18">
      <div>
        <div className="grid grid-cols-12 gap-y-3">
          {/* Main column */}
          <div className="col-span-12 md:col-span-6 md:col-start-5 xl:col-start-4 max-w-[1000px]">
            <div className="flex flex-col gap-3 md:gap-6">
              {/* Header block: photo + name + socials + bio */}
              <div className="grid grid-cols-6 gap-y-3 min-h-[280px]">
                {/* Photo */}
                <div className="xl:grid col-span-6 xl:col-span-3 xl:col-start-4 xl:row-start-1 xl:max-w-[280px] xl:justify-self-end w-full">
                  <div className="image overflow-hidden block w-full aspect-square">
                    <picture>
                      <source
                        srcSet="https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg&w=1400"
                        media="(min-width: 1000px)"
                      />
                      <source
                        srcSet="https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg&w=1000"
                        media="(min-width: 600px)"
                      />
                      <img
                        src="https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg&w=800"
                        alt="Matt Huang"
                        className="block w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                </div>

                {/* Text block */}
                <div className="col-span-6 xl:col-span-3 xl:col-start-1 xl:row-start-1 px-container-mobile md:px-0">
                  <div className="text-mono-13 flex flex-col gap-3">
                    <div className="font-mono flex flex-col gap-1">
                      <div className="flex flex-col gap-half">
                        <p className="text-mono-24">Matt Huang</p>
                        <p>Co-Founder &amp; Managing Partner</p>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        <a
                          className="block button button-tag"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/kmhuang/"
                        >
                          LinkedIn
                        </a>
                        <a
                          className="block button button-tag"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/matthuang"
                        >
                          Twitter
                        </a>
                        <a
                          className="block button button-tag"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://warpcast.com/matthuang"
                        >
                          Warpcast
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-serif-14">
                      <p>
                        Matt Huang is co-founder and Managing Partner at Paradigm. Previously, Matt was
                        a partner at Sequoia Capital focusing on early-stage venture investments
                        including leading the firm's cryptocurrency efforts. Matt was the founder and CEO
                        of Hotspots, a Y Combinator company acquired by Twitter in 2012, and angel
                        investor in companies such as Bytedance and Instacart. He purchased his first
                        Bitcoin from MtGox in 2012. Matt holds a B.S. in Mathematics from MIT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Written by + posts */}
              <div className="px-container-mobile md:px-0 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-mono-12 font-medium">Written by Matt Huang</p>
                </div>

                <div className="py-1">
                  <div className="grid gap-x-3 gap-y-3 md:grid-cols-1">
                    {/* Post card 1 */}
                    <div className="flex flex-col gap-1 md:gap-2">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 lg:gap-4 relative">
                        <a
                          className="w-full sm:w-12 lg:w-20"
                          href="/2025/04/southern-district-stand-down-prosecuting-code-is-not-justice"
                        >
                          <div className="lg:flex-shrink-0 w-full sm:w-12 lg:w-20 post-summary__image cursor-pointer">
                            <div className="image overflow-hidden block w-full aspect-[16/9] sm:aspect-square lg:aspect-[16/9]">
                              <picture>
                                <source srcSet="https://cdn.sanity.io/images/dgybcd83/production/bb50a3196f6bee1f7029e1d1555232f8bbff5748-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/bb50a3196f6bee1f7029e1d1555232f8bbff5748-2400x1350.png&w=400&h=225&dpr=2&fit=crop" />
                                <img
                                  src="https://cdn.sanity.io/images/dgybcd83/production/bb50a3196f6bee1f7029e1d1555232f8bbff5748-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/bb50a3196f6bee1f7029e1d1555232f8bbff5748-2400x1350.png&w=200&h=200&dpr=2&fit=crop"
                                  alt="Southern District, Stand Down: Prosecuting Code Is Not Justice"
                                  className="block w-full h-full object-cover"
                                />
                              </picture>
                            </div>
                          </div>
                        </a>

                        <div className="flex-grow">
                          <div className="flex flex-col gap-1">
                            <p className="font-mono text-mono-12 uppercase font-medium md:text-mono-18 md:normal-case md:font-normal line-clamp-3">
                              <a
                                className="link-underline-hover"
                                href="/2025/04/southern-district-stand-down-prosecuting-code-is-not-justice"
                              >
                                Southern District, Stand Down: Prosecuting Code Is Not Justice
                              </a>
                            </p>
                            <a
                              className=""
                              href="/2025/04/southern-district-stand-down-prosecuting-code-is-not-justice"
                            >
                              <p className="text-serif-14 line-clamp-3">
                                Until the Storm case is dropped, all of crypto and every software
                                developer are at risk.
                              </p>
                            </a>
                            <p className="font-mono text-mono-12 gap-1 md:truncate w-full md:max-w-[310px] xl:max-w-[320px] 2xl:max-w-[440px] 3xl:max-w-[540px] justify-between">
                              <span>04.22.2025</span>
                              <span className="px-1">|</span>
                              <span className="content-none after:content-[','] pr-1 before:content-['By_']">
                                <a className="link-underline-hover" href="/team/matt-huang">
                                  Matt Huang
                                </a>
                              </span>
                              <span className="content-none">
                                <a className="link-underline-hover" href="/team/katie-biber">
                                  Katie Biber
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Post card 2 */}
                    <div className="flex flex-col gap-1 md:gap-2">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 lg:gap-4 relative">
                        <a className="w-full sm:w-12 lg:w-20" href="/2025/01/ethereum-acceleration-1">
                          <div className="lg:flex-shrink-0 w-full sm:w-12 lg:w-20 post-summary__image cursor-pointer">
                            <div className="image overflow-hidden block w-full aspect-[16/9] sm:aspect-square lg:aspect-[16/9]">
                              <picture>
                                <source srcSet="https://cdn.sanity.io/images/dgybcd83/production/8b880a8a4b2fa283279cae36ddc3cc30539794c1-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/8b880a8a4b2fa283279cae36ddc3cc30539794c1-2400x1350.png&w=400&h=225&dpr=2&fit=crop" />
                                <img
                                  src="https://cdn.sanity.io/images/dgybcd83/production/8b880a8a4b2fa283279cae36ddc3cc30539794c1-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/8b880a8a4b2fa283279cae36ddc3cc30539794c1-2400x1350.png&w=200&h=200&dpr=2&fit=crop"
                                  alt="Ethereum Acceleration"
                                  className="block w-full h-full object-cover"
                                />
                              </picture>
                            </div>
                          </div>
                        </a>

                        <div className="flex-grow">
                          <div className="flex flex-col gap-1">
                            <p className="font-mono text-mono-12 uppercase font-medium md:text-mono-18 md:normal-case md:font-normal line-clamp-3">
                              <a className="link-underline-hover" href="/2025/01/ethereum-acceleration-1">
                                Ethereum Acceleration
                              </a>
                            </p>
                            <a className="" href="/2025/01/ethereum-acceleration-1">
                              <p className="text-serif-14 line-clamp-3">&nbsp;</p>
                            </a>
                            <p className="font-mono text-mono-12 gap-1 md:truncate w-full md:max-w-[310px] xl:max-w-[320px] 2xl:max-w-[440px] 3xl:max-w-[540px] justify-between">
                              <span>01.25.2025</span>
                              <span className="px-1">|</span>
                              <span className="content-none after:content-[','] pr-1 before:content-['By_']">
                                <a className="link-underline-hover" href="/team/georgios-konstantopoulos">
                                  Georgios Konstantopoulos
                                </a>
                              </span>
                              <span className="content-none after:content-[','] pr-1">
                                <a className="link-underline-hover" href="/team/dan-robinson">
                                  Dan Robinson
                                </a>
                              </span>
                              <span className="content-none after:content-[','] pr-1">
                                <a className="link-underline-hover" href="/team/matt-huang">
                                  Matt Huang
                                </a>
                              </span>
                              <span className="content-none">
                                <a className="link-underline-hover" href="/team/charlie-noyes">
                                  Charlie Noyes
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Post card 3 */}
                    <div className="flex flex-col gap-1 md:gap-2">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 lg:gap-4 relative">
                        <a className="w-full sm:w-12 lg:w-20" href="/2024/11/btc-for-the-sovereign">
                          <div className="lg:flex-shrink-0 w-full sm:w-12 lg:w-20 post-summary__image cursor-pointer">
                            <div className="image overflow-hidden block w-full aspect-[16/9] sm:aspect-square lg:aspect-[16/9]">
                              <picture>
                                <source srcSet="https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png&w=400&h=225&dpr=2&fit=crop" />
                                <img
                                  src="https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/7260689b655fad18cd5061d5cc70b3c649b232d5-2400x1350.png&w=200&h=200&dpr=2&fit=crop"
                                  alt="Bitcoin for the Sovereign"
                                  className="block w-full h-full object-cover"
                                />
                              </picture>
                            </div>
                          </div>
                        </a>

                        <div className="flex-grow">
                          <div className="flex flex-col gap-1">
                            <p className="font-mono text-mono-12 uppercase font-medium md:text-mono-18 md:normal-case md:font-normal line-clamp-3">
                              <a className="link-underline-hover" href="/2024/11/btc-for-the-sovereign">
                                Bitcoin for the Sovereign
                              </a>
                            </p>
                            <a className="" href="/2024/11/btc-for-the-sovereign">
                              <p className="text-serif-14 line-clamp-3">
                                Why the game theory for sovereign adoption of BTC has changed.
                              </p>
                            </a>
                            <p className="font-mono text-mono-12 gap-1 md:truncate w-full md:max-w-[310px] xl:max-w-[320px] 2xl:max-w-[440px] 3xl:max-w-[540px] justify-between">
                              <span>11.14.2024</span>
                              <span className="px-1">|</span>
                              <span className="content-none before:content-['By_']">
                                <a className="link-underline-hover" href="/team/matt-huang">
                                  Matt Huang
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Post card 4 */}
                    <div className="flex flex-col gap-1 md:gap-2">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 lg:gap-4 relative">
                        <a className="w-full sm:w-12 lg:w-20" href="/2024/10/ithaca">
                          <div className="lg:flex-shrink-0 w-full sm:w-12 lg:w-20 post-summary__image cursor-pointer">
                            <div className="image overflow-hidden block w-full aspect-[16/9] sm:aspect-square lg:aspect-[16/9]">
                              <picture>
                                <source srcSet="https://cdn.sanity.io/images/dgybcd83/production/5b1dd1a0e2ff341d81c8d5168d8ec14e28ced20a-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5b1dd1a0e2ff341d81c8d5168d8ec14e28ced20a-2400x1350.png&w=400&h=225&dpr=2&fit=crop" />
                                <img
                                  src="https://cdn.sanity.io/images/dgybcd83/production/5b1dd1a0e2ff341d81c8d5168d8ec14e28ced20a-2400x1350.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5b1dd1a0e2ff341d81c8d5168d8ec14e28ced20a-2400x1350.png&w=200&h=200&dpr=2&fit=crop"
                                  alt="Introducing Ithaca"
                                  className="block w-full h-full object-cover"
                                />
                              </picture>
                            </div>
                          </div>
                        </a>

                        <div className="flex-grow">
                          <div className="flex flex-col gap-1">
                            <p className="font-mono text-mono-12 uppercase font-medium md:text-mono-18 md:normal-case md:font-normal line-clamp-3">
                              <a className="link-underline-hover" href="/2024/10/ithaca">
                                Introducing Ithaca
                              </a>
                            </p>
                            <a className="" href="/2024/10/ithaca">
                              <p className="text-serif-14 line-clamp-3">
                                We are excited to announce Paradigm's $20M investment in Ithaca, a new
                                company with the mission to accelerate crypto development across the
                                entire stack.
                              </p>
                            </a>
                            <p className="font-mono text-mono-12 gap-1 md:truncate w-full md:max-w-[310px] xl:max-w-[320px] 2xl:max-w-[440px] 3xl:max-w-[540px] justify-between">
                              <span>10.11.2024</span>
                              <span className="px-1">|</span>
                              <span className="content-none after:content-[','] pr-1 before:content-['By_']">
                                <a className="link-underline-hover" href="/team/matt-huang">
                                  Matt Huang
                                </a>
                              </span>
                              <span className="content-none">
                                <a className="link-underline-hover" href="/team/georgios-konstantopoulos">
                                  Georgios Konstantopoulos
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Post cards */}
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex gap-1 items-center">
                  <p className="font-mono text-mono-12 opacity-50">1-4 of 15</p>
                  <div className="flex gap-1 items-center">
                    <button className="w-2 h-2 block link-opacity-hover" tabIndex={-1} disabled>
                      <svg width="5" height="8" viewBox="0 0 5 8" className="block mx-auto rotate-180" aria-hidden>
                        <path
                          d="M0.588432 -3.85672e-07L5 4L0.588431 8L4.66431e-08 7.46647L3.82314 4L6.52739e-07 0.533534L0.588432 -3.85672e-07Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <ul className="flex gap-1">
                      <li>
                        <a tabIndex={0} className="block button button-tag active" href="#1">
                          1
                        </a>
                      </li>
                      <li>
                        <a tabIndex={0} className="block button button-tag" href="#2">
                          2
                        </a>
                      </li>
                      <li>
                        <a tabIndex={0} className="block button button-tag" href="#3">
                          3
                        </a>
                      </li>
                      <li>
                        <a tabIndex={0} className="block button button-tag" href="#4">
                          4
                        </a>
                      </li>
                    </ul>
                    <button className="w-2 h-2 block link-opacity-hover" tabIndex={0}>
                      <svg width="5" height="8" viewBox="0 0 5 8" className="block mx-auto" aria-hidden>
                        <path
                          d="M0.588432 -3.85672e-07L5 4L0.588431 8L4.66431e-08 7.46647L3.82314 4L6.52739e-07 0.533534L0.588432 -3.85672e-07Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* /Written by + posts */}
            </div>
          </div>

          {/* Sidebar: Back to Team */}
          <div className="col-span-12 md:col-span-3 md:row-start-1 md:col-start-1 md:px-0 px-container-mobile">
            <div className="md:sticky top-12 lg:top-18">
              <div className="flex">
                <a className="block button button-tag pointer-events-auto" href="/team">
                  <div className="flex items-center gap-half">
                    <svg width="12" height="6" viewBox="0 0 12 6" className="block" aria-hidden>
                      <path d="M0 3L5 5.88675L5 0.113248L0 3ZM12 2.5L4.5 2.5L4.5 3.5L12 3.5L12 2.5Z" fill="currentColor" />
                    </svg>
                    Back to Team
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* /Sidebar */}
        </div>
      </div>
    </div>
  );
}
