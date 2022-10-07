import React from 'react';

const Loading = () => (
  <div className="relative flex self-center justify-center w-full mt-40 h-28">
    <div className="absolute border-8 rounded-full border-custom-green-3 w-28 h-28"></div>
    <div className="absolute border-8 rounded-full border-t-transparent border-l-transparent border-r-transparent border-custom-brown-1 w-28 h-28 animate-spin"></div>
    <span className="absolute self-center text-3xl font-semibold border-t-2 border-b-2 text-custom-brown-2 bg-custom-grey border-custom-green-3 animate-bounce">...CHARGEMENT...</span>
  </div>
);

export default Loading;
