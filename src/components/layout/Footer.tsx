'use client'

export default function Footer() {
  return (
    <div className="bg-black p-3 font-mono text-mono-12 text-white md:pt-6">
      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <div className="flex">
              <svg
                width="94"
                height="108"
                viewBox="0 0 94 108"
                className="text-green block h-[60px] w-[53px] md:h-[108px] md:w-[94px]"
              >
                <path
                  d="M94 33.2314L36.1538 0L28.9231 4.15692V12.4628L21.6923 8.30585L14.4615 12.4628V20.7686L7.23077 16.6117L0 20.7686V87.2314L7.23077 91.3883L14.4615 87.2314V95.5372L21.6923 99.6942L28.9231 95.5372V103.843L36.1538 108L94 74.7686V66.4628L86.7692 62.3059L94 58.1489V49.8431L86.7692 45.6862L94 41.5292V33.2314ZM14.4615 78.9255L7.23077 83.0825V24.9255L14.4615 29.0825V78.9255ZM36.1538 83.0745V74.7686L65.0769 58.1569L72.3077 62.3138L36.1538 83.0745ZM57.8462 54L36.1538 66.4628V41.5372L57.8462 54ZM65.0769 49.8431L36.1538 33.2314V24.9255L72.3077 45.6942L65.0769 49.8431ZM21.6923 16.6117L28.9231 20.7686V29.0745L21.6923 24.9175V16.6117ZM21.6923 33.2314L28.9231 37.3883V70.6197L21.6923 74.7766V33.2314ZM21.6923 83.0745L28.9231 78.9175V87.2234L21.6923 91.3803V83.0745ZM86.7692 70.6117L36.1538 99.6862V91.3803L79.5385 66.4548L86.7692 70.6117ZM86.7692 54L79.5385 58.1569L72.3077 54L79.5385 49.8431L86.7692 54ZM79.5385 41.5372L36.1538 16.6117V8.30585L86.7692 37.3803L79.5385 41.5372Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-12 flex flex-col gap-6 md:col-span-6">
            <div className="grid gap-y-1 md:grid-cols-3">
              <div>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="/about" className="link-underline-hover font-medium uppercase">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/team" className="link-underline-hover font-medium uppercase">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="link-underline-hover font-medium uppercase">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="/writing" className="link-underline-hover font-medium uppercase">
                      Writing
                    </a>
                  </li>
                  <li>
                    <a href="/oss" className="link-underline-hover font-medium uppercase">
                      Open Source
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="link-underline-hover font-medium uppercase">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a
                      href="https://app.junipersquare.com/i/paradigm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline-hover font-medium uppercase"
                    >
                      LP Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid gap-y-1 md:grid-cols-3">
              <a
                href="https://twitter.com/paradigm"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline-hover inline-block justify-self-start"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/paradigm-xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline-hover inline-block justify-self-start"
              >
                LinkedIn
              </a>
              <a
                href="https://farcaster.xyz/paradigm"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline-hover inline-block justify-self-start"
              >
                Farcaster
              </a>
              <a href="/contact" className="link-underline-hover inline-block justify-self-start">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 items-end gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <ul className="flex flex-col gap-1">
              <li>
                <a href="/website-terms-of-use" className="link-underline-hover">
                  Terms
                </a>
              </li>
              <li>
                <a href="/important-disclosures" className="link-underline-hover">
                  Disclosures
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="link-underline-hover">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/privacy-policy#83a48e65d92d" className="link-underline-hover">
                  CA Privacy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6">
            <p>
              Copyright © 2025 Paradigm Operations LP All rights reserved.
              "Paradigm" is a trademark, and the triangular mobius symbol is
              registered trademark of Paradigm Operations LP
            </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="flex justify-between md:justify-end">
              <div className="tag block md:hidden"></div>
              <div className="tag"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
