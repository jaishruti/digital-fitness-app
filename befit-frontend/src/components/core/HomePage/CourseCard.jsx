const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`flex flex-col py-4 sm:py-5 lg:py-6 px-6 sm:px-5 lg:px-6 rounded-lg gap-3 sm:gap-4 
        text-sm sm:text-base xs:w-[60%] md:w-[32%] lg:w-[280px] xl:w-[300px]
        transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105
        ${
          cardData.heading === currentCard
            ? "bg-gray-400 text-black shadow-md border-2 border-amber-400"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
        } items-start sm:items-center border border-gray-300`}
      onClick={() => {
        setCurrentCard(cardData.heading);
      }}
    >
      {/* Heading */}
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-center sm:text-left w-full">
        {cardData.heading}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm lg:text-base text-center sm:text-left leading-relaxed flex-grow">
        {cardData.description}
      </p>

      {/* Level and Session Info */}
      <div className="flex flex-col sm:flex-row justify-between sm:justify-evenly items-center w-full gap-2 sm:gap-4 lg:gap-6 pt-2 border-t border-gray-300 mt-auto">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Level:
          </span>
          <span className="text-xs sm:text-sm font-semibold">
            {cardData.level}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Sessions:
          </span>
          <span className="text-xs sm:text-sm font-semibold">
            {cardData.sessionNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
