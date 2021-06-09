import React from "react";

const Card = () => {
  return (
    <div className="bg-blue-lighter p-6 rounded-lg">
      <div className="flex-col">
        <p>2021-06-09</p>
        <div className="flex justify-center items-center">
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt=""
            width="50px"
            height="50px"
          />
        </div>
        <div className="flex justify-between">
          <span>23*c</span>
          <span>27*c</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
