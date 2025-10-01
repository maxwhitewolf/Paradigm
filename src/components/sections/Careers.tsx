"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Search, X } from "lucide-react";

// --- Types ----------------------------------------------------------------
interface Job {
  title: string;
  company: string;
  location: string;
  href: string;
  logo: string;
  role: string;
}

interface SidebarProps {
  query: string;
  setQuery: (query: string) => void;
  location: string;
  setLocation: (location: string) => void;
  selectedRoles: string[];
  setSelectedRoles: (roles: string[]) => void;
  paradigmOnly: boolean;
  setParadigmOnly: (paradigmOnly: boolean) => void;
}

interface MobileFiltersProps extends SidebarProps {}

interface JobCardProps {
  job: Job;
}

// --- Sample data -----------------------------------------------------------
const roles = [
  "Accounting & Finance",
  "Administration",
  "Customer Service",
  "Data Science",
  "Design",
  "IT",
  "Legal",
  "Marketing & Communications",
  "Operations",
  "Other Engineering",
  "People & HR",
  "Product",
  "Quality Assurance",
  "Sales & Business Development",
  "Software Engineering",
];

const jobs: Job[] = [
  {
    title: "Protocol Engineer",
    company: "rift.exchange",
    location: "Remote",
    href: "https://jobs.paradigm.xyz/companies/rift-exchange/jobs/48379687-protocol-engineer",
    logo: "https://cdn.getro.com/companies/0e97abc2-05eb-5448-8e03-078a648fae35-1739968670",
    role: "Software Engineering",
  },
  {
    title: "Senior Product Designer",
    company: "D3",
    location: "Los Angeles, CA, USA",
    href: "https://boards.greenhouse.io/d3/jobs/4570398008",
    logo: "https://cdn.getro.com/companies/0d59a180-8033-5aba-b6e2-58ea39811501-1747445846",
    role: "Design",
  },
  {
    title: "Founding Engineer",
    company: "MetaDAO",
    location: "San Francisco, CA, USA",
    href: "https://jobs.metadao.fi/",
    logo: "https://cdn.getro.com/companies/0abe0730-55da-5e46-bfb4-07e78c2b45ae-1747359475",
    role: "Software Engineering",
  },
  {
    title: "Content Marketing",
    company: "Succinct",
    location: "San Francisco, CA, USA",
    href: "https://jobs.ashbyhq.com/succinct/eff9d59c-a5f8-46fc-87e9-9940b8276ac9",
    logo: "https://cdn.getro.com/companies/07d96a89-f147-5ee7-b688-3a2b6199ac34-1748828542",
    role: "Marketing & Communications",
  },
  {
    title: "Fullstack Engineer",
    company: "Privy",
    location: "Remote / New York, NY, USA",
    href: "https://jobs.ashbyhq.com/privy/8aeff2e1-1fdf-4123-ae81-3867507c239e",
    logo: "https://cdn.getro.com/companies/b17eed59-4cc2-5c86-86c9-5071008a3543-1748050706",
    role: "Software Engineering",
  },
  {
    title: "Senior Product Engineer",
    company: "Ellipsis Labs",
    location: "New York, NY, USA",
    href: "https://jobs.ashbyhq.com/ellipsislabs/65fbf6df-c55c-43fc-9381-9cfb43ff85f6",
    logo: "https://cdn.getro.com/companies/6104d42c-cc40-5e82-bc85-7f199a499e60-1739193691",
    role: "Software Engineering",
  },
  {
    title: "Senior Protocol Engineer, Rust",
    company: "OP Labs",
    location: "Remote",
    href: "https://jobs.ashbyhq.com/oplabs/7606dd56-7945-4d3a-a70f-429d932a5e10",
    logo: "https://cdn.getro.com/companies/2af5e1d4-1d41-5137-9bd7-9db477117b05-1748136816",
    role: "Software Engineering",
  },
  {
    title: "Staff iOS Engineer",
    company: "OpenSea",
    location: "United States / Remote / Europe",
    href: "https://jobs.ashbyhq.com/OpenSea/66daad8a-656f-4349-bd7e-c50e80bd7fe0",
    logo: "https://cdn.getro.com/companies/60b4df03-c179-5c60-974e-72732abb54d1-1749087670",
    role: "Software Engineering",
  },
  {
    title: "Forward Deployed Engineer",
    company: "Paradigm",
    location: "San Francisco, CA & New York, NY, USA",
    href: "https://jobs.ashbyhq.com/Paradigm/12de456b-8c7a-46ee-acfd-0eafbeda03ab",
    logo: "https://cdn.getro.com/companies/3473b4b7-11c9-5e4f-9413-b5e55efa2aa7-1756085738",
    role: "Software Engineering",
  },
  {
    title: "Government Affairs Associate",
    company: "Paradigm",
    location: "Washington, DC, USA",
    href: "https://jobs.ashbyhq.com/Paradigm/dcb1c447-b11d-4a5b-843c-1078f34bf49a",
    logo: "https://cdn.getro.com/companies/3473b4b7-11c9-5e4f-9413-b5e55efa2aa7-1756085738",
    role: "Legal",
  },
];

// --- Helpers ---------------------------------------------------------------
function classNames(...ns: (string | boolean | undefined)[]): string {
  return ns.filter(Boolean).join(" ");
}

// --- UI Components --------------------------------------------------------
function Sidebar({
  query,
  setQuery,
  location,
  setLocation,
  selectedRoles,
  setSelectedRoles,
  paradigmOnly,
  setParadigmOnly,
}: SidebarProps) {
  return (
    <aside className="hidden md:block col-span-12 md:col-span-3 md:pr-4">
      <div className="flex flex-col gap-2 md:max-w-[280px]">
        <div className="flex flex-col gap-1">
          <h1 className="font-mono text-xs tracking-widest uppercase">Careers</h1>
          <p className="font-mono text-xs mb-1">
            Browse through careers and opportunities in the Paradigm universe.
          </p>
          <form className="block">
            <div className="flex flex-col gap-1">
              <div className="w-full relative">
                <span className="absolute left-2 top-2.5"><Search size={16} aria-hidden /></span>
                <input
                  name="query"
                  placeholder="Title or Company"
                  className="block w-full border rounded pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-1">
            <div className="relative">
              <div className="flex flex-col items-start">
                <div className="w-full relative">
                  <span className="absolute left-2 top-2.5"><MapPin size={16} aria-hidden /></span>
                  <input
                    placeholder="Locations"
                    className="block w-full border rounded pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 font-mono text-xs">
          <ul className="flex flex-col">
            <li className="pb-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={paradigmOnly}
                  onChange={(e) => setParadigmOnly(e.target.checked)}
                />
                <span>Careers at Paradigm</span>
              </label>
            </li>
          </ul>
          <h2 className="font-semibold">Roles</h2>
          <ul className="flex flex-col gap-1 max-h-[360px] overflow-auto pr-1">
            {roles.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="accent-black"
                    checked={selectedRoles.includes(r)}
                    onChange={(e) => {
                      setSelectedRoles(
                        e.target.checked ? [...selectedRoles, r] : selectedRoles.filter((p) => p !== r)
                      );
                    }}
                  />
                  <span>{r}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

function MobileFilters({
  query,
  setQuery,
  location,
  setLocation,
  selectedRoles,
  setSelectedRoles,
  paradigmOnly,
  setParadigmOnly,
}: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden border border-gray-200">
      <button
        className="flex w-full justify-between items-center p-2"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="font-mono text-xs uppercase font-medium">Filter By</div>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={classNames("transition-all", open ? "p-2" : "h-0 overflow-hidden opacity-0")}> 
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <form className="block">
              <div className="flex flex-col gap-1">
                <div className="w-full relative">
                  <span className="absolute left-2 top-2.5"><Search size={16} aria-hidden /></span>
                  <input
                    name="query"
                    placeholder="Title or Company"
                    className="block w-full border rounded pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-1">
              <div className="relative">
                <div className="flex flex-col items-start">
                  <div className="w-full relative">
                    <span className="absolute left-2 top-2.5"><MapPin size={16} aria-hidden /></span>
                    <input
                      placeholder="Locations"
                      className="block w-full border rounded pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-mono text-xs">
            <ul className="flex flex-col">
              <li className="pb-2">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="accent-black"
                    checked={paradigmOnly}
                    onChange={(e) => setParadigmOnly(e.target.checked)}
                  />
                  <span>Careers at Paradigm</span>
                </label>
              </li>
            </ul>
            <h2 className="font-semibold">Roles</h2>
            <ul className="flex flex-col gap-1 max-h-[280px] overflow-auto pr-1">
              {roles.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="accent-black"
                      checked={selectedRoles.includes(r)}
                      onChange={(e) => {
                        setSelectedRoles(
                          e.target.checked ? [...selectedRoles, r] : selectedRoles.filter((p) => p !== r)
                        );
                      }}
                    />
                    <span>{r}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ job }: JobCardProps) {
  return (
    <article className="grid grid-cols-1 relative">
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 md:flex-row-reverse">
          <div className="flex items-center flex-grow">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-lg md:text-2xl leading-snug">
                <a
                  className="underline decoration-transparent hover:decoration-black/60 transition"
                  href={job.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {job.title}
                </a>
              </p>
              <div className="flex flex-col md:flex-row gap-1 font-mono text-xs text-gray-700">
                <p className="font-medium">{job.company}</p>
                {job.location && (
                  <>
                    <p className="hidden md:flex">|</p>
                    <p className="flex items-center gap-1"><MapPin size={14} aria-hidden />{job.location}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex shrink-0 h-[72px] md:min-h-[88px] aspect-square">
            <div className="overflow-hidden block w-full aspect-square max-w-[88px] rounded-md border">
              <img alt={job.company} src={job.logo} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Careers() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [paradigmOnly, setParadigmOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const loc = location.trim().toLowerCase();

    return jobs.filter((j) => {
      if (paradigmOnly && j.company !== "Paradigm") return false;
      if (selectedRoles.length && !selectedRoles.includes(j.role)) return false;
      if (q) {
        const inText = `${j.title} ${j.company}`.toLowerCase().includes(q);
        if (!inText) return false;
      }
      if (loc) {
        const inLoc = (j.location || "").toLowerCase().includes(loc);
        if (!inLoc) return false;
      }
      return true;
    });
  }, [query, location, selectedRoles, paradigmOnly]);

  return (
    <div className="my-10 md:my-12 lg:my-18 min-h-svh">
      <div className="grid grid-cols-12 gap-y-4 gap-x-6">
        <Sidebar
          query={query}
          setQuery={setQuery}
          location={location}
          setLocation={setLocation}
          selectedRoles={selectedRoles}
          setSelectedRoles={setSelectedRoles}
          paradigmOnly={paradigmOnly}
          setParadigmOnly={setParadigmOnly}
        />

        <main className="col-span-12 md:col-span-9 xl:col-span-6 max-w-[1000px]">
          <div className="flex flex-col gap-4 md:hidden">
            <div className="font-mono text-xs flex flex-col gap-1">
              <p className="font-medium">Opportunities</p>
              <p>Browse through careers and opportunities in the Paradigm universe.</p>
            </div>
            <MobileFilters
              query={query}
              setQuery={setQuery}
              location={location}
              setLocation={setLocation}
              selectedRoles={selectedRoles}
              setSelectedRoles={setSelectedRoles}
              paradigmOnly={paradigmOnly}
              setParadigmOnly={setParadigmOnly}
            />
          </div>

          <div className="hidden md:block font-mono text-xs max-w-[300px] mb-4">
            {/* Reserved for intro copy if needed */}
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filtered.length}</span> of {jobs.length} roles
            </p>
            {(query || location || selectedRoles.length || paradigmOnly) ? (
              <button
                onClick={() => {
                  setQuery("");
                  setLocation("");
                  setSelectedRoles([]);
                  setParadigmOnly(false);
                }}
                className="inline-flex items-center gap-1 text-sm border px-2 py-1 rounded hover:bg-gray-50"
              >
                <X size={16} /> Clear filters
              </button>
            ) : null}
          </div>

          <div className="flex flex-col divide-y">
            {filtered.map((job) => (
              <div key={`${job.company}-${job.title}`} className="py-4">
                <JobCard job={job} />
              </div>
            ))}
            {!filtered.length && (
              <div className="py-10 text-center text-sm text-gray-600">
                No roles match your filters.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
