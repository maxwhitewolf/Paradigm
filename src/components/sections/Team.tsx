"use client";

import React, { useMemo, useState } from "react";

/**
 * Assumptions:
 * - You already have custom utilities like `text-mono-12`, `link-tag-push`, etc.
 * - Tailwind is set up (mobile-first). Sticky side filter appears on md+ screens.
 * - Replace/extend TEAM data with your real people and photos.
 */

const CATEGORIES = [
  "All",
  "Leadership",
  "Investing & Research",
  "Portfolio & Firm Operations",
  "Collaborators",
  "Policy Council",
];

const SUBCATS = {
  "Portfolio & Firm Operations": [
    "Talent",
    "Legal & Policy",
    "Design",
    "Go To Market",
    "Marketing & Comms",
    "Trading",
    "Firm Operations",
  ],
};

// Example data
interface TeamMember {
  name: string;
  title: string;
  photo: string;
  category: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Matt Huang",
    title: "Co-Founder & Managing Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/a742a3fb5acc6c8fadd5401fdef468d1e31b5e0f-4455x4455.jpg?auto=format&q=75&w=1000",
    category: "Leadership",
  },
  {
    name: "Fred Ehrsam",
    title: "Co-Founder & General Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/bd1f8e6c6715c875dd3f390223b054a4cd044bb3-4659x4659.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/bd1f8e6c6715c875dd3f390223b054a4cd044bb3-4659x4659.jpg&w=1000",
    category: "Leadership",
  },
  {
    name: "Alana Palmedo",
    title: "Managing Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/145ad8a7c88013cfc238be270868ba09675e82f4-4517x4517.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/145ad8a7c88013cfc238be270868ba09675e82f4-4517x4517.jpg&w=1000",
    category: "Leadership",
  },
  {
    name: "Charlie Noyes",
    title: "General Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/3488db2c69bd8f3142800af9a0e91d2699380803-4621x4621.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/3488db2c69bd8f3142800af9a0e91d2699380803-4621x4621.jpg&w=1000",
    category: "Leadership",
  },
  {
    name: "Dan Robinson",
    title: "General Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/d8aee6ceefc3025593928dc9142f25903563fb7c-4991x4991.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/d8aee6ceefc3025593928dc9142f25903563fb7c-4991x4991.jpg&w=1000",
    category: "Leadership",
  },
  {
    name: "Georgios Konstantopoulos",
    title: "General Partner & CTO",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/25f8bf8bd9d85ef762ff506bcd7baa0202207f9b-3736x3736.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/25f8bf8bd9d85ef762ff506bcd7baa0202207f9b-3736x3736.jpg&w=1000",
    category: "Leadership",
  },
  {
    name: "Alpin Yukseloglu",
    title: "Partner, Investing & Research",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/4f70b175f80326a9d35c80d040b410adb725b53f-4495x4495.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/4f70b175f80326a9d35c80d040b410adb725b53f-4495x4495.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "Arjun Balaji",
    title: "Partner, Investing & Research",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/143e8dae605a0a125bd3e0c032689e9c194bc414-5015x5015.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/143e8dae605a0a125bd3e0c032689e9c194bc414-5015x5015.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "Caitlin Pintavorn",
    title: "Partner, Investing & Research",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/e24416c19ce413cbdf4cea35bbd38ee9ac0910d4-4847x4847.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/e24416c19ce413cbdf4cea35bbd38ee9ac0910d4-4847x4847.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "Dave White",
    title: "Research Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/181aff8a7accc16c350138c6f69634a0f7ecf622-6581x4553.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/181aff8a7accc16c350138c6f69634a0f7ecf622-6581x4553.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "Frankie",
    title: "Partner, Investing & Research",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/5b50d58773f61f85d72c4fb38e770618cec50da4-1919x1919.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/5b50d58773f61f85d72c4fb38e770618cec50da4-1919x1919.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "Ricardo de Arruda",
    title: "Partner, Investing & Research",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/30d9fc9b1451dc69527b52459a42def3fd93ea49-940x940.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/30d9fc9b1451dc69527b52459a42def3fd93ea49-940x940.png&w=1000",
    category: "Investing & Research",
  },
  {
    name: "Storm Slivkoff",
    title: "Research Partner",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/71e738e474fad6b6847a062d5be30e646492bb50-7970x5316.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/71e738e474fad6b6847a062d5be30e646492bb50-7970x5316.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "transmissions11",
    title: "Research Associate",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/439747b5de2655a92366c6a400b34486d1ae8f03-400x400.jpg?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/439747b5de2655a92366c6a400b34486d1ae8f03-400x400.jpg&w=1000",
    category: "Investing & Research",
  },
  {
    name: "samczsun",
    title: "Security Advisor",
    photo:
      "https://cdn.sanity.io/images/dgybcd83/production/398d12c458725297cee2d7c9fbe19f681ffc842f-512x512.png?auto=format&q=75&url=https://cdn.sanity.io/images/dgybcd83/production/398d12c458725297cee2d7c9fbe19f681ffc842f-512x512.png&w=1000",
    category: "Investing & Research",
  },
  // Add more members…
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative flex flex-col gap-1 md:gap-[14px]">
      <div className="w-full aspect-square overflow-hidden rounded-lg">
        <picture>
          <source srcSet={`${member.photo}`} media="(min-width: 600px)" />
          <img
            className="block w-full h-full object-cover select-none"
            src={member.photo}
            alt={member.name}
            loading="lazy"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-half font-mono text-mono-12">
        <p className="font-medium">
          <a className="link-underline-hover" href={`/team/${slugify(member.name)}`}>
            {member.name}
          </a>
        </p>
        <p>{member.title}</p>
      </div>
    </div>
  );
}

function slugify(s: string) {
  return String(s).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

export default function Team() {
  const [cat, setCat] = useState("All");
  const [subcat, setSubcat] = useState(""); // only used when cat has subcats
  const [mobileOpen, setMobileOpen] = useState(false);

  const visible = useMemo(() => {
    let list = TEAM;
    if (cat !== "All") list = list.filter((m) => m.category === cat);
    // If you decide to store subcategory on members, filter here as well.
    return list;
  }, [cat, subcat]);

  const CatButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button
      className="link-tag-push font-mono text-mono-12 w-fit"
      onClick={onClick}
      aria-pressed={cat === label}
    >
      <span>{label}</span>
    </button>
  );

  const SubButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button
      className="link-tag-push font-mono text-mono-12 w-fit"
      onClick={onClick}
      aria-pressed={subcat === label}
    >
      <span>{label}</span>
    </button>
  );

  return (
    <div className="relative min-h-svh">
      <div>
        {/* Mobile filter (md:hidden) */}
        <div className="relative min-h-svh">
          <div className="md:hidden sticky top-6 p-[16px] z-10 bg-white">
            <div className={`border border-solid border-gray rounded-lg overflow-hidden dropdown ${mobileOpen ? "is-open" : ""}`}>
              <button
                className="block w-full font-mono text-mono-12"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="team-mobile-filter"
                type="button"
              >
                <div className="flex justify-between items-center p-2">
                  <div className="flex gap-[16px]">
                    <div className="uppercase font-medium">Team</div>
                    <div className="opacity-60">{cat}</div>
                    {subcat && <div className="opacity-60">• {subcat}</div>}
                  </div>
                  <svg
                    className={`w-[12px] h-[6px] dropdown-arrow`}
                    viewBox="0 0 12 6"
                    aria-hidden
                  >
                    <path d="M0 3L5 5.88675V0.113248L0 3ZM12 2.5H4.5v1H12v-1Z" fill="currentColor" />
                  </svg>
                </div>
              </button>

              <div id="team-mobile-filter" className="dropdown-panel">
                <div className="p-2 pt-0">
                  <ul className="flex flex-col gap-2 font-mono text-mono-12">
                    <li>
                      <CatButton label="All" onClick={() => { setCat("All"); setSubcat(""); setMobileOpen(false); }} />
                    </li>
                    <li>
                      <CatButton
                        label="Leadership"
                        onClick={() => { setCat("Leadership"); setSubcat(""); setMobileOpen(false); }}
                      />
                    </li>
                    <li>
                      <CatButton
                        label="Investing & Research"
                        onClick={() => { setCat("Investing & Research"); setSubcat(""); setMobileOpen(false); }}
                      />
                    </li>
                    <li>
                      <div className="flex flex-col gap-2">
                        <CatButton
                          label="Portfolio & Firm Operations"
                          onClick={() => { setCat("Portfolio & Firm Operations"); setSubcat(""); }}
                        />
                        <ul className="ml-2 flex flex-col gap-2 pt-2">
                          {SUBCATS["Portfolio & Firm Operations"].map((s) => (
                            <li key={s}>
                              <SubButton label={s} onClick={() => { setSubcat(s); setMobileOpen(false); }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <CatButton
                        label="Collaborators"
                        onClick={() => { setCat("Collaborators"); setSubcat(""); setMobileOpen(false); }}
                      />
                    </li>
                    <li>
                      <CatButton
                        label="Policy Council"
                        onClick={() => { setCat("Policy Council"); setSubcat(""); setMobileOpen(false); }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main content with in-grid desktop sidebar (non-overlapping) */}
          <div className="px-container-mobile md:px-container-desktop my-8 md:my-12 lg:my-18">
            <div className="grid grid-cols-12 gap-y-3 gap-x-3">
              {/* Desktop sidebar */}
              <aside className={`hidden ${mobileOpen ? "md:hidden" : "md:block"} col-span-3 md:pr-4`}>
                <div className="sticky top-12 lg:top-18 pointer-events-auto">
                  <div className="font-mono text-mono-12 flex flex-col gap-1">
                    <p className="uppercase font-medium">Team</p>
                    <ul className="flex flex-col gap-1">
                      {CATEGORIES.map((c) => (
                        <li key={c}>
                          <button
                            className="link-tag-push font-mono text-mono-12"
                            onClick={() => { setCat(c); setSubcat(""); }}
                            aria-pressed={cat === c}
                          >
                            <span>{c}</span>
                          </button>
                          {c === "Portfolio & Firm Operations" && (
                            <ul className="ml-2 flex flex-col gap-1 pt-1">
                              {SUBCATS[c].map((s) => (
                                <li key={s}>
                                  <button
                                    className="link-tag-push font-mono text-mono-12"
                                    onClick={() => setSubcat(s)}
                                    aria-pressed={subcat === s}
                                  >
                                    <span>{s}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>

              {/* Team grid */}
              <div className="col-span-12 md:col-span-9 max-w-[1000px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
                  {visible.map((m) => (
                    <TeamCard key={m.name} member={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
