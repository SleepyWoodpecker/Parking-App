import { publicHolidays } from "../randomData/publicHolidays2023";
import { dealWithStarVista } from "../functions/dealWithStarVista";
import { useState } from "react";
import Modal from "./Modal";
import { RiNewspaperLine } from "react-icons/ri";
import carparkGantry from "../icons/carparkGantry-removebg-preview.png";
import { cutString } from "../functions/cutString";

function CarparkListItem({ carparkData, handlePopUp }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //at least based on the current day, see which piece of information to best display
  let parkingRate;
  const paragarphClassNames = "mx-4 ";
  const day = checkDay();
  if (day === "weekday") {
    // check if there is a rate 2 present to show
    parkingRate = (
      <span>
        <p className={paragarphClassNames}>
          {cutString(carparkData.weekday.rate1)}
        </p>
        {(
          <p className={paragarphClassNames}>
            {cutString(carparkData.weekday.rate2)}
          </p>
        ) || ""}
      </span>
    );
  } else if (day === "sat") {
    parkingRate = (
      <>
        <p className={paragarphClassNames}>
          {cutString(carparkData.sat.rate1)}
        </p>
        {(
          <p className={paragarphClassNames}>
            {cutString(carparkData.sat.rate2)}
          </p>
        ) || ""}
      </>
    );
  } else if (day === "sun" || day === "PH") {
    // it is very long, but i have to check for 1: if the carpark is closed, 2: if the carpark has a rate2 or not
    parkingRate = (
      <>
        {cutString(carparkData.sunPH.rate1) === "Closed" ? (
          <p className={paragarphClassNames}>"CLOSED"</p>
        ) : (
          <p className={paragarphClassNames}>
            {cutString(carparkData.sunPH.rate1)}
          </p>
        )}

        {!carparkData.sunPH.rate2 ? (
          ""
        ) : (
          <p className={paragarphClassNames}>
            {cutString(carparkData.sunPH.rate2)}
          </p>
        )}
      </>
    );
  }

  if (carparkData.name === "The Star Vista") {
    parkingRate = dealWithStarVista(day, carparkData);
  }

  const stylesForIcon = "h-8 w-8";

  const parkingSystem =
    carparkData.parkingSystem === "Coupon" ? (
      <RiNewspaperLine className={stylesForIcon} />
    ) : (
      <img src={carparkGantry} alt="Carpark Gantry" className="h-12 w-12"></img>
    );

  const openModal = () => {
    setModalIsOpen(true);
    console.log("opening");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("closing");
  };

  return (
    <div className="text-center relative">
      <>
        {modalIsOpen && (
          <Modal
            carparkData={carparkData}
            closeModal={closeModal}
            openModal={openModal}
            handlePopUp={handlePopUp}
          />
        )}
      </>
      <div
        className="block max-w-3xl bg-fuchsia-400 border-2 border-gray-200 rounded-lg shadow h-52 w-64 text-align-center my-4 mx-2 hover:scale-110 hover:bg-purple-300 ease-in-out duration-150 cursor-pointer"
        onClick={openModal}
      >
        <h3 className="text-lg font-bold">{carparkData.name}</h3>
        <span className="relative inset-y-4  ">{parkingRate}</span>
        <span className="absolute bottom-6 right-5">{parkingSystem}</span>
      </div>
    </div>
  );
}

const checkDay = () => {
  const dateObj = new Date();
  const dateString = dateObj.toLocaleString("en-GB");
  if (publicHolidays.has(dateString)) {
    return "PH";
  }
  switch (dateObj.getDay()) {
    case 0:
      return "sun";
    case 6:
      return "sat";
    default:
      return "weekday";
  }
};

export default CarparkListItem;
