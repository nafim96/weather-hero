import React from "react";
import NavigationIcon from "@material-ui/icons/Navigation";

const CardStatus = () => {
  return (
    <div className="bg-blue-lighter p-6 rounded-lg px-auto py-8">
      <div className="flex-col">
        <p className="text-center text-gray-300">Wind Status</p>
        <div className="flex justify-center items-center mt-5">
          <span className="text-5xl font-bold">
            5<sub className="font-lighter ml-1">mph</sub>
          </span>
        </div>
        <div className="flex justify-center items-center mt-10">
          <NavigationIcon /> <span className="text-gray-400">N</span>
        </div>
      </div>
    </div>
  );
};

export default CardStatus;
