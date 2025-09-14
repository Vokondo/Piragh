import React from 'react';

const NewsResources = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            News & Resources
          </h1>
          <p className="font-body text-xl text-grey-100">
            Latest updates, publications, and resources on ethical recruitment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center text-primary-800 mb-12">
            Coming Soon
          </h2>
          <p className="font-body text-lg text-grey-700 text-center">
            News articles, publications, and resource library will be available here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsResources;