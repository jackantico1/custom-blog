import React from "react";

function ReturnLogic() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">ReturnLogic</h1>
              <h2 className="text-2xl md:text-3xl">Role: Product Management Intern</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
              <p className="text-xl md:text-3xl">
                  At ReturnLogic, I worked as a Data Engineer / Analyst. ReturnLogic was a reverse logistics company, helping Shopify sellers manage their returns. I was responsible for building out various data pipelines and dashboards to report on Analytics to our top customers. For one customer, I helped to reduce their return rate by 50% for serveral products after discovering a sizing discrepancy.
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

export { ReturnLogic };