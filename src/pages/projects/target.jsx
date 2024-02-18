import React from "react";

function Target() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">Target</h1>
              <h2 className="text-2xl md:text-3xl">Role: Product Management Intern</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
              <p className="text-xl md:text-3xl">
                  In the summer of 2020, I was a Product Management Intern at Target in their same day delivery subsidiary Shipt. I worked mostly on the growth team where I ran several A/B tests related to retention and feature usage. I was able to improve the use of the pro-active subsition feature by 20% by changing the UI to make it more prominent. I also worked on an A/B test related to pricing, where I actually broke the Shipt checkout for a couple of hourss late on a Friday afternoon. Note to self: don't push to production on a Friday.
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

export { Target};