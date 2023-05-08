import React from "react";

function BCDiningHallMenus() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
        <div className="ml-10 pt-24">
            <h1 className="text-7xl md:text-9xl">BC Dining Hall Menus</h1>
            <h2 className="text-2xl md:text-3xl">Role: Founder</h2>

            <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
            <p className="text-xl md:text-3xl">
                BC Dining Menus displayed the menus of various Dining Halls on the Boston College campus and the dining dollars balance a student had. The app scrapped the menu information from the BC Dining website which wasn't optimized for mobile. At it's peak, BC Dining Menus has over 500 downloads and 50+ DAUs. I stopped maintaing the app when I graduated and it's no longer on the app store.
            </p>
        </div>
    </div>
    </div>
  );
}

export { BCDiningHallMenus };