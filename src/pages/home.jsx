import React from "react";
import githubLogo from '../images/github-mark.png'
import linkedinLogo from '../images/linkedinLogo.png'
import BlogCard from '../components/BlogCard'
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
        <div className='flex flex-row justify-end'>
          <img
            onClick={() => window.open("https://github.com/jackantico1","_self")}
            className='w w-12 h-12 m-3 hover:cursor-pointer' 
            src={githubLogo} alt="Logo" />
          <img
            onClick={() => window.open("https://www.linkedin.com/in/jackantico/","_self")}
            className='w w-12 h-12 m-3 mr-8 hover:cursor-pointer' 
            src={linkedinLogo} alt="Logo" />
        </div>

        <div className='x mt-20 ml-20'>
          <h1 className="text-5xl md:text-7xl font-bold">Hi, I'm Jack</h1>
          <h1 className="text-2xl md:text-3xl">Welcome to my website.</h1>
        </div>

        <h1 className='text-2xl md:text-4xl mt-10 ml-10 underline'>Projects I've Worked On</h1>
        <div className='flex flex-row flex-wrap ml-10'>
          {/* <ProjectCard
                title='AI Experiments'
                slug='ai-experiments'
                dates={'3/22 - 11/23'}/> */}
          <ProjectCard
                title='Helium'
                slug='helium'
                dates={'3/22 - 11/23'}/>
            <ProjectCard
                title='RPA @ Canoe'
                slug='rpa-canoe'
                dates={'4/24 - 5/25'}/>
            <ProjectCard
                title='BC GET Delivery'
                slug='bc-get-delivery'
                dates={'11/17 - 3/19'}/>
            <ProjectCard
                title='A/B Tests @ Target'
                slug='target'
                dates={'5/20 - 8/20'}/>
            <ProjectCard
                title='ReturnLogic'
                slug='returnlogic'
                dates={'7/21 - 3/22'}/>
            <ProjectCard
                title='Jibra'
                slug='jibra'
                dates={'3/22 - 11/23'}/>
            <ProjectCard
                title='BC Dining Hall Menus'
                slug='bc-dining-hall-menus'
                dates={'3/22 - 11/23'}/>
        </div>

        <h1 className='text-2xl md:text-4xl mt-10 ml-10 underline'>Blogs</h1>
        <div className='flex flex-row flex-wrap ml-10'>
        <BlogCard 
                title='Moving to Austin' 
                publishDate='10/25/2025' 
                slug='austin'/>
          <BlogCard 
                title='Building an AI Notetaker with Loveable' 
                publishDate='08/17/2025' 
                slug='building-an-ai-notetaker-with-loveable'/>
          <BlogCard 
                title='Pixels: Crypto Game Review' 
                publishDate='02/18/2023' 
                slug='pixels'/>
            <BlogCard 
                title='Reflections on a Year in Product Management' 
                publishDate='03/11/2023' 
                slug='reflections-on-a-year-in-product-management'/>
              <BlogCard 
                title='Using a Weighted Blanket for a Week' 
                publishDate='04/27/2020' 
                slug='using-a-weighted-blanket-for-a-week'/>
              <BlogCard 
                title='What I Wish I Knew Before I Started Job Hunting' 
                publishDate='09/22/2020' 
                slug='what-I-wish-knew-before-I-started-job-hunting'/>
        </div>
    </div>
  );
}

export { Home };
