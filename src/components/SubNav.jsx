import React from "react";
import data from "../assets/subnav.json";
// import { imagenes } from '../assets/ImagenesData';
export const SubNav = ({ title }) => {
  return (
    <div className="absolute flex-grow mt-14 mx-0 mb-0 pt-0 px-7 pb-12 w-screen">
      {data?.subNav[title]?.map((item, index) => (
        <div className="grid grid-cols-12 pt-16 pb-4 basis-0" key={index}>
          <div className="col-start-2 col-end-9 gap-x-4">
            <div className="grid grid-cols-3">
              {item.vehiclesInfo.map(({ title, image }) => (
                <div>
                  <img className=" w-56" src={image} alt="" />
                  <h2>{title}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="col-start-9 col-end-10 w-[1px] bg-[#393c41] mx-auto"></div>
          <div className="col-start-10 col-end-12">
           <div className="flex flex-col px-2 py-3">
           {item.sections?.map((section, idx) => (
              <h2   className="mb-3 text-sm text-[#393c41] font-universal-sans-text leading-[20px] text-left"
              key={idx}>{section.title}</h2>
            ))}
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubNav;
