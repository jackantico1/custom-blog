import React from "react";

function Wayfinder() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">Wayfinder (AI Experiment)</h1>
              <h2 className="text-2xl md:text-3xl">Role: Builder</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
              <p className="text-xl md:text-3xl mb-6">
                  Wayfinder is a trip-inspiration app: tell it your budget, your vibe, your home airport, and when you want to travel, and an agent proposes a destination (plus a couple of alternates) grounded in real flight data. Code is on{" "}
                  <a href="https://github.com/jackantico1/wayfinder-3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">GitHub</a>.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">How It Works</h2>
              <div className="ml-8 mt-4 text-xl md:text-3xl">
                  <p className="my-4">
                    <strong>1. Pre-filter: </strong> the frontend narrows a curated dataset of 15 destinations down to 4 candidates using a heuristic scorer weighing vibe overlap, budget fit, and season fit.
                  </p>
                  <p className="my-4">
                    <strong>2. Agent loop: </strong> a Vercel serverless function hands those candidates to Claude along with a <code>search_flights</code> tool backed by the Duffel flight search API. Claude decides which candidate(s) to check real flights for, can pivot to an alternate if a route comes back empty, and calls a <code>finalize_recommendation</code> tool with its pick, a personalized rationale, and a short itinerary. The loop is capped at 3 Claude turns and 4 flight searches per request, so it always terminates quickly with an answer, real or estimated.
                  </p>
                  <p className="my-4">
                    <strong>3. Render: </strong> the frontend renders the agent's answer, including real flight price and duration when available.
                  </p>
              </div>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Stack</h2>
              <div className="ml-8 mt-4 text-xl md:text-3xl">
                  <p className="my-2">React 19 + TypeScript, Vite, Tailwind CSS v4, Framer Motion</p>
                  <p className="my-2">Vercel serverless function (Node) for the backend</p>
                  <p className="my-2"><code>@anthropic-ai/sdk</code> for the Claude tool-use loop</p>
                  <p className="my-2">Duffel flight search API (sandbox token, mock airline data, no real bookings)</p>
                  <p className="my-2">Vitest for the backend's unit tests</p>
              </div>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Notes / Learnings</h2>
              <p className="text-xl md:text-3xl mb-6">
                  TODO: write up what surprised me building an agentic tool-use loop for the first time — prompt design for the two tools, how I picked the turn/search caps, and what I'd change next time.
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

export { Wayfinder };
