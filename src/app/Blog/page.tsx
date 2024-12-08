'use client';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      {/* Main Wrapper */}
      <div className="bg-white w-full">

        {/* Banner Section */}
        <div className="relative text-center">
          <Image
            src="/bg.png"
            alt="bg"
            layout="responsive"
            width={3000}
            height={410}
            className="w-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Blog List</h1>
            <h5 className="text-lg mt-3">
              Home <span className="text-[#FF9F0D]">Blog</span>
            </h5>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-10">
          {/* Blog Posts */}
          <div className="lg:w-2/3 space-y-16">
            {Array(4).fill('').map((_, index) => (
              <div key={index} className="space-y-5">
                <Image
                  src={`/blog${index + 1}.png`}
                  alt={`blog${index + 1}`}
                  width={872}
                  height={530}
                  className="w-full object-cover rounded-lg"
                />
                <div className="flex items-center space-x-4">
                  <Image src="/Calendar.png" alt="calendar" width={24} height={24} />
                  <Image src="/Admin.png" alt="admin" width={267} height={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">
                  {index % 2 === 0
                    ? '10 Reasons To Do A Digital Detox Challenge'
                    : 'The Ultimate Hangover Burger: Egg in a Hole Burger'}
                </h2>
                <p className="text-gray-500">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                  sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <button className="px-6 py-3 text-orange-400 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-white transition duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-10">
            {/* Search Bar */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search Your Keyword"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md"
              />
              <button className="w-14 h-12 bg-[#FF9F0D] flex items-center justify-center rounded-r-md">
                <Image src="/searchicon.png" alt="search" width={24} height={24} />
              </button>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="font-bold text-lg mb-4">Recent Posts</h2>
              {[1, 2, 3, 4].map((num) => (
                <Image
                  key={num}
                  src={`/post${num}.png`}
                  alt={`post${num}`}
                  width={323}
                  height={107}
                  className="mb-4 cursor-pointer"
                />
              ))}
            </div>

            {/* Filter By Menu */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="font-bold text-lg mb-4">Filter By Menu</h2>
              {[1, 2, 3, 4, 5].map((num) => (
                <Image
                  key={num}
                  src={`/chicken${num}.png`}
                  alt={`menu${num}`}
                  width={323}
                  height={62}
                  className="mb-4 cursor-pointer"
                />
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h2 className="font-bold text-xl mb-3">Follow Us</h2>
              <Image src="/icons.png" alt="icons" width={308} height={46} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
