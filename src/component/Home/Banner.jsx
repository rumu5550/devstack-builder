import React from 'react';
import bannerImg from '../../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20  sm:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-gray-950 leading-[1.15]">
            Build Your Ideal <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              className="text-sm sm:text-base font-semibold text-white bg-brand-gradient hover:opacity-95 px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Technologies
            </button>
            
            <button
              type="button"
              className="text-sm sm:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 px-6 py-3 rounded-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={bannerImg}
              alt="Development Stack 3D Visual"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
