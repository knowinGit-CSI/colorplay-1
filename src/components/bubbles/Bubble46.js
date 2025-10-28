import React from 'react';

const Bubble46 = ({ title = "button - 46" }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Outer burst rings - appear on hover */}
      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-60 scale-100 group-hover:scale-[4] transition-all duration-1000 ease-out blur-sm"></div>
      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-40 scale-100 group-hover:scale-[3] transition-all duration-800 ease-out blur-sm delay-100"></div>
      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-violet-300 to-purple-300 opacity-0 group-hover:opacity-30 scale-100 group-hover:scale-[2] transition-all duration-600 ease-out blur-sm delay-200"></div>
      
      {/* Main bubble */}
      <div className="relative z-10 bg-gradient-to-br from-violet-500 to-violet-700 w-32 h-32 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:scale-110 flex items-center justify-center group-hover:animate-pulse">
        <span className="text-white text-xs font-bold text-center px-2 drop-shadow-lg">{title}</span>
        
        {/* Inner sparkle effect */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      </div>
      
      {/* Particle effects */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-100"></div>
      <div className="absolute bottom-3 left-4 w-1 h-1 bg-violet-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300"></div>
    </div>
  );
};

export default Bubble46;