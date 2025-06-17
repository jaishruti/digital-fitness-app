import React from "react";
import { HomePageExplore } from "../../../data/Homepage-explore";
import HighlightText from "./HighlightText";
import { useState } from "react";

const Tab = ["Yoga", "Meditation", "Gym"];
const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(Tab[0]);
  const [content, setContent] = useState(HomePageExplore[0].courses);
  // to track the selcted content crad, initially first card of the selected tab is selected
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (val) => {
    setCurrentTab(val);
    const res = HomePageExplore.filter((data) => data.tags === val);
    setContent(res[0].courses);
    setCurrentCard(res[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col my-10 sm:my-16 lg:my-20 gap-3 items-center px-4 sm:px-6 lg:px-8">
      <div className="text-4xl font-semibold text-center">
        Unlock the
        <HighlightText text={"Power Of Manifestation"} />
      </div>
      <p className="text-sm text-[16px] text-center text-gray-500">
        Learn to achieve anything you imagine
      </p>

      <div className="bg-amber-600 mt-5 flex flex-row items-center rounded-full shadow-md py-2 px-4 w-fit">
        {Tab.map((ele, index) => {
          return (
            <div
              className={`text-[16px] w-fit py-2 px-4 flex flex-row items-center gap-2
                ${
                  currentTab == ele
                    ? "bg-amber-200 text-black font-medium"
                    : "text-amber-200 "
                } hover:bg-gray-200 hover:text-black 
                rounded-full transition-all duration-200 cursor-pointer`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
