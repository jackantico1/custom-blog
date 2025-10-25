import React from "react";

function BuildingAnAINotetakerWithLoveable() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
            <div className="mx-16 pt-24">
                <h1 className="text-7xl md:text-9xl">Building an AI Notetaker with Loveable</h1>
                <h2 className="text-2xl md:text-3xl">Publish Date: 08/17/2025</h2>

                <h2 className="mt-10 text-3xl md:text-4xl underline">TL;DR</h2>
                <p className="text-xl md:text-3xl mb-6">
                    I wanted to use Otter.ai as an AI Notetaker but their pricing was insane so I built a clone using Loveable instead. Overall it was a cool experience, I'm curious how this will affect the industry, specifically with build vs buy situations.
                </p>

                <h2 className="mt-10 text-3xl md:text-4xl underline">The Problem</h2>
                <p className="text-xl md:text-3xl mb-6">
                    Interviewing for multiple companies is tough because it's hard to keep all the conversations separate and organized. In my latest go around, I chatted with 60 people at 24 different companies. That's pretty crazy to type out. I've typically just taken manual notes myself during these calls but I feel this distracts me and leads to my actual interview performance suffering.
                </p>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Solution</h2>
                <p className="text-xl md:text-3xl mb-6">
                    I needed a way to take better notes and also record the calls so I could listen to them later to figure out what I could have done better. I wanted to coach myself.
                </p>
                <p className="text-xl md:text-3xl mb-6">
                    I first looked at Otter.ai. Their freemium was not very generous and I found their pricing laughable at $20 a month. I also took a quick look at Fireflies. Its free tier wasn't that generous and I was feeling creative so I decided to see how hard it would be to build a clone of this.
                </p>
                <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-6 rounded-lg">
                    <p className="text-xl md:text-3xl font-bold text-blue-800 mb-4">
                        🚀 Check out the demo I built!
                    </p>
                    <a 
                        href="https://preview--speak-to-summarize-now.lovable.app/auth" 
                        className="text-blue-600 hover:text-blue-800 underline font-bold text-xl md:text-3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View AI Notetaker Demo →
                    </a>
                </div>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Build Process</h2>
                <p className="text-xl md:text-3xl mb-6">
                    The first thing I did was find a cheap transcription API I could use. I looked at OpenAI and Google's but they were too expensive for an experimental project. I ended up going with LemonFox which was not great but got the job done.
                </p>
                <p className="text-xl md:text-3xl mb-6">
                    Next, I asked ChatGPT for a prompt to clone Loveable and then I fed that into Loveable. The first result was solid. I then worked on refining it.
                </p>
                <p className="text-xl md:text-3xl mb-6">
                    The first version was batching all of the text together and not separating it by speaker so I had to specify which API parameter to use for that. Then it treated every sentence as a different speaker which also wasn't great. After a couple of prompts, I was able to get it to work but it was a bit frustrating.
                </p>
                <p className="text-xl md:text-3xl mb-6">
                    Adding some more basic features such as folder structure for organizing the files and then also a home page was easy. Those both only took one prompt. The pattern for these LLMs is that they are great at implementing basic changes but when you drill into more complex features or bug fixes, they struggle.
                </p>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Thoughts on Loveable</h2>
                <p className="text-xl md:text-3xl mb-6">
                    Loveable is without a doubt a very cool tool (not really a novel take Jack). I've gone to a couple of vibe coding meetups in Austin and it's been interesting to see others interact with this in person (as opposed to just reading the opinions of the talking heads on LinkedIn / Hacker News). I met a few Sales and Marketing folks who have never coded before, building some real apps. One nontechnical guy I met was working on a complex fitness app and had gotten pretty far before getting stuck on a tricky bug. He didn't have the ability to fix it himself and despite rolling back his changes and trying several different prompts, he wasn't able to get unstuck.
                </p>
                <p className="text-xl md:text-3xl mb-6">
                    My clone is also definitely not as good as Otter.ai and it took me about an hour to build. Do I think everyone will abandon Otter.ai and their ridiculous pricing to build their own clones? No. Do I think tools like Loveable will make it much harder to defend moats and place downward pricing pressure on a lot of SaaS? Yes, that seems reasonable. I guess we'll see how it plays out.
                </p>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Effects on the Industry</h2>
                <p className="text-xl md:text-3xl mb-6">
                    My opinions:
                </p>
                <div className="ml-24 mt-4 text-xl md:text-3xl">
                    <ol className="list-decimal space-y-4">
                        <li>I think this will be really cool because it will increase the number of people building SaaS. More competition and more apps is always a good thing.</li>
                        <li>This will impact build vs buy decisions in Orgs because building basic tools just got a lot cheaper and faster.</li>
                        <li>The LLMs speed up devs a lot but also require a ton more code reviews, slowing down more senior developers. Also if companies aren't careful, the overcomplicated AI slop will bite them later when they're trying to debug an outage and can't figure out the issue because they didn't write half the code.</li>
                        <li>Software developer jobs aren't going anywhere. On a side note, I found it funny that Devin (Cognition) just bought Windsurf. If Devin is as good as they say it is at writing code, couldn't they have just built a Windsurf clone in a few months? Why spend so much money to acquire a fork of VS Code?</li>
                        <li>Last and weirdest opinion: I've spent a lot of time thinking about the crypto vs AI hype cycles. I see two main differences:</li>
                    </ol>
                </div>
                <div className="ml-48 mt-4 text-xl md:text-3xl">
                    <ol className="list-decimal space-y-4">
                        <li>The AI hype feels more real and is affecting more people. High schoolers are using it, my dad is using it, all of my friends are using it. Crypto was popular but definitely not as widespread.</li>
                        <li>At the same time, it feels like this AI cycle is benefiting a lot fewer people. Many folks in tech made a lot of money investing and being part of different crypto companies. It rewarded the folks who were early. AI is doing that in a much larger way but with much fewer people. Even early employees at Scale AI and Windsurf aren't getting their fair cuts as larger companies are coming in and just pieces of the companies, leaving behind employees at fragmented companies.</li>
                    </ol>
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

export { BuildingAnAINotetakerWithLoveable };
