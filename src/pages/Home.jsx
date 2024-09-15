import React, { useCallback, useEffect, useState } from "react";
import Imag1 from '../../public/images/Group 1.jpg'
import Imag2 from '../../public/images/Group 5.jpg'

import Button from "../components/Button";
import { useTypewriter } from 'react-simple-typewriter';

import transitonsPage from "../components/transitonsPage";
import BaseContainerBox from "../components/BaseContainerBox";
import LazyImage from "../components/LazyImage";
function Home() {
  const [text] = useTypewriter({
    words: ["Carl Hanson_"],
    loop: false,
    delaySpeed: 1500,
    typeSpeed: 200,
    deleteSpeed: 150,
    });
  
  const  handleDownload= useCallback( ()=> {
const link = document.createElement("a")
link.href = "../../public/images/Logo1 (1).png"
link.download = "Resume File"
document.body.appendChild(link)
link.click()
document.body.removeChild(link)

  },[])

  return (

<div  className="home"




>

  

    <BaseContainerBox>

<div className=" mt-28 ">

    <div className="flex justify-center  gap-5 flex-wrap-reverse  ">

      <div className=" text_box  basis-80 ">
        <h2>{text}</h2>
        <h1>
          Web Developer &
          Growth Consultant
        </h1>
        <p className="paragraph">
          Sometimes five Imprimaturs are seen together dialogue-wise in the
          piazza of one title-page, complimenting and ducking each to other with
          their shaven reverences, whether the author, who stands by in
          perplexity at the foot of his epistle, shall to the press or to the
          sponge.
        </p>
      

            <div className="text_image mt-4   ">

            <LazyImage
                src={Imag2}
                alt="Group 5"
                hash="L87285SQx0aR*Dj[azRoT9sko@Na"
        
                
              />

        </div>
        <div className="sm:mt-32 mt-24">

        <Button  onClick={handleDownload} value="Download Resume" /> 
        </div>


      </div>

      <div className=" full_image basis-80 ">

              <LazyImage
                src={Imag1}
                alt="Group 1"
                hash="LbK1wNIo~qRj?voeazoz_3a}M{s:"
        
                
              />
        
      </div>

    </div>

    
  

  </div>
  </BaseContainerBox>
</div>
);


}



export default transitonsPage(  Home);
