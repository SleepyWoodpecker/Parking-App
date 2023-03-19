import React from "react";

export default function PopUp() {
  return (
    <div
      className="z-20 fixed bg-lime-200 bottom-7 h-12 w-52 text-center tansition-transform rounded-lg opacity-70"
      style={{ left: "870px" }}
    >
      Coordinates copied to clipboard!
    </div>
  );
}
