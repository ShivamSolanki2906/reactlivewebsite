import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

            {
              Sdata.map((val, index) => {
                 return <Cards key={index} imgsrc={val.imgsrc} 
                   title={val.title}
                 />
              })
            }
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
