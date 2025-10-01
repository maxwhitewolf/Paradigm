export default function HomePage() {
  return (
    <div className="relative min-h-svh">
      <div>
        {/* Hero Section */}
        <div className="relative min-h-hero flex flex-col justify-center items-center p-4 overflow-hidden mt-2">
          
          {/* Three Main Sections */}
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* About Section */}
            <div className="group relative bg-white border border-gray-200 rounded-lg p-8 pb-14 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
              <div className="absolute top-4 right-4 w-3 h-3 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors"></div>
              
              <div className="space-y-4">
                <h3 className="font-mono text-mono-18 uppercase font-bold">About</h3>
                <p className="font-mono text-mono-12 leading-relaxed">
                  Paradigm is a research-driven crypto investment firm that funds companies
                  and protocols from their earliest stages.
                </p>
              </div>

              {/* Buttons bottom-right */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href="/about"
                  className="block button button-tag uppercase link-cover transition-transform duration-200 group-hover:translate-x-1"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Open Source Section */}
            <div className="group relative bg-white border border-gray-200 rounded-lg p-8 pb-14 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
              <div className="absolute top-4 right-4 w-3 h-3 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors"></div>
              
              <div className="space-y-4">
                <h3 className="font-mono text-mono-18 uppercase font-bold">Open Source</h3>
                <p className="font-mono text-mono-12 leading-relaxed">
                  We build software, much of it open source, that aims to advance the
                  frontier of crypto for everyone.
                </p>
                
                {/* Open Source Logos */}
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://book.getfoundry.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-8 h-8 border border-gray-200 rounded p-1.5 hover:border-gray-300 transition-colors"
                  >
                    <img
                      src="https://cdn.sanity.io/images/dgybcd83/production/666dd791633431efe421268d31aa1cf625469d48-360x360.png?auto=format&q=75"
                      alt="Foundry"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a
                    href="https://github.com/paradigmxyz/reth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-8 h-8 border border-gray-200 rounded p-1.5 hover:border-gray-300 transition-colors"
                  >
                    <img
                      src="https://cdn.sanity.io/images/dgybcd83/production/fe67d904df367a93987042d518bfaf6f7b561d17-360x360.png?auto=format&q=75"
                      alt="Reth"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a
                    href="https://github.com/alloy-rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-8 h-8 border border-gray-200 rounded p-1.5 hover:border-gray-300 transition-colors"
                  >
                    <img
                      src="https://cdn.sanity.io/images/dgybcd83/production/83b56e976fe9a01060e17a5d951b6857a34acac5-360x360.png?auto=format&q=75"
                      alt="Alloy"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                
              </div>

              {/* Buttons bottom-right */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href="/oss"
                  className="block button button-tag uppercase link-cover transition-transform duration-200 group-hover:translate-x-1"
                >
                  View projects
                </a>
              </div>
            </div>

            {/* Collaborate Section */}
            <div className="group relative bg-white border border-gray-200 rounded-lg p-8 pb-14 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
              <div className="absolute top-4 right-4 w-3 h-3 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors"></div>
              
              <div className="space-y-4">
                <h3 className="font-mono text-mono-18 uppercase font-bold">Collaborate with us</h3>
                <p className="font-mono text-mono-12 leading-relaxed">
                  We work with builders from day zero, whether you have an idea or want to
                  work on one of ours.
                </p>
              </div>

              {/* Buttons bottom-right */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href="/contact"
                  className="block button button-tag uppercase link-cover transition-transform duration-200 group-hover:translate-x-1"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* External Colossus Review */}
          <div className="mt-16 text-center">
            <a
              href="https://joincolossus.com/article/paradigm-shifts-matt-huang/"
              target="_blank"
              rel="noopener noreferrer"
              className="block button button-tag uppercase link-cover"
            >
              Read the Colossus review profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
