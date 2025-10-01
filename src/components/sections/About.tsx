import React from "react";

const About = () => {
  return (
    <div className="relative min-h-svh">
      <div>
        <div className="px-container-mobile md:px-container-desktop px-4 md:px-8 my-8 md:mt-12 lg:mt-18 pt-5">
          <div className="grid grid-cols-12 gap-y-3">
            <div className="col-span-12 md:col-span-7 max-w-[1000px] md:col-start-5 xl:col-start-4 xl:col-span-5">
              <div className="flex flex-col gap-3 3xl:gap-6">
                <h1 className="text-serif-32 md:text-serif-40 3xl:text-serif-64">
                  Paradigm is a research-driven crypto investment firm.
                </h1>

                <div className="rich-text rich-text-page line-break text-serif-18 3xl:text-serif-24 space-y-4">
                  <div>
                    <p>We live on the frontier and believe in progress through technology.</p>
                    <p>
                      We invest in crypto companies and protocols from the earliest stages, often when
                      there's no more than an idea.
                    </p>
                    <p>
                      We're builders, not just investors. Many of us have worked on tools, protocols,
                      and companies that are now some of the most used in crypto. We build software,
                      much of it open source, that aims to advance the frontier of crypto for everyone.
                    </p>
                    <p>
                      Research is at the core of everything we do. We believe depth is a prerequisite
                      for invention, and that real progress happens at the frontier, not in the
                      boardroom or the ivory tower. We are as likely to collaborate on a research paper
                      or ship code as we are to advise on product or business strategy.
                    </p>
                    <p>If you're building something ambitious at the frontier, come build with us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default About;
