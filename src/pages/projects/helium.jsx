import React from "react";
import MxMatters from '../../images/cloudinaryPodcast.jpeg'
import YahooFinance from '../../images/yahoo_finance.png'
import HeliumSmall from '../../images/helium-small.jpg'
import HeliumTransparent from '../../images/helium_small_w_trans.png'

function Helium() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen min-w-[500px]">
        <div className="mx-16 pt-24">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-7xl md:text-9xl">Helium</h1>
                <h2 className="text-2xl md:text-3xl">Role: Technical Product Manager</h2>
              </div>
            </div>

            <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
            <p className="text-xl md:text-3xl">
                Helium is a headless, open source version of the Thought Industries platform. Thought Industires is an online learning company that allows customers to host and create content. I joined Thought Industries while Helium was still in it's development phase and oversaw the launch and implemntation of it by some of Thought Industries largest customers such as MongoDB and General Assembly. Helium took a lot of inspiration from Shopify's Hydrogen product. We also launched a new GraphQL API to support Helium which now proccesses over three million requests per month.
            </p>
            <h1 className="text-xl md:text-3xl mt-4">I served in a variety of functions to support it's succesful launch such as:</h1>
            <div className="ml-24 mt-4 text-xl md:text-3xl">
                <h1 className="my-4"><strong>Sales Engineer:</strong> I ran over 35+ developer sessions with various prospects</h1>
                <h1 className="my-4"><strong>Community Manager:</strong> I created and grew the Ti Developer Discord community from 0 -{">"} 150 community memebers and exchanged 500+ support messages with various 3rd party engineers as they explored Hehlium</h1>
                <h1 className="my-4"><strong>Technical Writer:</strong> I created the Ti Developer Guide series which has 600+ views on Youtube and wrote all technical documentation on the Helium Developer site.</h1>
            </div>


            {/* ASSETS */}
            <h2 className="mt-10 text-4xl underline">Assets</h2>
            <div className="flex flex-row flex-wrap">
              <img
                className="m-6 hover:cursor-pointer h-60"
                onClick={() => document.location.href = "https://cloudinary.com/podcasts/providing-headless-learning-management-systems-for-educators"}
                src={MxMatters} 
                alt='MX Matters'/>
              <img
                className="m-6 hover:cursor-pointer h-52"
                onClick={() => document.location.href = "https://finance.yahoo.com/news/thought-industries-wins-third-consecutive-060000275.html"}
                src={YahooFinance} 
                alt='Yahoo Finance'
                />
              <img 
                className="m-6 hover:cursor-pointer h-52"
                onClick={() => document.location.href = "https://developer.thoughtindustries.com"}
                src={HeliumTransparent}
                alt="Ti Developer Guide"
                />
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

export { Helium };