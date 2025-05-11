import React from "react";

function BCDiningHallMenus() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">BC Dining Hall Menus</h1>
              <h2 className="text-2xl md:text-3xl">Role: Founder</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
              <p className="text-xl md:text-3xl">
                  BC Dining Menus displayed the menus of various Dining Halls on the Boston College campus and the dining dollars balance a student had. The app scraped the menu information from the BC Dining website which wasn't optimized for mobile. At its peak, BC Dining Menus has over 500 downloads and 50+ DAUs. I stopped maintaining the app when I graduated and it's no longer on the app store.
              </p>
          </div>
          <div className="flex flex-row justify-end pb-10">
              <h1
                  onClick={() =>document.location.href = "/"}
                  className="bg-red-500 mt-12 mr-10 h-full p-2 text-2xl w-32 text-center rounded-md align-middle
                  hover:cursor-pointer hover:bg-red-400"
                  >Back</h1>
          </div>
        </div>
    </div>
  );
}

export { BCDiningHallMenus };