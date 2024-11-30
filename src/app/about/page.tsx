import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to My Blog
      </h1>

      <div className="flex flex-col items-center gap-8">
        <img 
          src="/blog/test2.jpg" 
          alt="Profile" 
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Hi, I&apos;m John Doe</h2>
          <p className=" mb-4">
            I&apos;m a passionate writer and developer sharing my thoughts on technology,
            coding, and life. Through this blog, I aim to share my experiences and
            insights while connecting with like-minded individuals.
          </p>
          <p >
            When I&apos;m not writing or coding, you can find me exploring new
            technologies, reading books, or enjoying nature walks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="dark:bg-gray-900 dark:border-2 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold text-purple-600">100+</h3>
            <p >Articles Written</p>
          </div>
          <div className="dark:bg-gray-900 dark:border-2 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold text-purple-600">5 Years</h3>
            <p >Experience</p>
          </div>
          <div className="dark:bg-gray-900 dark:border-2 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold text-purple-600">10k+</h3>
            <p >Readers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;