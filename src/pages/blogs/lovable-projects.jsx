import React from "react";

function LovableProjects() {

  return (
    <div className="bg-slate-100 min-h-screen pb-10">
        <div className="ml-10 pt-24">
            <h1 className="text-4xl md:text-7xl">Lovable Projects</h1>

            <p className="text-xl md:text-2xl m-8">
              Content coming soon...
            </p>

            <p className="text-xl md:text-2xl m-8">
              This blog will feature information about lovable projects and what makes them special.
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
  );
}

export { LovableProjects };
