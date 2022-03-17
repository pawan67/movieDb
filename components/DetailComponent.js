import React from "react";
import { BASEIMAGEURL } from "../common/apis/tmdbApiKey";
import { AiFillStar } from "react-icons/ai";
const DetailComponent = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className=" mt-20 min-h-screen   bg-base-200">
        <div className="p-5 md:p-10">
          <div className=" flex justify-between ">
            <div>
              <h1 className=" text-xl md:text-3xl lg:text-4xl   font-semibold">
                {data.status === 200 && data.data.title}
              </h1>
              <div className=" flex  space-x-3">
                <h2 className=" text-sm md:text-base    font-light">
                  {data.status === 200 && data.data.release_date}
                </h2>
                <h2 className=" text-sm md:text-base    font-light">
                  {data.status === 200 && data.data.runtime} Minutes
                </h2>
              </div>
            </div>
            <div>
              <div className=" hidden  text-sm md:text-base md:flex flex-col">
                <p className=" font-medium">TMDB RATING</p>
                <div className=" space-x-2 flex  items-center">
                  <AiFillStar className=" text-3xl" />
                  <div className=" font-medium">
                    <p>{data.status === 200 && data.data.vote_average} / 10</p>
                    <p>{data.status === 200 && data.data.vote_count}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:flex md:space-x-10 mt-10">
            <div>
              <img
                className="  sm:max-w-sm "
                src={`${BASEIMAGEURL}${
                  data.status === 200 && data.data.poster_path
                }`}
                alt={data.status === 200 && data.data.title}
              />
            </div>
            <div>
              <div className=" mt-5 md:mt-10 flex flex-wrap justify-start   gap-3  md:space-x-3">
                {data.status === 200 &&
                  data.data.genres.map((res) => (
                    <button key={res.id} className=" font-semibold">
                      {res.name}
                    </button>
                  ))}
              </div>
              <div className=" line-clamp-3 mt-5 text-sm">
                {data.status === 200 && data.data.overview}
              </div>
              <div>
                <div className=" mt-5 md:hidden  text-sm md:text-base flex flex-col">
                  <div className=" space-x-2 flex  items-center">
                    <AiFillStar className="  text-3xl" />
                    <div className="space-x-1 flex  font-medium">
                      <p>
                        {data.status === 200 && data.data.vote_average} / 10{" "}
                      </p>
                      <p> · {data.status === 200 && data.data.vote_count}</p>
                    </div>
                  </div>
                </div>
                <div className=" sm:w-auto btn btn-primary w-full mt-5 ">
                  <a href={data.status === 200 && data.data.homepage}>
                    Watch now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
