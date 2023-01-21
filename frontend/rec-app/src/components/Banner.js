import React from 'react';

const containerStyling =
  'bg-gradient-to-br from-charcoallight to-charcoaldark text-magnolia text-opacity-90';

function Banner() {
  return (
    <section className={containerStyling}>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-primary to-primarydark bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
            Need High Quality Staff?
            <span className="sm:block"> Look No Further </span>
          </h1>

          <h2 className="mx-auto font-bold mt-4 max-w-xl sm:text-3xl sm:leading-relaxed">
            Our Solutions instantly match you with your perfect candidate.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-primarylight bg-gradient-to-br from-primarylight to-primary px-12 py-3 text-sm font-medium text-white hover:text-white hover:bg-red-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium text-white hover:bg-gradient-to-br from-primarylight to-primary focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
