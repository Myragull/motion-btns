
export default function Home() {
  return (
   <div 
   className="px-12 py-4 bg-black h-screen flex items-center justify-center gap-10"
   >
   <button className="bg-[#e6e6e6] text-gray-950 px-4 py-2 font-medium rounded-md hover:text-black hover:bg-white transition duration-300 ease-in-out cursor-pointer">
    Get Started
   </button>

  <button className="overflow-hidden relative group bg-[#e6e6e6] text-gray-950 px-4 py-2 font-medium rounded-md hover:text-black hover:bg-white transition duration-300 ease-in-out cursor-pointer">
    Get Started
    <span className="absolute left-0 bottom-0 h-full w-[0px] bg-red-400 transition-all duration-300 group-hover:w-[2px]"></span>
     <span className="absolute right-0 bottom-0 h-full w-[0px] bg-green-400 transition-all duration-300 group-hover:w-[2px]"></span>
   </button>

   </div>
  );
}
