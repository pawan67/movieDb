import React from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/dist/client/router";
const Header = () => {
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  return (
    <>
      <div class="navbar bg-base-200 mb-10  fixed top-0 z-50  ">
        <div className=" container mx-auto">
          <div
            onClick={() => router.push("/")}
            class="flex-1   px-2 lg:flex-none"
          >
            <a class="text-lg font-bold btn btn-ghost rounded-btn">MovieDB</a>
          </div>
          <div class="flex justify-end flex-1 px-2">
            <div class="flex items-stretch">
              <div class="dropdown dropdown-end">
                <label for="my-modal-4" class="btn modal-button">
                  Search
                </label>
                <ul
                  tabindex="0"
                  class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost rounded-btn">
                  theme
                </label>
                <ul
                  tabindex="0"
                  class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li onClick={() => setTheme("luxury")}>
                    <a>IMDB Theme</a>
                  </li>

                  <li onClick={() => setTheme("black")}>
                    <a>Amoled Black</a>
                  </li>
                  <li onClick={() => setTheme("light")}>
                    <a>Light💡💥</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative " for="">
          <form className="flex space-x-5 justify-between">
            <input
              type="text"
              placeholder="Search movies and shows 🔍"
              class="input input-bordered w-full "
            />
            <button class="btn btn-primary">Search</button>
          </form>
        </label>
      </label>
    </>
  );
};

export default Header;
