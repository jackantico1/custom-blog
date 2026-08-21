import React from "react";
import ThanosWithClaude from '../../images/thanos_with_claude.jpg'

function GarminMCP() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">Building a Garmin "MCP"</h1>
              <h2 className="text-2xl md:text-3xl">Role: Builder</h2>

              <h2 className="mt-10 text-3xl md:text-4xl underline">The Problem</h2>
              <p className="text-xl md:text-3xl mb-6">
                  I want a Garmin MCP where I can ask questions to my workout and health data. Questions like: "how has my training been the last month?" or "does less sleep actually affect my performance?"
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  I'd also like to run an agent once a week that would serve as a workout "report card". This agent would email me a workout summary with how my week was (either a "nice job working out Jack!" or a "try to be better next week"). It's easy for me to forget to move when I WFH or am traveling. This agent coach would help keep me on track.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Despite <a href="https://forums.garmin.com/developer/connect-iq/f/discussion/437274/feature-request-mcp-integration-to-enable-claude-ai-access-to-garmin-connect-data-to-the-garmin-product-and-developer-teams">requests from the community</a>, Garmin hasn't built an official MCP yet. I tried a few other options:
              </p>

              <div className="overflow-x-auto mb-6 mt-6">
                <table className="min-w-full text-xl md:text-3xl border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left">Option</th>
                      <th className="border border-gray-300 p-4 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Using an unofficial Garmin MCP</td>
                      <td className="border border-gray-300 p-4">I fumbled with <a href="https://github.com/taxuspt/garmin_mcp">this Github repo</a> for about 30 min, couldn't get it working so I moved on.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Syncing Garmin to Apple Health, then using the official Apple Health to Claude Connector</td>
                      <td className="border border-gray-300 p-4">This did work! I could ask Claude some basic questions. But, only very basic data was coming over from Garmin to Apple Health and no historical data came over, only new data going forward. I'm sure this is partially on purpose as Garmin doesn't want this data (and their users) leaving their platform.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Manually uploading Garmin extract to Claude</td>
                      <td className="border border-gray-300 p-4">Worked but super manual. I guess I could automate this workflow? Didn't really seem worth it.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-10 text-3xl md:text-4xl underline">The Solution</h2>
              <img
                className="mt-4 mb-2 max-w-full md:max-w-xl rounded-lg shadow-lg"
                src={ThanosWithClaude}
                alt="Thanos: Fine, I'll do it myself"
                />
              <p className="text-xl md:text-3xl mb-6">
                  Maybe Thanos was on to something. I decided I would build my own "MCP" of sorts with the ,<a href="https://github.com/cyberjunky/python-garminconnect">unofficial Garmin API</a> and an Anthropic API key. It was honestly pretty simple. I one-shotted a working prototype after the first try, it took Claude 10 minutes and then spent a couple hours tweaking it so I could more easily deploy it.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  To be clear, this is NOT a true MCP server but functions in many ways like one.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">How It Actually Works</h2>
              <p className="text-xl md:text-3xl mb-6">
                  This app is really just a wrapper of an <a href="https://github.com/cyberjunky/python-garminconnect">unofficial Garmin API library</a>.
              </p>
              <p className="text-xl md:text-3xl mb-2">
                  The way this works is:
              </p>
              <div className="ml-8 mt-4 text-xl md:text-3xl">
                  <p className="my-2">1. User enters Garmin username and password that is authenticated against the Garmin API and returns an auth token.</p>
                  <p className="my-2">2. That token is then cached locally on the user's session.</p>
                  <p className="my-2">3. User asks a question like "How have my runs been lately?"</p>
                  <p className="my-2">4. An <code>Agent.run()</code> loop starts and passes the available tools into the agent. Claude then decides itself which specific tools to use based on the question, all are available to it:</p>
                  <div className="ml-8">
                    <p className="my-1">a. <code>summarize_activities</code></p>
                    <p className="my-1">b. <code>list_activities</code></p>
                    <p className="my-1">c. <code>get_activity_detail</code></p>
                    <p className="my-1">d. <code>get_daily_health</code></p>
                    <p className="my-1">e. <code>get_training_status</code></p>
                    <p className="my-1">f. <code>get_body_composition</code></p>
                  </div>
                  <p className="my-2">5. The response from the agent is then served up to the user.</p>
              </div>
              <p className="text-xl md:text-3xl mb-6 mt-4">
                  This app isn't really an MCP. It's more just a UI that has some connected intelligence but it was still fun to build and ultimately accomplished the same goal.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">An Overall Trend?</h2>
              <p className="text-xl md:text-3xl mb-6">
                  This project also made me think about the overall trend of MCPs. IMHO, from a user perspective, it makes more sense to do most things in an MCP.
              </p>
              <p className="text-xl md:text-3xl mb-2">
                  Thinking about what I do on a typical Sunday:
              </p>
              <div className="ml-8 mt-4 mb-6 text-xl md:text-3xl">
                  <p className="my-2">1. Go to Amex and Chase to pay my credit card bill</p>
                  <p className="my-2">2. Go to Instacart to order my groceries for the week</p>
                  <p className="my-2">3. Go to Appfolio to pay my apartment rent</p>
                  <p className="my-2">4. Order a new book on Amazon</p>
                  <p className="my-2">5. Go to Instagram to check my feed</p>
              </div>
              <p className="text-xl md:text-3xl mb-6">
                  This requires logging in and out of several apps, and then clicking through several screens to get to the page I ultimately want to get to. It would be much easier if I could prompt an LLM and say "What's my credit card bill?", gut check the number, and say okay pay it off for me. I have four credit cards I use to maximize credit card points and it's annoying to login to each one to pay them off.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Similar story for paying my rent, ordering from Amazon, or getting groceries. A lot of shopping these days starts on an LLM where a user asks an LLM for a recommendation on what to buy. Then the user will just go look that thing up on Amazon and order it.
              </p>
              <p className="text-xl md:text-3xl mb-2">
                  A lot of companies are leaning into MCPs:
              </p>
              <div className="ml-8 mt-4 mb-6 text-xl md:text-3xl">
                  <p className="my-2">• Consumer: Instacart, Strava, Gmail, Booking.com, Uber, Stubhub, Resy</p>
                  <p className="my-2">• Business: TurboTax, Netsuite, Ramp, Hubspot, Stripe, Square</p>
              </div>
              <p className="text-xl md:text-3xl mb-6">
                  Imagine how great an Instagram MCP would be. You could create your own feed algorithm (such as the OG algorithm: just pictures from friends based on when they posted). Users would be able to filter out all the influencer content and ads Instagram throws on them. But Instagram would never do this.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  If I'm Amazon, Amex, or Instagram, I'll fight against this trend. Amazon makes money on owning the user interface. They can sell Ads on the UI, have features that encourage larger carts, and can direct users to products actually made by Amazon where they have higher margin. Similar story with Amex. Everytime you login to pay, they cross sell you on other Amex credit cards or savings accounts.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  That's why I'd bet this trend of unofficial MCPs will become more popular. Users want control of their data and companies will refuse to give it up.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  This trend can potentially accelerate even more with web scraping agents being able to login as the user and pull data out from the frontend. LinkedIn, Amazon, and Meta are known for aggressively blocking web scraping as their data is their moat. But how will they be able to filter out agents purchasing on the user's behalf vs those scraping data? I'm not sure.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  I'm sure this trend will take several years to realize. Or perhaps big companies will fight against it aggressively and MCPs will never get widespread adoption. I think another piece of this pie is making it easier to run LLMs locally and therefore trust them more with all your data. Users will feel a lot better giving an LLM access to MCPs if they fully own the LLM.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Excited to see where this one goes.
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

export { GarminMCP };
