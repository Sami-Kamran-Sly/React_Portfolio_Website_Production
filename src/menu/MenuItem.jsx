import React, { memo } from "react";
import LazyImage from "../components/LazyImage";
function MenuItem({ menuItems }) {
  return (
    <>
      {menuItems.map((item,index) => {
        return (
          <>
            <div key={index}   className=" grid lg:grid-cols-2  grid-col-1 gap-5 mt-8 group  ">
              <div className="Image-content overflow-hidden  ">
                
                
            <LazyImage
          src={item.image}
          alt={item.title}
          hash={item.hash} 
           className="transform transition-transform duration-500 group-hover:scale-110"
                
              />
         


              </div>

              <div className="text-content">
                <h1 className="group-hover:text-blue-400 sm:text-4xl text-2xl ">
                  {item.title}
                </h1>
                <p className="sm:text-sm"> {item.description}</p>

                <div className="text-content-box">
                  <h2 className="sm:text-3xl group-hover:text-blue-400 text-sm ">
                    Technologies
                  </h2>
                  <div className="flex">
                    <p>{item.technologies}</p>
                  </div>
                </div>

                <div className="text-item-box grid grid-cols-2">
                  <div className="sub-box">
                    <h4 className=" sm:text-xl">Duration</h4>
                    <p>{item.duration}</p>
                  </div>

                  <div className="sub-box">
                    <h4 className=" sm:text-xl">Role</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default memo(MenuItem);
