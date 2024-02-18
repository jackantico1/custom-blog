import React from "react";

function Pixels() {

  return (
    <div className="bg-slate-100 min-h-screen pb-10">
      <div className="ml-10 pt-24">
        <h1 className="text-4xl md:text-7xl">Pixels: A Crypto Game Review</h1>
          <p className="text-xl md:text-2xl m-8">
            I remain convinced that crypto is still the next big thing for several reasons. I won’t discuss them now as that’s really an entirely separate blog. I’ve always been focused on the more practical applications of crypto and haven’t really dove into the gaming side of it which is a large part of the ecosystem. So, I decided to start playing a new crypto game, Pixels, to learn more about the space. I’ll break down how Pixels work, the current economics of the game, and share some general thoughts.
          </p>

          <h2 className="text-3xl md:text-4xl ">About Pixels: Essentially Farmville</h2>
          <p className="text-xl md:text-2xl m-8">
            Pixels seems in many ways like it’s Farmville. Users join and buy seeds with coins. They plant the seeds and then harvest the crops, selling the crops for more coins or using the crops to make various goods. Players can then sell or trade these goods with other players. From my perspective, the game breaks down into a couple of main categories:
          </p>

            <div className="ml-8">
              <h3 className="text-2xl md:text-3xl">Land</h3>
              <p className="text-xl md:text-2xl m-4">
                There is one central lobby called Terra Villa which has some farmland where you can plant crops on soil lots. There are also five thousand NFT land plots that users can buy which also have soil lots. Players can then enter these farms owned by other players for free to plant and harvest crops. Each farm has various attributes such as the number of soil lots and the various industries it can support such as mines, hives, and mills to produce various materials such as iron ore, honey, and flour. Lands come in two different sizes: small with 48 soil lots or large with 60 soil lots.
              </p>
            </div>

            <div className="ml-8">
              <h3 className="text-2xl md:text-3xl">Quests</h3>
              <p className="text-xl md:text-2xl m-8">
                Quests are another part of the game and is how the creators guide you through learning the basics. In the first quests, you complete simple tasks like planting your first crops and chopping down trees. The quests get more complicated as you complete more of them. There are several characters in Terra Villa waiting to give you quests (this part reminds me a bit of Pokémon).
              </p>
            </div>

            <div className="ml-8">
              <h3 className="text-2xl md:text-3xl">Skills</h3>
              <p className="text-xl md:text-2xl m-8">
                Players also have skill levels which relates to how productive they are at producing certain goods. For example, having a higher farm skill level lets you buy rarer seeds which create more valuable crops. The more you perform certain skills, the better you become at them.
              </p>
            </div>

            <div className="ml-8">
              <h3 className="text-2xl md:text-3xl">Currency</h3>
              <p className="text-xl md:text-2xl m-8">
                The game has a couple of different forms of currency. There are coins which you use to buy and sell crops with. There are also $PIXEL tokens which you can sell rarer crops and items for. Another key “currency” in the game is energy points which at the max you have 1000. Everytime you perform an action in the game you use energy which gradually regenerates. 
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl">Events</h3>
            <p className="text-xl md:text-2xl m-8">
              Pixels also has live events. Every Wednesday they have AMAs in the game where players can go to the Theatre in Terra Villa and ask questions to game’s creators. This is a cool concept and something I don’t think a ton of other crypto games have.
            </p>


          <h2 className="text-3xl md:text-4xl">Pricing</h2>
          <p className="text-xl md:text-2xl m-8">
            The current price for various land NFTs is about 1.2 Eth or $3000 dollars. Just 6 months ago, these NFTs were trading for about $300 so a 10x increase is pretty crazy. Pixels also has the concept of VIP. When a player buys the VIP status they get access to certain perks such as higher energy regeneration and the ability to hold onto more items.
          </p>

          <h2 className="text-3xl md:text-4xl">The Community</h2>
          <p className="text-xl md:text-2xl m-8">
            Pixels has a pretty solid community. There are about 175k users in their Discord community. There are also a fair amount of independent content creation around Pixels with various Youtube walkthroughs and explanations of how to play the game. I also stumbled across this extremely in depth dashboard highlighting all the different XP outputs of farming various groups and the level required to grow certain crops. I’m curious how the game developers feel about such dashboards as the goal of them is to maximize in-game profits  to then cash out $PIXELs.
          </p>

          <h2 className="text-3xl md:text-4xl">Crypto Kitties Parallels?</h2>
          <p className="text-xl md:text-2xl m-8">
            Readers may remember the Crypto Kitties game which isn’t very popular now but once accounted for 25% of all traffic on Ethereum. Crypto Kitties now has about 5% of the players it once had at its peak. The main goal of the Crypto Kitties game was to buy rare cat NFTs and breed them to make rarer cat NFTs which you would then naturally sell.

            Pixels doesn’t really have the production aspect to it and there’s a lot more actual gameplay involved. The game is fairly complicated and there are a lot of different rules to learn to play the game. The game on its own is honestly fairly relaxing and fun to play. I see the appeal of it.
          </p>

          <h2 className="text-3xl md:text-4xl">Feels Like a Very Natural Use Case</h2>
          <p className="text-xl md:text-2xl m-8">
            Honestly Pixels feels like a very natural use case. The gaming industry is already huge with players already paying millions of dollars for various decorations or in game upgrades. The game mirrors real life in some ways where you can buy land and then invest it by building various industries. This then attracts other, less experienced players to come and farm on the land where 1% of everything farmed gets distributed to the farm owner.

            This property of farming leads to land owners trying to promote their lands for people to farm it, leading them to create youtube videos explaining the game and in general market the game to more people.
          </p>
          
          <h2 className="text-3xl md:text-4xl">But Still Suffers from Rug Pull Stuff</h2>
          <p className="text-xl md:text-2xl m-8">
            I feel like the nagging question I still have is where the money is actually coming from? Play to earn games is a cool concept but what’s the source of the money being earned? The ideal answer is that players get utility and enjoyment from playing the game so that spending actual money on the game leads to more enjoyment. In that case, you could have players grinding out tasks to earn special tokens or items which then other players could spend actual money to buy from them.

            While Pixels is an enjoyable gaming experience, from pursuing the discord most players are just in the game to make money or profit from it in some way. Once they do that, most players seem like they will just leave for the next hot game (just like they did with Crypto Kitties). I’m curious to see where the game will be at 6 months or a year from now.

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

export { Pixels };