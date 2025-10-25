import React from "react";

function Austin() {
  return (
    <div>
        <div className="bg-slate-100 min-h-screen min-w-[500px]">
            <div className="mx-16 pt-24">
                <h1 className="text-7xl md:text-9xl">Austin Move</h1>
                <h2 className="text-2xl md:text-3xl">Publish Date: 10/25/2025</h2>

                <h2 className="mt-10 text-3xl md:text-4xl underline">The Decision</h2>
                <p className="text-xl md:text-3xl mb-6">
                    I moved to Austin in February 2025. After two years in Philly and a digital nomad stint in 2024, I moved back in with my parents in Connecticut to save some money. It was nice to live at home and work remote but I couldn't help but feel like something was wrong sleeping in my childhood bedroom at the ripe old age of 25.
                </p>
                <p className="text-xl md:text-3xl mb-6">
                    After about a year at home, I decided I needed to move out. I needed to live somewhere with:
                </p>
                <div className="ml-24 mt-4 text-xl md:text-3xl mb-6">
                    <ul className="list-disc space-y-2">
                        <li>Good tech scene</li>
                        <li>Cheap cost of living</li>
                        <li>Good gym / fitness scene</li>
                        <li>Easy to make friends</li>
                        <li>Access to Nature</li>
                    </ul>
                </div>

                <h2 className="mt-10 text-3xl md:text-4xl underline">City Comparison</h2>
                
                <div className="overflow-x-auto mb-6 mt-6">
                    <table className="min-w-full text-xl md:text-3xl border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-4 text-left">City</th>
                                <th className="border border-gray-300 p-4 text-left">Pros</th>
                                <th className="border border-gray-300 p-4 text-left">Cons</th>
                                <th className="border border-gray-300 p-4 text-left">Decision</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-4 font-semibold">San Francisco</td>
                                <td className="border border-gray-300 p-4">Best tech and nature access, not even close IMO<br/>Semi-easy to make friends</td>
                                <td className="border border-gray-300 p-4">Insane cost of living</td>
                                <td className="border border-gray-300 p-4">I see myself moving here at some point, just not right now due to cost of living.</td>
                            </tr>
                            <tr className="bg-blue-50">
                                <td className="border border-gray-300 p-4 font-semibold">Austin</td>
                                <td className="border border-gray-300 p-4">Good tech, okay nature access<br/>Great to make friends, great gym scene<br/>Very cheap + less taxes</td>
                                <td className="border border-gray-300 p-4">Hot summers</td>
                                <td className="border border-gray-300 p-4 font-bold text-green-600">Let's do it!</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 font-semibold">Tampa</td>
                                <td className="border border-gray-300 p-4">Good weather<br/>Cheap-ish</td>
                                <td className="border border-gray-300 p-4">Bad tech scene<br/>Not much nature</td>
                                <td className="border border-gray-300 p-4">It was an intriguing option, I just couldn't see myself really being a "Florida guy".</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 font-semibold">Boise (random ik)</td>
                                <td className="border border-gray-300 p-4">Great nature access<br/>Very cheap</td>
                                <td className="border border-gray-300 p-4">Bad tech<br/>Not easy to make friends</td>
                                <td className="border border-gray-300 p-4">I remain very interested in Boise long term, especially when I'm 30+. I think as global warming gets worse, places like Austin and Phoenix will become less habitable and places like Boise will really thrive. I'm curious what the next 20 years will look like for that.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="mt-10 text-3xl md:text-4xl underline">What I've Noticed Since Moving</h2>
                <div className="ml-24 mt-4 text-xl md:text-3xl mb-6">
                    <ol className="list-decimal space-y-4">
                        <li>A lot of people ask me why I moved here and I just respond with "Vibes". This seems to be a pretty common answer when I ask them back. A lot of people move to Austin looking for a change. This is a great feedback loop. Because so many people move here to make friends, Austin has become known as a place that's super easy to move, causing more people who want a change in life to move here. I think what's also great about ATX, is there are so many free, outdoor events – facilitated by the great weather. Chatting with people between pickleball or walks on the river trail make it much easier to make authentic connections than shouting in someone's ear at a bar in NYC.</li>
                        <li>People in Austin really are so much nicer. Several times I was lost downtown, trying to find somewhere, and a complete stranger stopped and asked me if I needed some directions. This never happened to me in a Northeast city. I frequently find myself about to honk my horn (as I often do in Boston or CT), but no one really does that here and I don't want to disturb the peace.</li>
                        <li>In person tech events are just so much better than online. I did various coffee chats with folks while living at home. Scheduling a time virtually is a pain and it feels very transactional. Here, I've met a lot of personal friends at networking events and just awesome folks in general. I've been to free dinners, tech roast shows, and casual meetups. They're all great!</li>
                        <li>It's really fun to just meet other folks in tech. You get a great feel for different industries. On my kickball team I joined, we have a SpaceX engineer, Paypal Ops, and an AI startup founder. It was really cool to just casually chat with these folks about tech news at the bar after our weekly kickball game and get their inside take on what's actually happening compared to the all the slop being posted online.</li>
                        <li>It's still small enough you see a lot of the same people. When I first moved here, I got coffee with a few tech folks I knew through an online community. Two weeks later, I saw one of these same people at the grocery store. A great side effect of this is that if someone is a bad actor whether professionally or personally, the consequences are larger because the network is smaller here. Perhaps this is a reason why people are so much nicer here.</li>
                    </ol>
                </div>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Rapid Fire Things I Like</h2>
                <div className="ml-24 mt-4 text-xl md:text-3xl mb-6">
                    <ul className="list-disc space-y-2">
                        <li>No income tax</li>
                        <li>$80 grocery bills for the week</li>
                        <li>A renters market when apartment hunting</li>
                        <li>Football night games starting at 7pm and finishing at 10pm</li>
                        <li>Being able to fly anywhere in the country in ~3.5 hours</li>
                        <li>Great lakes and rivers in the city for swimming</li>
                    </ul>
                </div>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Making Friends</h2>
                <p className="text-xl md:text-3xl mb-6">
                    I think moving places is definitely hard. The first few weekends, I would finish work on Friday afternoon and almost dread the weekend as I really didn't have any plans nor anyone really to text to hang out with. Some great advice I got was to just pick 3 - 4 events and go to those super consistently. The "regulars" at those events will pick up that you're not just a floater and it will be a lot easier to turn those conversations into more regular friendships. For me, this was a monthly tech event, playing pickleball at the same court every Monday, and going to a weekly walking event on Saturday mornings.
                </p>

                <h2 className="mt-10 text-3xl md:text-4xl underline">Some Cons</h2>
                <div className="ml-24 mt-4 text-xl md:text-3xl mb-6">
                    <ul className="list-disc space-y-2">
                        <li>Coming from the Northeast, the Italian food here is bad.</li>
                        <li>The highways really divide neighborhoods in a bad way (esp East Austin with Downtown).</li>
                        <li>Sometimes all the tech stuff / tech bros can be cringe at times</li>
                    </ul>
                </div>

                <h2 className="mt-10 text-3xl md:text-4xl underline">BONUS – My Favorite Austin Events</h2>
                <div className="ml-24 mt-4 text-xl md:text-3xl mb-6">
                    <ul className="list-disc space-y-2">
                        <li>The Board Walks by ATX</li>
                        <li>Lenny's Product Meetup</li>
                        <li>Vanta Soccer Rooftop</li>
                        <li>AiTX meetup</li>
                        <li>FIESTA</li>
                        <li>Austin Coffee and Chill Cold Plunge</li>
                        <li>Free Night Swims at Barton Springs</li>
                    </ul>
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

export { Austin };
