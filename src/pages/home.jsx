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
          <ProjectCard
                title='Helium'
                slug='helium'/>
            <ProjectCard
                title='BC GET Delivery'
                slug='bc-get-delivery'/>
            <ProjectCard
                title='BC Dining Hall Menus'
                slug='bc-dining-hall-menus'/>
        </div>

        <h1 className='text-2xl md:text-4xl mt-10 ml-10 underline'>Blogs</h1>
        <div className='flex flex-row flex-wrap ml-10'>
            <BlogCard 
                title='Reflections on a Year in Product Management' 
                publishDate='08/08/2019' 
                slug='reflections-on-a-year-in-product-management'/>
              <BlogCard 
                title='Using a Weighted Blanket for a Week' 
                publishDate='08/08/2019' 
                slug='using-a-weighted-blanket-for-a-week'/>
              <BlogCard 
                title='What I Wish I Knew Before I Started Job Hunting' 
                publishDate='08/08/2019' 
                slug='what-I-wish-knew-before-I-started-job-hunting'/>
        </div>
    </div>
  );
}

export { Home };
