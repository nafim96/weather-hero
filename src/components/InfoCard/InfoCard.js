import React from "react";

const InfoCard = ({ title, value, subValue }) => {
  return (
    <div className="bg-blue-lighter p-6 rounded-lg px-auto py-8">
      <div className="flex-col">
        <p className="text-center text-gray-300">{title}</p>
        <div className="flex justify-center items-center mt-5">
          <span className="text-5xl font-bold">
            {value}
            <sub className="font-lighter ml-1">{subValue}</sub>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
