
import React from "react";

const Advertisement = () => {
  return (
    <div className="w-full max-w-md my-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Ad</span>
        <button 
          className="text-gray-400 hover:text-gray-500 text-xs"
          aria-label="Close advertisement"
        >
          ×
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 rounded-md h-24 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">Your Ad</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Premium Game Features</h3>
          <p className="text-sm text-gray-600 mb-3">Upgrade now to unlock special game modes, themes, and more!</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
