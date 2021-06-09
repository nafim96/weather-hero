import React, { useState } from "react";

import Layout from "../Layout/Layout";
import LeftAside from "../LeftAside/LeftAside";
import Search from "../LeftAside/Search";
import RightAside from "../RightAside/RightAside";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10 bg-dark">
        <aside className="col-span-1 lg:col-span-2 bg-blue-bg h-full md:bg-cloud-image md:bg-bottom lg:bg-cloud-image bg-no-repeat bg-bottom bg-contain">
          <LeftAside toggle={toggle} setToggle={setToggle} />
          <Search toggle={toggle} setToggle={setToggle} />
        </aside>
        {/* right aside  */}
        <aside className="col-span-1 col-span-4 bg-blue-dark h-full ">
          <RightAside />
        </aside>
      </div>
    </Layout>
  );
};

export default Home;
