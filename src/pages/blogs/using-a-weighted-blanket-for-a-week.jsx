import React from "react";

function UsingAWeightedBlanketForAWeek() {
  return (
    <div className="bg-slate-100 min-h-screen">
        <div className="ml-10 pt-24">
            <h1 className="text-4xl md:text-7xl">Using a Weighted Blanket for a Week</h1>

            <p className="text-2xl m-10">
            I'm always trying to improve and invest in my sleep. I use blackout curtains, a white noise machine, I try to charge my phone outside of my room, I use blue-light glasses, I cover blinking electronic lights with black tape. When I heard about this new thing called a weighted blanket, I was very excited to try it. I asked for and got it for Christmas. It costs a little more than 200 dollars.
            </p>
            <p className="text-2xl m-10">
            At first, I just tried sleeping with it on top of my usual blankets. After the third night of overheating, I decided it wasn't working. Soon, it was just sitting in my closet being completely unused. During this quarantine period, however, I decided to give it another shot. I promised myself I would be fully committed and used it as my only blanket for the week.
            </p>

            <p className="text-2xl m-10">
            I will say, it was straight up annoying for the first couple of nights. It's surprisingly heavy (who knew?) and was annoying to fold. However, given that it was my only blanket, I was forced to use it. After the first five nights, I started figuring out how to sleep with it without overheating (sticking one foot out = GOAT).
            </p>

            <p className="text-2xl m-10">
              It's surprisingly good at luring me to sleep and always give me the feeling in my stomach (really don't know how else to describe it) that I just had a really good nap. I think I'll continue to use it going forward and I'd recommend you give it a try also. You'll just have to be willing to be uncomfortable for the first couple of nights. It probably won't be an instant, "Oh my God, this is life-changing." But if you're patient with it, the short term pain will equal long term gain, as is usually the case.
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

export { UsingAWeightedBlanketForAWeek };