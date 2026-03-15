"use client"

export default function Home() {
  return (
<div className="flex h-screen items-center justify-center w-full bg-neutral-950 ">

<button
 className="relative group px-12 py-4  text-neutral-500 bg-black rounded-lg relative shadow-[0px_1px_2px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
  <span className="group-hover:text-cyan-500 transition-colors duration-300">Subscribe</span>
  <span className="h-px absolute inset-x-0 bottom-px bg-gradient-to-r  from-transparent via-cyan-500 to-transparent w-3/4 mx-auto"></span>
  <span className="h-[4px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r  from-transparent via-cyan-500 to-transparent w-full mx-auto blur-sm"></span>
</button>
      </div> 
  )
}
