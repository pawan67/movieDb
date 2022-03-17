import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { BASEIMAGEURL } from "../common/apis/tmdbApiKey";
import { settings, settings1 } from "../common/settings";
import { useUserContext } from "../context/userContext";
import { getTrending } from "../features/data/movieSlice";
import BannerCard from "./BannerCard";
import Card from "./Card";
const TrendingSection = () => {
  const trending = useSelector(getTrending);
  const data = trending.results;
  console.log(data);

  return (
    <div className="px-5 mt-5 ">
      <h1 className=" mb-5 text-2xl md:text-3xl font-semibold">
        Trending today
      </h1>
      {data != undefined || null ? (
        <>
          <Slider {...settings}>
            {data.slice(1, 5).map((res) => (
              <BannerCard res={res} />
            ))}
          </Slider>
          <div className=" my-5 text-3xl font-semibold">Trending this week</div>
          <Slider {...settings1}>
            {data.slice(4, 20).map((res) => (
              <Card res={res} />
            ))}
          </Slider>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TrendingSection;