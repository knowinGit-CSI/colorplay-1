import React from 'react';

const Bubble17 = ({ title = "button - 17" }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-zinc-400 to-neutral-400 opacity-0 group-hover:opacity-60 scale-100 group-hover:scale-[4] transition-all duration-1000 ease-out"></div>
      <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-zinc-300 to-neutral-300 opacity-0 group-hover:opacity-40 scale-100 group-hover:scale-[3] transition-all duration-800 ease-out delay-100"></div>
      <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-zinc-200 to-neutral-200 opacity-0 group-hover:opacity-30 scale-100 group-hover:scale-[2] transition-all duration-600 ease-out delay-200"></div>
      
      <div className="relative z-10 bg-gradient-to-br from-zinc-400 to-zinc-600 w-24 h-24 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:scale-110 flex items-center justify-center group-hover:animate-pulse">
        <span className="text-white text-xs font-bold text-center px-2 drop-shadow-lg">{title}</span>
        
        <div className="absolute inset-2 rounded-full bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      </div>
      
      <div className="absolute top-2 left-2 w-1 h-1 bg-neutral-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-100"></div>
      <div className="absolute bottom-3 left-4 w-1 h-1 bg-zinc-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-neutral-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300"></div>
    </div>
  );
};

export default Bubble17;