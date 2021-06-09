import React from "react";

const Humidity = () => {
  return (
    <div className="bg-blue-lighter p-6 rounded-lg px-auto py-8">
      <div className="flex-col">
        <p className="text-center text-gray-300">Humidity</p>
        <div className="flex justify-center items-center mt-5">
          <span className="text-5xl font-bold">
            56<sub className="font-lighter ml-1">%</sub>
          </span>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="w-9/12 h-2 bg-white rounded-full mt-2">
            <div className="bg-progress-bar h-2 rounded-full w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
