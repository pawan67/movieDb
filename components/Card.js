import React from "react";
import { BASEIMAGEURL } from "../common/apis/tmdbApiKey";
import { useRouter } from "next/router";
const Card = ({ res }) => {
  const router = useRouter();

  return (
    <div>
      <div>
        <div className="  mt-5 card card-compact w-[95%] mx-auto sm:w-80 bg-base-200 shadow-xl">
          <figure>
            <img src={`${BASEIMAGEURL}${res.backdrop_path}`} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{res.title}</h2>
            <p className=" line-clamp-2 w-3/4">{res.overview}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  router.push(`/${res.id}`);
                }}
                className="btn btn-primary"
              >
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;