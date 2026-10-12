import React from "react";

function SoftwareFactory() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">Creating a “Software Factory”</h1>
              <h2 className="text-2xl md:text-3xl">Publish Date: 10/12/2026</h2>
              <p className="text-xl md:text-2xl mt-4 italic">disclaiimer: all wrds written by human</p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">TL;DR</h2>
              <p className="text-xl md:text-3xl mb-6">
                  I created an agentic “Software Factory” on Claude Code. My factory created seven apps, one good, several meh, costing about $50. This was an insightful experiment but I question the value of this in the complex B2B SaaS context.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">What I Did</h2>
              <p className="text-xl md:text-3xl mb-6">
                  This is a very unoriginal idea at this point but I wanted to run this “Software Factory" experiment myself. By Software Factory I mean a fully agentic coding workflow where AI handles both the building the software and the figuring out what exactly to build . There’s been a ton of hype around this concept and building agent loops and coding is dead, etc, etc.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Let’s see how it actually turned out!
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">What It Shipped</h2>
              <div className="overflow-x-auto mb-6 mt-6">
                <table className="min-w-full text-xl md:text-3xl border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left">App</th>
                      <th className="border border-gray-300 p-4 text-left">Problem It Solves</th>
                      <th className="border border-gray-300 p-4 text-left">My Score</th>
                      <th className="border border-gray-300 p-4 text-left">Score Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold"><a href="https://heat-log-mu.vercel.app/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Heat Log NYC</a></td>
                      <td className="border border-gray-300 p-4">
                        <p className="mb-4">When an apartment’s heater breaks in NYC, tenants have to keep a “heat log” where they record the temperature inside and outside as part of the complaint process.</p>
                        <p>This app lets the user enter just one number–the temperature inside the apartment–and then it automatically records the date and temperature outside via an API. The user can then export this to a PDF they can print.</p>
                      </td>
                      <td className="border border-gray-300 p-4 text-center">3</td>
                      <td className="border border-gray-300 p-4">The workaround is too easy, the tenant could just manually look up the current temperature outside.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold"><a href="https://meeting-drift.vercel.app/#t=16:00&w=tue&a=Berlin&p=New_York,London,Bengaluru,Sydney&n=Working+group+call" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Meeting Drift</a></td>
                      <td className="border border-gray-300 p-4">Let’s groups with online meeting see all the different time changes from daylight savings</td>
                      <td className="border border-gray-300 p-4 text-center">3</td>
                      <td className="border border-gray-300 p-4">Kinda pointless slop, no real problem to solve. People are already aware the time is changing and can plan accordingly.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold"><a href="https://gauge-comb.vercel.app" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Knitting Helper</a></td>
                      <td className="border border-gray-300 p-4">
                        <p className="mb-4">When knitting a sweater, knitters need to know their knot length or the sweater will not fit properly. To do this, they typically will use a tape measure and then manually count 30 - 60 knots. Users sometimes miscount the knots, leading to mistakes.</p>
                        <p>This app let’s them upload a picture of their knitting and it will do the counting for them.</p>
                      </td>
                      <td className="border border-gray-300 p-4 text-center">6</td>
                      <td className="border border-gray-300 p-4">Real problem that frustrates users; spending ~10 hours knitting a sweater for it to come out wrong is very painful. Several reddit threads ask “is there an app for this?”</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold"><a href="https://pantry-date-decoder.vercel.app" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Pantry Date Decoder</a></td>
                      <td className="border border-gray-300 p-4">
                        <p className="mb-4">Food bank volunteers need to sort food past the official expiration date as safe to eat vs unsafe, which depends on the type of food.</p>
                        <p>Some cans use complex Julian Dates which slow workers down.</p>
                      </td>
                      <td className="border border-gray-300 p-4 text-center">5</td>
                      <td className="border border-gray-300 p-4">They use <a href="https://www.foodbanknyc.org/wp-content/uploads/2025/05/Food-Dating-Guide_2023_English.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">PDFs like this</a> currently as a guide, which works can cmd + F. The real value add is the julian date converter</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold"><a href="https://sub-tally-delta.vercel.app" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Tool for Deep Space Photographers</a></td>
                      <td className="border border-gray-300 p-4">
                        <p className="mb-4">Hobby deep space photographers use a site called Astrobin to upload photographs but they have to manually enter 100s of values about the settings they use. This is a super manual and painful process.</p>
                        <p>Thread from Cloudy Nights, a niche space photography forum, complaining about this workflow.</p>
                      </td>
                      <td className="border border-gray-300 p-4 text-center">6</td>
                      <td className="border border-gray-300 p-4">There’s some existing github repo’s with python scripts but non-technical users would struggle with this.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold"><a href="https://yearlap.vercel.app/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Strava Year in Review</a></td>
                      <td className="border border-gray-300 p-4">
                        <p className="mb-4">Strava put its year in review feature behind a paywall. This app replicates the feature using the Strava CSV export</p>
                        <p><a href="https://road.cc/content/news/strava-year-sport-now-only-subscribers-317425" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">This article about Strava users upset about the new paywall</a></p>
                      </td>
                      <td className="border border-gray-300 p-4 text-center">8</td>
                      <td className="border border-gray-300 p-4">My favorite app generated, solves a real proven problem and everyone hates a paywall.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xl md:text-3xl mb-6">
                  Here’s another table view of these apps:
              </p>
              <div className="overflow-x-auto mb-6 mt-6">
                <table className="min-w-full text-xl md:text-3xl border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left">App</th>
                      <th className="border border-gray-300 p-4 text-left">Tokens</th>
                      <th className="border border-gray-300 p-4 text-left">Cost*</th>
                      <th className="border border-gray-300 p-4 text-left">Time Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Head Log NYC</td>
                      <td className="border border-gray-300 p-4">1.2 M</td>
                      <td className="border border-gray-300 p-4">$2.30</td>
                      <td className="border border-gray-300 p-4">3h 23m</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Meeting Drift</td>
                      <td className="border border-gray-300 p-4">2.3 M</td>
                      <td className="border border-gray-300 p-4">$9.99</td>
                      <td className="border border-gray-300 p-4">2h 5m</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Knitting Helper</td>
                      <td className="border border-gray-300 p-4">3.9 M</td>
                      <td className="border border-gray-300 p-4">$18.99</td>
                      <td className="border border-gray-300 p-4">Forgot</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Pantry Date Decoder</td>
                      <td className="border border-gray-300 p-4">2.2 M</td>
                      <td className="border border-gray-300 p-4">$15.31</td>
                      <td className="border border-gray-300 p-4">1h 45m</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Tool for Deep Space Photographers</td>
                      <td className="border border-gray-300 p-4">3.3 M</td>
                      <td className="border border-gray-300 p-4">$12.71</td>
                      <td className="border border-gray-300 p-4">1h 57m</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Strava Year in Review</td>
                      <td className="border border-gray-300 p-4">2.5 M</td>
                      <td className="border border-gray-300 p-4">$2.37</td>
                      <td className="border border-gray-300 p-4">2h 30m</td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td className="border border-gray-300 p-4">Total</td>
                      <td className="border border-gray-300 p-4">15.4 M</td>
                      <td className="border border-gray-300 p-4">$61.67</td>
                      <td className="border border-gray-300 p-4">11h 40m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg md:text-2xl mb-6 italic">
                  *all of these projects were covered under my Claude Max plan. I had to upgrade from my $20 a month pro plan to the $100 a month max plan for this experiment because I kept hitting limits. These are the estimated costs based on Claude’s API pricing which most companies would be using instead of the consumer only Max plan.
              </p>

              <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-6 rounded-lg">
                  <p className="text-xl md:text-3xl">
                      <span className="font-bold text-blue-800">Sidebar:</span> Claude doesn’t have a good way to track token usage per session. This is probably on purpose. I had to download <a href="https://ccusage.com/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">ccusage</a> to pull these numbers. Kinda reminds me of why casinos give you chips to play with instead of you just using your own money. By obfuscating the true cost of the chips / tokens, users are more willing to part with them.
                  </p>
              </div>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Set Up</h2>
              <p className="text-xl md:text-3xl mb-6">
                  All of these projects above were generated with one pretty simple prompt. I then used Claude Code’s subagent feature to facilitate longer running tasks. My agent set up was:
              </p>
              <div className="ml-8 mt-4 mb-6 text-xl md:text-3xl">
                  <p className="my-4"><span className="font-semibold">Discovery Agent:</span> instructed to search the web for today’s news, reddit threads, niche forum threads, newly released public datasets or APIs.</p>
                  <p className="my-4"><span className="font-semibold">Skeptic Agent:</span> scores ideas based on 1 - 10 on real pain and ease of building. Reject anything that needs accounts, auth, paid APIs, a dedicated database, already has free versions.</p>
                  <p className="my-4"><span className="font-semibold">Builder Agent:</span> build and push the code to Github, then publish using the Vercel MCP.</p>
                  <p className="my-4"><span className="font-semibold">Reviewer Agent:</span> after only being given the URL and a one sentence pitch, verify the app works as expected and check any edge cases.</p>
              </div>
              <p className="text-xl md:text-3xl mb-6">
                  If I really wanted to go crazy, I could have programmed a proper agent harness to facilitate this. The harness could route different parts of this process to different models depending on the importance of the step. I could then also have 100’s of discovery agents instead of just one long one. This would have really burned tokens but may have generated more ideas. I’d like to try this another time.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  For a v1, It kind of seemed like overkill so I went with this simpler set up which still burned a lot of tokens.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">A Look Back at the Good Old Days</h2>
              <p className="text-xl md:text-3xl mb-6">
                  It is crazy to reflect back on how building side projects used to work.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  In college, I ran a “development studio” I called Jibra (see <a href="https://jibrallc.github.io/jibra/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">my website I made in 2019</a>, yikes). This was a really fancy way of saying I sometimes got approached about paid projects and sometimes built my own apps for fun.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  My most popular app was called BC Dining Hall Menus, it got close to a thousand downloads! Boston College has ten different dining halls with rotating menus. All of these menus were on a website horribly formatted for mobile and virtually impossible to read on your phone. This simple app would just web scrape and display in a mobile friendly format.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  I just solved my own problem. There weren’t any reddit threads in r/bostoncollege talking about this problem. I validated it wasn’t just a me issue by talking to a few friends and then I spent about 20 hours coding it and testing it. It’s crazy to think those 20 hours would now take 10 minutes but I don’t think AI could have found this problem by itself.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Another app I built was called Page Reader. This solved my own problem again, that I didn’t like the layout of Goodreads or the stats they tracked so I created my own version. The formatting of both of these apps was honestly horrible but they solved real problems and had real usage. In both cases, AI definitely would have sped up development but I’m not so sure about discovery.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Thoughts</h2>
              <p className="text-xl md:text-3xl mb-6">
                  For new codebases, the hardest part now is figuring out what to build, not actually building it. For consumer apps, I think a lot of figuring out what to build can be solved with AI. It’s very easy for an agent to search the web for “I wish an app did X.”
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Building apps B2B, I don’t see how AI is as useful for discovery. So much of that information is not available online or is guarded closely by the people that work at the companies
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  I do think coding is still super tough for large, older tech companies. These companies have codebases that are so large, very old, often poorly documented, and have unstable testing environments for AI agents to play around in. Coding at these companies will remain harder.
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

export { SoftwareFactory };
