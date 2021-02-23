import React from "react";

function Title({ name }) {
  return (
    <div className="py-12 | md:flex md:items-center md:justify-center">
      <div className="title md:flex md:flex-col md:items-center md:justify-center">
        <h1 className="pb-2 md:p-6 md:px-12 text-3xl md:text-5xl inline-block | bg-clip-text bg-gradient-to-br from-blutter to-blue-500 text-transparent | relative z-20">
          {name}
        </h1>
        <p className="w-12 h-1  md:h-2 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 text-center"></p>
      </div>
    </div>
  );
}

export default Title;
