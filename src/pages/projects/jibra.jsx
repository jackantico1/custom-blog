import React from "react";

function Jibra() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">Jibra</h1>
              <h2 className="text-2xl md:text-3xl">Role: Founder</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
              <p className="text-xl md:text-3xl">
                  Jibra was a software development studio that I operated from 2019 to 2021. I worked with several clients to launch over 4 apps to the iOS app store, including a social media app called Cajun Connection and productivity app called New Heights. I shut down Jibra in 2021 when I started working full time at a startup.
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

export { Jibra };