import React from "react";
import { useForm } from "react-hook-form";

const Search = ({ toggle, setToggle }) => {
  const toggleHandler = () => {
    setToggle(false);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      localTime: new Date(),
    };
    console.log(serviceData);
  };

  return (
    <div className={!toggle ? "hidden" : ""}>
      <div className="flex justify-end m-3">
        <button
          onClick={toggleHandler}
          className="text-white text-xl focus:outline-none"
        >
          &#10005;
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="place"
            id="place"
            {...register("name", { required: true })}
            placeholder="Search Place"
            className="mt-10 ml-2 p-3 w-auto focus:outline-none focus:ring focus:border-red-100"
          />
          <button
            type="submit"
            class="bg-blue-200 p-2 mx-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-opacity-50 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
