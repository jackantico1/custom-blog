import React from "react";
import RunpodConsoleScreenshot from '../../images/runpod_console_screenshot.jpg'
import RunpodChatScreenshot from '../../images/runpod_screenshot.jpg'
import TerminalScreenshot from '../../images/terminal_screenshot.jpg'

function RunningMyOwnAI() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
          <div className="mx-16 pt-24">
              <h1 className="text-7xl md:text-9xl">Running my Own AI</h1>
              <h2 className="text-2xl md:text-3xl">Publish Date: 10/4/2026</h2>

              <p className="text-xl md:text-3xl mt-10 mb-6">
                  Like many people, I feel behind in the AI game. After a busy summer of traveling and hanging around, I decided to spend a full weekend tinkering with AI to get back up to speed. I wanted to separate the fact from fiction and see what people have actually been up to.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  A lot of my previous exploration centered around applying AI to various use cases. This time I wanted to touch the underlying tech more. The following is a list of the experiments I did and what I learned.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Running my Own AI in the Cloud</h2>
              <p className="text-xl md:text-3xl mb-6">
                  I almost bought a used Mac mini on FB marketplace but then decided against it. Instead, I started by renting some servers. I used a service called <a href="https://www.runpod.io/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">RunPod</a> for this.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  First, I tried their serverless solution (you rent just one small part of a shared server / GPU), because it was cheaper than getting my own server. This process sucked overall. It was pretty easy to spin up in a few minutes and it was easy to download the open source AI models from Hugging Face. But then I hit major roadblocks where I’d have a cold start of 5 minutes before the model would actually kick into life. That cold start is why serverless is so cheap and nobody really uses it is what I learned.
              </p>

              <img
                className="mt-4 mb-2 max-w-full md:max-w-4xl rounded-lg shadow-lg"
                src={RunpodConsoleScreenshot}
                alt="RunPod serverless console showing a 2 minute 12 second delay time before a 1 second execution"
              />
              <p className="text-lg md:text-2xl mb-6 italic">Waiting 2 min ^ sucks</p>

              <p className="text-xl md:text-3xl mb-6">
                  I then ponied up some cash and rented my own 180 GB server for ($0.79 an hour) so I could avoid the cold start problem. I then immediately ran into a storage problem so I had to pay an extra 5 bucks to upgrade the memory. I was able to run the Qwen 4 billion parameter model all the way up to the 27 billion parameter model.
              </p>
              <img
                className="mt-4 mb-2 max-w-full md:max-w-4xl rounded-lg shadow-lg"
                src={RunpodChatScreenshot}
                alt="A simple chat interface talking to Qwen3-8B, which keeps replying in Spanish"
              />
              <p className="text-lg md:text-2xl mb-6 italic">Chatting with Qwen3-8B. It really wanted to speak Spanish.</p>
              <p className="text-xl md:text-3xl mb-6">
                  This experiment gave me an appreciation for the cost side of AI. Renting these bigger servers to run bigger models costs up to $5 an hour, which adds up quickly. I definitely didn’t see an additional value add over this approach vs just using Claude. The only real value I saw in RunPod was being able to customize the models and have more control over your data. RunPod would be a great choice if I wanted to fine tune an open source model to talk like myself (if I wanted to automate email response or something like that). However for the vast majority of side project use cases, it’s a waste of time.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-6 rounded-lg">
                  <p className="text-xl md:text-3xl">
                      <span className="font-bold text-blue-800">Takeaway:</span> running your own infra sucks, that’s why most people don’t do it. I burned two hours wrestling with RunPod configs and overall it was a very frustrating experience.
                  </p>
              </div>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Running AI Locally</h2>
              <p className="text-xl md:text-3xl mb-6">
                  After getting frustrated with RunPod, I thought “what’s the worst that can happen” and ran the LLM locally on my machine. I originally was avoiding this as my laptop is 8 years old and I thought it would immediately crash.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  It was surprisingly easy to get this up and running; it only took 5 minutes as opposed to the two hours I spent fiddling with RunPod. It was really cool to get a look under the covers more with the reasoning models and how they actually work. It’s crazy how many tokens Qwen burns here for a simple “Hello?” prompt.
              </p>

              <img
                className="mt-4 mb-2 max-w-full md:max-w-4xl rounded-lg shadow-lg"
                src={TerminalScreenshot}
                alt="Terminal showing Qwen's lengthy reasoning before replying to a simple hello prompt"
              />
              <p className="text-lg md:text-2xl mb-6 italic">Screenshot from my terminal</p>

              <p className="text-xl md:text-3xl mb-6">
                  My computer does have 32 GB of RAM so I was able to run the 4 billion parameter Qwen model without any major issues. If I tried the better models more on par with Claude’s Opus or ChatGPT’s Sol–the 8 billion or 27 billion parameter Qwen models–those likely would have crashed my computer.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Right now the Qwen 27B model is pretty on par with the best Claude and ChatGPT models. If I wanted to run the Qwen 27B model locally on my machine, I’d probably need to buy a MacBook Pro with 48 GB of memory which currently costs $3,099. That’s a lot of money.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  Also if I ran it locally, it would probably be slightly slower and I could run max 4 concurrent sessions without frying my computer. For most people though, that would honestly be totally fine. I think once it’s easier for consumers to run local LLMs without using the scary terminal, this will really take off. I think this is one reason that players like Apple have decided to sit the lab wars out. If the local LLM hypothesis holds true, the TAM of the market, specifically for everyday consumers, goes way down.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  If I wanted to, I could have my computer auto start this local LLM every single time I started my computer. I could then vibe code a super simple chat interface and connect that to a local server. This would give me a ton of control over my own data and would also let me cancel my Claude subscription. Some people are doing this today.
              </p>
              <p className="text-xl md:text-3xl mb-6">
                  For now though, this isn’t possible for me with my current laptop. I’d much rather use a deployed service or call an API than have a local LLM eating up half my memory, slowing down everything on my computer.
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">OpenRouter</h2>
              <p className="text-xl md:text-3xl mb-6">
                  Frustrated with RunPod and knowing the local route was out, I still wanted to explore some of these larger models. I then discovered <a href="https://openrouter.ai/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">OpenRouter</a>, which I knew had recently been bought by Stripe for $7.5 Billion. I had a much better user experience with OpenRouter and was able to get an experiment up and running quickly.
              </p>
              {/* TODO: this sentence was unfinished in the draft */}
              <p className="text-xl md:text-3xl mb-6">
                  I built this super simple model compare app, that sends the exact same prompt
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl underline">Takeaways</h2>
              <p className="text-xl md:text-3xl mb-6">
                  Part of the reason I wrote this article was because I kept asking myself, what have I actually learned from this / burning 10 hours of a perfectly good weekend tinkering.
              </p>
              <div className="ml-8 mt-4 mb-6 text-xl md:text-3xl">
                  <p className="my-4"><span className="font-semibold">Running local AI is much easier than I thought</span> but not really feasible for 99% of the population today. Either the parameter size will have to come way down or the average laptop will go up for this to really happen.</p>
                  <p className="my-4"><span className="font-semibold">These LLMs have very little network effects</span> and that will affect valuations.</p>
                  <p className="my-4"><span className="font-semibold">Running your own infra sucks.</span></p>
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

export { RunningMyOwnAI };
