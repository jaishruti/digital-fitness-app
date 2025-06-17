const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`flex flex-col py-2 px-2 gap-3 ${
        cardData === currentCard ? "bg-gray-400 text-black" : "text-gray-600"
      } items-center`}
      onClick={() => {
        setCurrentCard(cardData.heading);
      }}
    >
      {console.log(cardData)}
      <p>{cardData.heading}</p>
      <p>{cardData.description}</p>
      <div className="flex flex-row justify-evenly gap-6">
        <p>{cardData.level}</p>
        <p>{cardData.sessionNumber}</p>
      </div>
    </div>
  );
};

export default CourseCard;
