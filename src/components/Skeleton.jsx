import React from "react";

export default function Skeleton({ number }) {
  const skeletons = Array(number)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          className="block max-w-3xl bg-fuchsia-400 border-2 border-gray-200 rounded-lg shadow h-52 w-64 my-4 mx-10"
          key={i}
        >
          <div className="animate-pulse">
            <div className="mt-7 ml-5 h-3 w-52 rounded-lg bg-gray-300 mt-11"></div>
            <div className="mt-10 ml-5 h-3 w-52 rounded-lg bg-gray-300 my-4"></div>
            <div className="mt-10 ml-5 h-3 w-52 rounded-lg bg-gray-300"></div>
          </div>
        </div>
      );
    });

  console.log(skeletons);
  return skeletons;
}
