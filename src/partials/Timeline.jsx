import React from 'react';

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Vision</h2>
            <p className="text-xl text-gray-400">To be the leading technology company revolutionizing the industry by consistently creating cutting-edge products and services that enhance the way people live and work, shaping the future of technology for generations to come.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Mission</h2>
            <p className="text-xl text-gray-400">To empower individuals and communities by delivering innovative solutions that solve real-world problems and improve quality of life, while constantly striving for excellence and positively impacting the world.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-red-800 mb-2">The seed</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-gray-800 rounded-full">Oct.2021</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-red-800 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Startup founded</h4>
                </div>
                <p className="text-lg text-gray-400">Startup founded by Timothy Sepulvado and his classmates at UC Berkeley. There was idea generation and initial team formation, Research and market validation, Creation of MVP and secured seed funding.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-red-800 mb-2">New features</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-red-600 bg-gray-800 rounded-full">2022 </div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-red-800 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Expansion of team, iteration and improvement of MVP</h4>
                </div>
                <p className="text-lg text-gray-400">Launch of MVP and start of customer acquisition. Expansion of team, iteration and improvement of MVP. Launch of first major update to MVP and increased marketing efforts. </p>
              </div>
            </div>

           

          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;