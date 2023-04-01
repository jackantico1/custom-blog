import React from "react";

function BlogCard(props) {
  return (
    <div className='bg-red-400 rounded-lg w-[400px] h-32 m-10 hover:cursor-pointer shadow-lg'>
      <h1 className='text-3xl m-3'>My Thoughts On Crypto</h1>
      <h1 className='m-3'>March 2nd, 2023</h1>
    </div>
  )
}

export default BlogCard;