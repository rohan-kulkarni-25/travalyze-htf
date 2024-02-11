import { useState } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});

  return <Outlet context={setData} />;
};

export default Home;
