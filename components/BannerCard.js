import React from "react";
import { useRouter } from "next/router";
import { BASEIMAGEURL } from "../common/apis/tmdbApiKey";
import Image from "next/dist/client/image";
const BannerCard = ({ res }) => {
  const router = useRouter();

  return (
    <div>
      <div className="hero rounded-md  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div >
            <Image
              width={340}
              height={500}
              src={`${BASEIMAGEURL}${res.poster_path}`}
            />
          </div>
          <div className=" md:ml-5">
            <h1 className=" text-2xl line-clamp-1 sm:text-5xl font-bold">
              {res.title}
            </h1>
            <p className=" text-sm md:text-base py-6 mb-6  line-clamp-2">
              {res.overview}
            </p>
            <button
              onClick={() => {
                router.push(`/${res.id}`);
              }}
              className="  btn btn-primary"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
