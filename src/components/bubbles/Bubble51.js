import React from "react";

const Bubble51 = ({ title = "button - 51" }) => {
    return ( <
        div className = "relative group cursor-pointer w-24 h-24" > { /* Animated pulse rings */ } <
        span className = "absolute inset-0 rounded-full border-2 border-neutral-500 opacity-0 group-hover:opacity-50 animate-ping" > < /span> <
        span className = "absolute inset-0 rounded-full border-2 border-neutral-400 opacity-0 group-hover:opacity-40 animate-ping delay-100" > < /span> <
        span className = "absolute inset-0 rounded-full border-2 border-neutral-300 opacity-0 group-hover:opacity-30 animate-ping delay-200" > < /span>

        { /* Main bubble */ } <
        div className = "relative z-10 bg-gradient-to-br from-neutral-500 to-neutral-700 w-24 h-24 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:scale-110 flex items-center justify-center group-hover:animate-pulse" >
        <
        span className = "text-white text-xs font-bold text-center px-2 drop-shadow-lg" > { title } < /span>

        { /* Inner sparkle effect */ } <
        div className = "absolute inset-2 rounded-full bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-25 transition-opacity duration-500" > < /div> <
        /div>

        { /* Particle effects */ } <
        div className = "absolute top-2 left-2 w-1 h-1 bg-stone-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" > < /div> <
        div className = "absolute top-4 right-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-100" > < /div> <
        div className = "absolute bottom-3 left-4 w-1 h-1 bg-neutral-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200" > < /div> <
        div className = "absolute bottom-2 right-2 w-1 h-1 bg-stone-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300" > < /div> <
        /div>
    );
};

export default Bubble51;