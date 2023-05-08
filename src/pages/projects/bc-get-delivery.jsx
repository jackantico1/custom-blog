import React from "react";
import BostonGlobe from '../../images/bostonGlobe.png'
import TheHeights from '../../images/theHeights.png'
import BcGetDelivery from '../../images/bc_get_delivery.png'

function BCGetDelivery() {
  return (
    <div className="bg-slate-100 pb-16 min-h-screen min-w-[500px]">
        <div className="ml-10 pt-24">
            <h1 className="text-7xl md:text-9xl">BC GET Delivery</h1>
            <h2 className="text-2xl md:text-3xl">Role: Co-Founder</h2>

            <h2 className="mt-10 text-3xl md:text-4xl underline">About</h2>
            <p className="text-xl md:text-3xl">
                I co-founded BC GET Delivery with JB Bruggerman during my freshman year at Boston College. I worked primarily in Sales and Operations. We particpated in the Shea Center for Entreneurship accelerator program which gave us some seed money, access to legal resources, and mentorship. Some highlights include:
            </p>
            <div className="ml-24 mt-4 text-xl md:text-3xl">
                <h1>I trained 15+ GET'ers - our delivery team of other college students and delivered over 250 orders myself personally.</h1>
                <h1>I organized and ran Day Of GET, an on campus stunt where co-founder and I "lived" on the campus quad in a tent meant to represent a dorm room for 24 hours. During class changes--when the quad had the most food traffic--we would stage deliveries. </h1>
                <h1>I met with VP of BC Athetlics to introduce luxury food delivery service during football games</h1>
            </div>

            <h2 className="mt-10 text-4xl underline">Assets</h2>
            <div className="flex flex-row">
              <img
                onClick={() => document.location.href = 'https://www.bostonglobe.com/business/2018/04/04/food-fight-colleges-take-uber-eats-with-apps-and-dorm-delivery/lMtGHEpv38cOBzbd63gUfL/story.html'}
                className="h-24 hover:cursor-pointer" 
                src={BostonGlobe} alt='Boston Globe' />
              <img
                onClick={() => document.location.href = 'https://www.bcheights.com/2018/04/08/on-campus-food-delivery-service-bc-get-experiences-success-after-launch/'}
                className="h-40 hover:cursor-pointer" 
                src={TheHeights} 
                alt='The Heights' />
            </div>
        </div>
    </div>
  );
}

export { BCGetDelivery };