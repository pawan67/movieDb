import React from "react";
import { BASEIMAGEURL } from "../common/apis/tmdbApiKey";
import { useRouter } from "next/router";
import Image from "next/dist/client/image";
const Card = ({ res }) => {
  const router = useRouter();
  console.log(res);
  return (
    <div>
      <div>
        <div className="  mt-5 card card-compact w-80 mx-auto sm:w-80 bg-base-200 shadow-xl">
          <figure>
            <Image
              width={350}
              height={200}
              src={`${BASEIMAGEURL}${res.backdrop_path}`}
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
  );
};

export default Card;
