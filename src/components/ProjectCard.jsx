import React from "react";

function ProjectCard(props) {
  return (
    <div
      onClick={() => {
        window.location.href = `/${props.slug}`
      }}
      className='bg-red-400 rounded-lg w-[400px] h-32  m-10 flex flex-col justify-between hover:cursor-pointer shadow-lg
      transform hover:bg-red-500 transition duration-500 hover:scale-125'>
      <h1 className='text-3xl m-3'>{props.title}</h1>
      <h1 className='m-3 text-right'>{props.dates}</h1>
    </div>
  )
}

export default ProjectCard;