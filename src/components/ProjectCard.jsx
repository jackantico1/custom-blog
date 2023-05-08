import React from "react";

function ProjectCard(props) {
  return (
    <div
      onClick={() => {
        window.location.href = `/${props.slug}`
      }}
      className='bg-red-400 rounded-lg w-[400px] h-32 m-10 hover:cursor-pointer shadow-lg
      transform hover:bg-red-500 transition duration-500 hover:scale-125'>
      <h1 className='text-xl md:text-3xl m-3'>{props.title}</h1>
    </div>
  )
}

export default ProjectCard;