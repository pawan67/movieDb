import React from "react";
import Image from "next/image";
import { BASEIMAGEURL } from "../common/apis/tmdbApiKey";
import { useRouter } from "next/router";
const PosterCard = ({ res }) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div>
          <div className="  mt-5 card card-compact w-80 mx-auto sm:w-80 bg-base-200 shadow-xl">
            <figure>
              <Image
                blurDataURL="https://ak.picdn.net/shutterstock/videos/1054933562/thumb/7.jpg"
                width={350}
                height={450}
                src={`${BASEIMAGEURL}${res.poster_path}`}
                alt={res.title}
              />
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
    </div>
  );
};

export default PosterCard;
