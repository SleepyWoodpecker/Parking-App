import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { TbHomeMove } from "react-icons/tb";
import convertToLatLong from "../functions/convertToLatLong";

export default function Modal({ carparkData, closeModal, handlePopUp }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const modalContent = (
    <>
      <h3 className="font-extrabold text-xl">{carparkData.name}</h3>
      <div className="font-medium">
        <u>Weekday Rates</u>
        <p>{carparkData.weekday.rate1}</p>
        <p>{carparkData.weekday.rate2 || ""}</p>
      </div>
      <div className="font-medium">
        <u>Saturday Rates</u>
        <p>
          {carparkData.saturday.rate1 === "-"
            ? "Welp none available"
            : carparkData.saturday.rate1}
        </p>
      </div>
      <div className="font-medium">
        <u>Sunday and Public Holiday Rates</u>
        <p>
          {carparkData.sunPH.rate1 === "-"
            ? "Welp none available"
            : carparkData.sunPH.rate1}
        </p>
      </div>
    </>
  );

  const processCoordinates = async () => {
    if (carparkData.coordinateType === "SVY21") {
      const response = await convertToLatLong(carparkData.X, carparkData.Y);
      return `${response.latitude}, ${response.longitude}`;
    }

    return `${carparkData.latitude}, ${carparkData.longitude}`;
  };

  const handleLocationCopy = async () => {
    navigator.clipboard.writeText(await processCoordinates());
    handlePopUp();
  };

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={() => closeModal()}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-fuchsia-400">
        <div className="flex flex-col justify-between h-full">
          {modalContent}
          <div className="flex justify-end" onClick={() => closeModal()}>
            <TbHomeMove
              className="h-12 w-12 cursor-pointer"
              onClick={handleLocationCopy}
            />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
