import React from "react";

function TextBlock(props) {
  return (
    <div className="m-10">
      <h1 className="text-4xl mb-2">
        {props.title }
      </h1>
      <p className="text-2xl">
        { props.body }
      </p>
    </div>
  )
}

export default TextBlock;