import React from "react";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-sung text-black">
            Buy and Sell Your Old Books
            <span className="text-blue-700">For the Best Prices</span>
          </h2>
          <p className="mf:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            nesciunt fuga et impedit voluptatibus, delectus optio soluta modi
            corrupti, quos pariatur beatae fugiat ipsa itaque? Provident ducimus
            animi sit a.
          </p>
          <div>
               <input type="search" name="search" id="search" placeholder="Search a book" className="py-1.5 px-2 rounded-s-sm outline-none" />
               <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-blue-800 transition-all ease-in duration-200">Search</button>
          </div>
        </div>
        <div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
