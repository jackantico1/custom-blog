import React from "react";

function RPACanoe() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">RPA @ Canoe Intelligence</h1>
              <h2 className="text-2xl md:text-3xl">Role: Product Manager, (RPA: Robotic Process Automation / web scraping)</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
              <p className="text-xl md:text-3xl mb-6">
                  <a href="https://www.crunchbase.com/organization/canoe-software" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Canoe Intelligence</a> is a fintech startup that collects and extracts data from financial documents (K1s, Capital Calls) for PE firms, family offices, and large institutions like JPM, State Street, and PWC, to automate their back office. I joined during the Series B and left post Series C.
              </p>
              <p className="text-xl md:text-3xl">
                I was the Lead PM for the integrations guild of 5 developers and one QA analyst. I was one of two PMs for the Canoe Connect product, which focused on the document collection. About 50% of the documents were collected via automation and the other 50% were collected via manual collection.
              </p>
              <h1 className="text-xl md:text-3xl mt-4">Some of the various projects I worked on:</h1>
                <div className="ml-24 mt-4 text-xl md:text-3xl">
                    <h1 className="my-4"><strong>RPA Program Build Out: </strong> I launched six RPA integrations with financial portals such as KKR and Apollo, reducing the need for human manual collection by over 200 hours / week, saving the company 50k in manual costs. I also reduced the error rate for automated document collection from 12% to 3% by leading project for new email ingestion service, leading to over 150k in cost savings for operations team </h1>
                    <h1 className="my-4"><strong>Process Design w/ Ops:</strong>Ran a data clean up project, increasing automated vs manual collection rate by 15% with better oversight of offshore manual collection team.</h1>
                    <h1 className="my-4"><strong>Data Analysis:</strong>Manually uploaded 50+ google sheets of doc collection data to Snowflake, analysis of which lead to complete reprioritization of which financial portals to build RPA and API integrations with. Did other data analysis project which discovered the over 50% of documents manually collected were duplicates, leading to other product changes.</h1>
                </div>

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

export { RPACanoe };
