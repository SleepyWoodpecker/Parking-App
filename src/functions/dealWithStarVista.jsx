const dealWithStarVista = (day, carparkData) => {
  const paragarphClassNames = "mx-4 ";
  if (day === "weekday") {
    // check if there is a rate 2 present to show
    return (
      <>
        <p className={paragarphClassNames}>{carparkData.weekday.rate1}</p>
        {<p className={paragarphClassNames}>{carparkData.weekday.rate2}</p> ||
          ""}
      </>
    );
  } else if (day === "sat" || day === "PH") {
    return (
      <>
        <p className={paragarphClassNames}>{carparkData.sat.rate1}</p>
        {<p className={paragarphClassNames}>{carparkData.sat.rate2}</p> || ""}
      </>
    );
  } else if (day === "sun") {
    // it is very long, but i have to check for 1: if the carpark is closed, 2: if the carpark has a rate2 or not
    return (
      <>
        {carparkData.sunPH.rate1 === "Closed" ? (
          <p className={paragarphClassNames}>"CLOSED"</p>
        ) : (
          <p className={paragarphClassNames}>{carparkData.sunPH.rate1}</p>
        )}

        {!carparkData.sunPH.rate2 ? (
          ""
        ) : (
          <p className={paragarphClassNames}>{carparkData.sunPH.rate2}</p>
        )}
      </>
    );
  }
};

export { dealWithStarVista };
