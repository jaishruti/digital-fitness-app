import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReviewData from "../../../data/Review-data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % ReviewData.length);
  };

  const prevReview = () => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      setCurrentIndex(ReviewData.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // Get current review
  //   const currentReview = ReviewData[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
          Reviews from our Customers
        </h2>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevReview}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous review"
          >
            <FaArrowLeft className="text-gray-600 text-sm sm:text-base" />
          </button>

          <button
            onClick={nextReview}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next review"
          >
            <FaArrowRight className="text-gray-600 text-sm sm:text-base" />
          </button>
        </div>
      </div>

      {/* Review Card */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ReviewData.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 border border-gray-100">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                      {review.location}
                    </p>
                  </div>

                  {/* Rating Section */}
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl sm:text-3xl font-bold text-yellow-500">
                        {review.rating}
                      </span>
                      <span className="text-gray-400 text-sm">/5</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg sm:text-xl ${
                            i < Math.floor(review.star)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Description */}
                <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-center sm:text-left italic">
                  "{review.description}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {ReviewData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-yellow-300 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Review Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} of {ReviewData.length}
      </div>
    </div>
  );
};

export default ReviewSection;
