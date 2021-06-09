import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const LeftAside = ({ toggle, setToggle }) => {
  const toggleHandler = () => {
    setToggle(true);
  };
  return (
    <div className={toggle ? "hidden" : ""}>
      <div className="flex-col">
        <div className="flex">
          <button
            onClick={toggleHandler}
            className="bg-light-gray text-white mt-10 ml-10 rounded-md p-3"
          >
            Search for place
          </button>
        </div>
        <div>
          <div className="flex flex-col justify-start items-center h-full">
            <img
              src="https://www.metaweather.com/static/img/weather/sn.svg"
              alt=""
              width="150px"
              height="150px"
            />
            <p>
              <span className="font-extrabold text-progress-bar text-7xl">
                26
              </span>
              <span className="font-extrabold text-3xl">*C</span>
            </p>
            <p className="text-gray-50 font-bold mt-10 text-3xl text-blue-500">
              Clear
            </p>
            <p className="text-gray-50 font-bold mt-10 text-2xl text-blue-900">
              Today
            </p>
            <div className="flex justify-center items-center">
              <p className="text-gray-400 font-bold text-2xl mt-12">
                <LocationOnIcon /> London
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
