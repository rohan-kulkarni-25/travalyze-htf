// Loading.js

import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center max-w-2xl mt-12 rounded-2xl h-96 bg-white">
      <CircularProgress color="primary" size={80} thickness={4} />
      <h1 className="text-xl font-bold mt-4">Creating Your Perfect Trip...</h1>
    </div>
  );
};

export default Loading;
