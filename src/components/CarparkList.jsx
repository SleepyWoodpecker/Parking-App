import CarparkListItem from "./CarparkListItem";
import Skeleton from "./Skeleton";

function CarparkList({ data, isLoading, isError, handlePopUp }) {
  let content;
  if (isLoading) {
    content = (
      <>
        <div className="flex flex-none flex-wrap justify-around mx-36">
          <Skeleton number={5} />
        </div>
      </>
    );
  } else if (isError) {
    content = "Error, gg";
  } else {
    content = data.map((carparkData, i) => {
      return (
        <CarparkListItem
          carparkData={carparkData}
          key={i}
          handlePopUp={handlePopUp}
        />
      );
    });
  }

  return (
    <div className="flex flex-none flex-wrap justify-around mx-36">
      {content}
    </div>
  );
}

export default CarparkList;
