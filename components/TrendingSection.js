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
    <div className="px-5 mt-20 overflow-y-hidden overflow-x-hidden ">
      <h1 className=" mb-5   text-2xl md:text-3xl font-semibold">Trending</h1>
      {data != undefined || null ? (
        <>
          <Slider {...settings}>
            {data.slice(1, 5).map((res) => (
              <BannerCard key={res.id} res={res} />
            ))}
          </Slider>
          <div className=" my-5 text-3xl font-semibold">Trending today</div>
          <Slider {...settings1}>
            {data.slice(4, 13).map((res) => (
              <Card key={res.id} res={res} />
            ))}
          </Slider>
          <div className=" my-5 text-3xl font-semibold">Trending this week</div>
          <Slider {...settings1}>
            {data.slice(13, 20).map((res) => (
              <Card key={res.id} res={res} />
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
