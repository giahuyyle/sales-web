import React from "react";

const LoadingSpinner = ({ size = "md", showText = true }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin`}
      />
      {showText && <p className="mt-2 text-gray-600">Loading...</p>}
    </div>
  );
};

export default LoadingSpinner;
