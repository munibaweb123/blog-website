import Image from "next/image";

export default function Home() {
  return (
    

    <main className="flex-1 xl:pt-[5.5rem]">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects or
            landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
          
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Rest of the components sections remain similar, just need to:
         1. Change class to className
         2. Convert img tags to Next.js Image components
         3. Add key props to mapped elements
         4. Close all self-closing tags properly
      */}
    
  
    <section className="container px-4 py-16 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Choose the plan that&apos;s right for you
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Plan - Using your existing white/dark background pattern */}
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Basic
          </h3>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">$9</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Perfect for starters
          </p>
          <ul className="mt-6 space-y-4">
            {['5 Components/month', 'Basic Support', 'Community Access'].map((feature) => (
              <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-auto px-4 py-2 font-medium dark:text-black text-white transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
            Get Started
          </button>
        </div>

        {/* Pro Plan - Using your primary color scheme */}
        <div className="flex flex-col p-6 bg-purple-700 rounded-lg shadow-lg relative transform scale-105">
          <div className="absolute top-0 right-0 px-3 py-1 text-sm text-white dark:text-black bg-primary rounded-tr-lg rounded-bl-lg">
            Popular
          </div>
          <h3 className="text-xl font-semibold text-white">
            Pro
          </h3>
          <div className="mt-4">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-gray-100">/month</span>
          </div>
          <p className="mt-4 text-gray-100">
            For growing businesses
          </p>
          <ul className="mt-6 space-y-4">
            {['25 Components/month', 'Priority Support', 'Private Components', 'Custom Branding'].map((feature) => (
              <li key={feature} className="flex items-center text-white">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-auto px-4 py-2 font-medium text-primary transition-colors duration-300 dark:text-black bg-white rounded-lg hover:bg-gray-100 focus:outline-none">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Enterprise
          </h3>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">$99</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            For large organizations
          </p>
          <ul className="mt-6 space-y-4">
            {['Unlimited Components', '24/7 Support', 'API Access', 'Custom Solutions', 'SLA'].map((feature) => (
              <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-auto px-4 py-2 font-medium text-white dark:text-black transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
            Contact Sales
          </button>
        </div>
      </div>
    </section>

   
    <section className="container px-4 py-16 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Why Choose Our Platform
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Everything you need to build and grow your project
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Easy Integration",
            description: "Simple drop-in components that work seamlessly with your existing codebase",
            icon: (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            title: "Dark Mode Ready",
            description: "Built-in dark mode support with your preferred color scheme",
            icon: (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )
          },
          {
            title: "Responsive Design",
            description: "Components that look great on any device, from mobile to desktop",
            icon: (
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )
          }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 transition-transform duration-300 hover:scale-105"
          >
            <div className="p-3 bg-primary/10 rounded-lg w-fit">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  

    <section className="container px-4 py-16 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
          Latest From Our Blog
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Stay updated with our latest insights and tutorials
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Getting Started with Tailwind CSS",
            excerpt: "Learn how to set up and optimize your first Tailwind CSS project with best practices.",
            category: "Tutorial",
            readTime: "5 min read",
            date: "Nov 28, 2024",
            image: "/blog/blog1.jpg"
          },
          {
            title: "Building Dark Mode with Next.js",
            excerpt: "Implement dark mode in your Next.js application with system preferences support.",
            category: "Development",
            readTime: "7 min read",
            date: "Nov 25, 2024",
            image: "/blog/blog2.jpg"
          },
          {
            title: "Responsive Design Patterns",
            excerpt: "Essential responsive design patterns for modern web applications.",
            category: "Design",
            readTime: "6 min read",
            date: "Nov 22, 2024",
            image: "/blog/blog3.jpg"
          }
        ].map((post, index) => (
          <div 
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md dark:bg-gray-800 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <button className="text-primary hover:text-primary/70 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  

  


    </main>
  )
}
 
