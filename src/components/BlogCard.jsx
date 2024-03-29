import React from "react";

function BlogCard(props) {
  return (
    <div
      onClick={() => {
        window.location.href = `/${props.slug}`
      }}
      className='bg-red-400 rounded-lg w-[400px] h-32 m-10 hover:cursor-pointer 
      shadow-lg transform flex flex-col justify-between hover:bg-red-500 transition duration-500 hover:scale-125'>
      <h1 className='text-xl md:text-3xl m-3'>{props.title}</h1>
      <h1 className='m-3 mt-0 text-right'>{props.publishDate}</h1>
    </div>
  )
}

export default BlogCard;