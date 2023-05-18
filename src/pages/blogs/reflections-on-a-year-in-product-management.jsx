import React from "react";
import TextBlock from "../../components/TextBlock";

function ReflectionsOnAYearInProductManagement() {

  let textBlocks = [
    [
      "Don't be a People Pleaser",
      "While some people I know may argue this, I can definitely be prone to people pleasing at times. The PM role is very cross-functional and you can’t make everyone happy. Different departments  have different incentives and they can often conflict. I knew this going in but actually experiencing it was different. Customer Success only cares about retaining customers. They want the entire roadmap for retaining customers. In B2B, what can often happen is customers are promised new features, they are deprioritized, and then CSMs demand new features a couple months before the customer renews or they will churn. Sales (& marketing) only cares about closing new deals. They want the entire roadmap for new features they’ve told prospects about that don’t quite exist yet. It’s impossible to make everyone happy and you shouldn’t try to. You need to do what’s best for the company."
    ],
    [
      "Always Have More Roadmap Than You Need",
      "While some people I know may argue this, I can definitely be prone to people pleasing at times. The PM role is very cross-functional and you can’t make everyone happy. Different departments  have different incentives and they can often conflict. I knew this going in but actually experiencing it was different. Customer Success only cares about retaining customers. They want the entire roadmap for retaining customers. In B2B, what can often happen is customers are promised new features, they are deprioritized, and then CSMs demand new features a couple months before the customer renews or they will churn. Sales (& marketing) only cares about closing new deals. They want the entire roadmap for new features they’ve told prospects about that don’t quite exist yet. It’s impossible to make everyone happy and you shouldn’t try to. You need to do what’s best for the company."
    ],
    [
      "Going from 0 -> 1 is Very Hard",
      "While some people I know may argue this, I can definitely be prone to people pleasing at times. The PM role is very cross-functional and you can’t make everyone happy. Different departments  have different incentives and they can often conflict. I knew this going in but actually experiencing it was different. Customer Success only cares about retaining customers. They want the entire roadmap for retaining customers. In B2B, what can often happen is customers are promised new features, they are deprioritized, and then CSMs demand new features a couple months before the customer renews or they will churn. Sales (& marketing) only cares about closing new deals. They want the entire roadmap for new features they’ve told prospects about that don’t quite exist yet. It’s impossible to make everyone happy and you shouldn’t try to. You need to do what’s best for the company."
    ],
    [
      "Open Source is Super Cool",
      "Open source forces you to be very honest. All the code you write is publicly available so customers can see if you’re delivering on your promises. It also gives you a lot of flexibility. If a customer really wants a feature, if it’s that important to them, they can simply build it themselves. Being able to accept contributions back to your open source repo is super powerful. Customers essentially perform the entire product lifecycle for you: they come up with a feature, build it themselves, and then (hopefully) contribute it back to the project."
    ]
  ]

  let content

  content = textBlocks.map((textBlock, i) => {
    return <TextBlock title={textBlock[0]} body={textBlock[1]} key={i}/>
  })

  return (
    <div className="bg-slate-100 min-h-screen min-w-[500px]">
        <div className="ml-10 pt-24">
            <h1 className="text-4xl md:text-7xl">Reflections on a Year in Product Management</h1>

            <p className="text-2xl m-10">
              I've been in Product Management for a little over a year now. While I`ve dipped my toe in Product during internships, working in it full time is a different beast so I wanted to take a minute and reflect. I’m a really big fan of “What I Wish I Knew Before X” so I figured I’d write an article in the same style. For context, I’m a technical product manager working in developer tools. I PM for Helium, an open source, headless version of the Thought Industries platform. Thought Industries is a B2B online learning company in the LMS space with about 150 employees.
            </p>

            {content}

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

export { ReflectionsOnAYearInProductManagement };
