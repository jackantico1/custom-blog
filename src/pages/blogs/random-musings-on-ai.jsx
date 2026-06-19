import React from "react";

function RandomMusingsOnAI() {
  return (
    <div>
      <div className="bg-slate-100 min-h-screen min-w-[500px]">
        <div className="mx-16 pt-24">
          <h1 className="text-7xl md:text-9xl">Random Musings on AI</h1>
          <h2 className="text-2xl md:text-3xl">Publish Date: 06/18/2026</h2>

          <p className="text-xl md:text-3xl mt-10 mb-6 italic">
            AI Disclaimer: this article was written entirely by myself, without an LLM. I did use an LLM for market research.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            I'm a big believer in writing things down. It helps me figure out what I think and why. With so much talk about AI (some real, some not so much), I thought writing a blog explaining some of my thoughts would be useful to myself and hopefully others.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Below are some of these random musings. I was inspired to write this article after reading Elad Gil's piece: Random thoughts while gazing at the misty AI Frontier.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">First, AI is Genuinely Useful</h2>
          <p className="text-xl md:text-3xl mb-6">
            I think buried in the hype, the simple fact remains: LLMs are genuinely useful. I don't really use Google anymore; I just ask Claude. Google is too much work. After I google something, I then have to figure out which link to clink, then I read one link, decide it's not really what I'm looking for, and search for a new link to clink. LLMs have made this process much faster and take fewer steps. If I really need to examine an original source, only then do I use Google.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            I still find the coding agents / Loveable to be magical with how fast they can get prototypes working.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">BUT I still think true agents are far away</h2>
          <p className="text-xl md:text-3xl mb-6">
            But I think true general agents are still very, very far away.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            I wrote a list down of companies building agents:
          </p>

          <div className="overflow-x-auto mb-6 mt-6">
            <table className="min-w-full text-xl md:text-3xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left">Category</th>
                  <th className="border border-gray-300 p-4 text-left">Company</th>
                  <th className="border border-gray-300 p-4 text-left">Valuation</th>
                  <th className="border border-gray-300 p-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Legal Counsel</td>
                  <td className="border border-gray-300 p-4">Harvey</td>
                  <td className="border border-gray-300 p-4">$11 Billion</td>
                  <td className="border border-gray-300 p-4">AI for in house counsel, generating contracts, reviewing legal docs.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Healthcare</td>
                  <td className="border border-gray-300 p-4">Hippocratic AI</td>
                  <td className="border border-gray-300 p-4">$3.5 Billion</td>
                  <td className="border border-gray-300 p-4">Voice agents for scheduling appointments, answering questions on drugs.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Healthcare</td>
                  <td className="border border-gray-300 p-4">Ambience Healthcare</td>
                  <td className="border border-gray-300 p-4">$1.2 Billion</td>
                  <td className="border border-gray-300 p-4">AI for creating medical notes by listening to visits, generating referral letters.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Insurance</td>
                  <td className="border border-gray-300 p-4">Liberate</td>
                  <td className="border border-gray-300 p-4">$300 Million</td>
                  <td className="border border-gray-300 p-4">Agents for answering insurance calls, approving claims.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Education</td>
                  <td className="border border-gray-300 p-4">Speak</td>
                  <td className="border border-gray-300 p-4">$1 Billion</td>
                  <td className="border border-gray-300 p-4">Voice agent for teaching languages.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">SWE</td>
                  <td className="border border-gray-300 p-4">Loveable</td>
                  <td className="border border-gray-300 p-4">$6.6 Billion</td>
                  <td className="border border-gray-300 p-4">Vibe coding, needs no introduction.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">SWE</td>
                  <td className="border border-gray-300 p-4">Cognition</td>
                  <td className="border border-gray-300 p-4">$10.2 Billion</td>
                  <td className="border border-gray-300 p-4">Coding agent Devin, they also "bought" Windsurf which is now Devin Desktop. I saw their CEO give a talk in ATX which was cool.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Customer Support</td>
                  <td className="border border-gray-300 p-4">Sierra</td>
                  <td className="border border-gray-300 p-4">$15.8 Billion</td>
                  <td className="border border-gray-300 p-4">Customer support in tickets or over the phone. A lot of cool logos for customers.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Customer Support</td>
                  <td className="border border-gray-300 p-4">Decagon</td>
                  <td className="border border-gray-300 p-4">$4.5 Billion</td>
                  <td className="border border-gray-300 p-4">Same as Sierra.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Banking</td>
                  <td className="border border-gray-300 p-4">Rogo</td>
                  <td className="border border-gray-300 p-4">$2 Billion</td>
                  <td className="border border-gray-300 p-4">Professional investing, IB, general finance.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Banking</td>
                  <td className="border border-gray-300 p-4">Hebbia</td>
                  <td className="border border-gray-300 p-4">$700 Million</td>
                  <td className="border border-gray-300 p-4">Investing Banking agents!</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Accounting</td>
                  <td className="border border-gray-300 p-4">Basis</td>
                  <td className="border border-gray-300 p-4">$1.15 Billion</td>
                  <td className="border border-gray-300 p-4">Tax, accounting agents.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Sales</td>
                  <td className="border border-gray-300 p-4">Artisian (Ava)</td>
                  <td className="border border-gray-300 p-4">Unknown</td>
                  <td className="border border-gray-300 p-4">Voice agent SDRs.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Sales</td>
                  <td className="border border-gray-300 p-4">11x (Alice)</td>
                  <td className="border border-gray-300 p-4">Unknown</td>
                  <td className="border border-gray-300 p-4">Voice agent SDRs.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Home Services</td>
                  <td className="border border-gray-300 p-4">Avoca</td>
                  <td className="border border-gray-300 p-4">$1 Billion</td>
                  <td className="border border-gray-300 p-4">Voice agents for answering calls for service businesses</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl md:text-3xl mb-6">
            That's a lot of companies and a lot of money on this high level list. Some companies on this list will definitely be NGMI. I do think partial agents will be a thing, i.e. help me with this one specific step in my larger workflow and companies doing that well will succeed. General, end to end agents I still think are very far away.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            A lot of companies on this list are doing voice agents. Their stack is probably an integration to a foundation company and then some ERP / other systems of record integrations attached for their vertical that their voice agents interact with. I'm curious if this trend of each vertical having their own voice agent company continues or if there will be a more horizontal company doing voice agents (i.e. OpenAI or Anthropic). I can't imagine OpenAI or Anthropic would start building all the ERP integrations necessary for this. Or maybe they could plug into a Workato for that. Who knows.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            I also know everyone hates talking to agents on the phone. They just suck. Whenever I have to call a help desk or anything like that and I get an AI voice agent, I have no patience for it. I just say "human, human, human, give me a human" until it does. Maybe that's just a me thing or they'll get better. Sometimes I do try to interact with the agent but I'm usually quickly disappointed.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">Loveable wraps Claude wraps Nvidia wraps TSMC wraps Carbon Atoms?</h2>
          <p className="text-xl md:text-3xl mb-6">
            I also don't claim originality with this subtitle; I stole this in part from the Perlexity CEO.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            I was arguing with my brother the other day about AI wrappers. During this debate, I learned one of my new favorite finance expressions: disintermediation risk. Disintermediation risk is the risk that your customers will bypass you and buy directly from your suppliers at a cheaper price. This applies to brokers / middlemen of all types.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Yes, Lovable (or Devin or Cursor) is a Claude wrapper; it stands to reason that Claude could create / has already created a Loveable like tool. So why are people buying Loveable? And why did VCs value Loveable at $6 Billion?
          </p>
          <p className="text-xl md:text-3xl mb-6">
            I'd say it's a similar reason to why Antropic is worth so much. Could Nvidia build their own AI models? Yes. Would Nvidia's models be cheaper than Anthropic's? Also yes. Nvidia would be able to get GPUs more cheaply than Anthropic or OpenAI, and could pass those cost savings on to the consumer. But would a Nvidia LLM be as good? I'd strongly wager no. I'd also wager if Nvidia started doing this, their GPU improvements would slow down.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Ultimately, there's value in being focused. This is why all companies "wrap" other services.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Now, I do think there's a lot of very "thin" wrappers out there that won't survive. There's also a take out there that all these companies I mentioned are just wrappers and that Anthropic / OpenAI will just gobble them all up. I don't think that's true either. Reality often ends up somewhere in the middle. Time will tell.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">BYOUX is the future</h2>
          <p className="text-xl md:text-3xl mb-6">
            A common thread I'm hearing is how UI / UX will eventually become less important. Many SaaS companies will be BYOUX (bring your own UX) in the future. In this vibe coding and agentic world, companies that focus on fast and complete APIs are more positioned to win. Users will likely prefer to vibe code their own single frontend and connect to various APIs than login to 5 different tools and click the UI to complete tasks.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            This trend will likely take a while to fully realize.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">Price Collapse w/ Open Source Models?</h2>
          <p className="text-xl md:text-3xl mb-6">
            Nvidia's market cap lost $589 Billion the day Deepseek, the Chinese open source model that was trained for only $5.6 million, appeared comparable to Claude and ChatGPT. Money talks.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            So then why is Nvidia back up? Well it's because the cost of inference is still the same. Running an open source model vs closed still cost the same in terms of electricity / GPU cost per query. I do think a huge issue right now is everyone using the same AI models for varying degrees of difficulty tasks. A lot of simple questions ("Claude what's the weather right now?") that are going to super intense models can easily be handled by a local LLM running on a smartphone or laptop.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            If this local LLM approach becomes more common, fueled by these open source models, I could see a very real world where all these token prices (and company valuations) plummet.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Anthropic and OpenAI are fully closed source vs Meta's Llama and Deepdesk which are open source. I don't know which GTM motion will end up winning. As Meta releases smaller models that can run people's local devices, I do see prices dramatically falling.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">Or Currently in the Uber Moment?</h2>
          <p className="text-xl md:text-3xl mb-6">
            Or is it the opposite? We're still in an Uber moment of sorts, i.e. when Uber rides were cheap because they were subsidized by VCs. Once VCs started asking for returns (as AI investors are starting to do), the price of Ubers went dramatically up.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            OpenAI is losing a ton of money and Anthropic is also not profitable. With their IPOs looming, their pressure to reach profitability will also increase. With that comes price increases, which are already happening. If Anthropic becomes a monopoly of sorts over OpenAI or Gemini, they would have more pricing control to guard against open weight models.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl underline">Summary</h2>
          <p className="text-xl md:text-3xl mb-6">
            Things are certainly changing fast. Are we currently in an AI bubble? I would say yes. But, I do also think this technology will fundamentally change things in the next 10 years as more and more people adopt AI.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Then again, I also thought crypto would take off more than it did and it's been funny to see all the crypto startups pivoting to AI. I do think the hype cycle is different this time around. AI really is touching every vertical in ways Crypto never did.
          </p>
          <p className="text-xl md:text-3xl mb-6">
            Personally, I'm just excited to see where this stuff goes (and how well or poorly this article ages).
          </p>
        </div>
        <div className="flex flex-row justify-end pb-10">
          <h1
            onClick={() => (document.location.href = "/")}
            className="bg-red-500 mt-12 mr-10 h-full p-2 text-2xl w-32 text-center rounded-md align-middle hover:cursor-pointer hover:bg-red-400"
          >
            Back
          </h1>
        </div>
      </div>
    </div>
  );
}

export { RandomMusingsOnAI };
