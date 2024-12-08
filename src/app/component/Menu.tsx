import React from "react";
import Image from "next/image";

const menuItems = [
  { name: "Lettuce Leaf", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", image: "/Lettuce.png" },
  { name: "Fresh Breakfast", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "14.5$", image: "/Fresh.png" },
  { name: "Mild Butter", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", image: "/Mild.png" },
  { name: "Fresh Bread", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", image: "/Fresh_bread.png" },
  { name: "Glow Cheese", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", image: "/Glow.png" },
  { name: "Italian Pizza", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "14.5$", image: "/Italian.png" },
  { name: "Slice Beef", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", image: "/Slice.png" },
  { name: "Mushroom Pizza", description: "Lacus nisl, et ac dapibus velit in consequat.", price: "12.5$", image: "/Mushaom.png" },
];

const MenuCom = () => {
  return (
    <section className="bg-black px-4 sm:px-16 lg:px-[135px] text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Choose & Pick</h2>
        <h1 className="text-3xl font-bold text-center mb-8">From Our Menu</h1>

        {/* Menu Categories */}
        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4 gap-[100px]">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
              <li key={category} className="cursor-pointer hover:text-yellow-500">
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left Section: Overlapping Images */}
          <div className="relative lg:w-[515px] lg:h-[406px] w-full lg:flex lg:justify-center lg:items-center mb-8 lg:mb-0">
            {/* First Image */}
            <div className="relative z-10">
              <Image src="/CP1.png" alt="Menu Decor 1" width={400} height={400} className="rounded-lg" />
            </div>
            {/* Second Image (Overlapping) */}
            <div className="absolute top-12 left-12 lg:top-20 lg:left-20 z-0">
              <Image src="/Cp2.png" alt="Menu Decor 2" width={300} height={300} className="rounded-lg" />
            </div>
          </div>

          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div key={index} className="flex  rounded-lg overflow-hidden shadow-lg">
                <div className="w-1/3">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCom;

// import React from 'react';
// import Image from "next/image";
// // import menu from "../assets/menu.png";

// const menuItems = [
//   { name: 'Lettuce', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Lettuce.png' },
//   { name: 'Fresh', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/Fresh.png' },
//   { name: 'Mild', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Mild.png' },
//   { name: 'Fresh_bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Fresh_bread.png' },
//   { name: 'Glow', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Glow.png' },
//   { name: 'Italian', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/Italian.png' },
//   { name: 'Slice', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Slice.png' },
//   { name: 'Mushaom', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Mushaom.png' },
// ];

// const MenuCom = () => {
//   return (
//     <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-2">Choose & Pick</h2>
//         <h1 className="text-3xl font-bold text-center mb-8">From Our Menu</h1>

//         <div className="flex justify-center mb-8">
//           <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
//             <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
//             <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
//             <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
//             <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
//             <li className="cursor-pointer hover:text-yellow-500">Drink</li>
//             <li className="cursor-pointer hover:text-yellow-500">Snack</li>
//             <li className="cursor-pointer hover:text-yellow-500">Soups</li>
//           </ul>
//         </div>

//         <div className='flex flex-col lg:flex-row'>
//           {/* Left Section: Decorative Image */}
//           <div className="flex relative lg:w-[515px] lg:h-[406px] w-1/3 md:w-[50%]">
//             <Image src='/CP1.png' alt="Menu Decor" layout="responsive" width={0} height={0} className='  ml-[-20px]'/>
//             <Image src='/Cp2.png' alt="Menu Decor" layout="responsive" width={0} height={0} className=' after: ml-[-20px]'/>

//           </div>

//           {/* Right Section: Menu Items */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
//             {menuItems.map((item, index) => (
//               <div key={index} className="flex 00 rounded-lg overflow-hidden shadow-lg">
//                 <div className="w-1/3 ">
//                   <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
//                 </div>
//                 <div className="p-4 w-2/3">
//                   <h1 className="text-lg font-semibold">{item.name}</h1>
//                   <p className="text-[11px] text-gray-400 mb-2">{item.description}</p>
//                   <h2 className="text-yellow-400 font-bold">{item.price}</h2>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenuCom;