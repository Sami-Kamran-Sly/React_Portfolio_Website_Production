import React from "react";
import Imag1 from "../../public/images/Hero2.webp";
import Imag2 from "../../public/images/Group 1 (1).jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import Button from "../components/Button";
import transitonsPage from "../components/transitonsPage";
import BaseContainerBox from "../components/BaseContainerBox";
import LazyImage from "../components/LazyImage";
function NextHome() {
  return (
    <BaseContainerBox>
      <div className=" mt-2 ">
        <div className="bg-image">
          <LazyImage
                src={Imag2}
                alt="Group 1"
                hash="LrGoL--jjbod~2spWEj@xGN2WWfj"
        
                
              />
        </div>

        <div className="flex justify-center  gap-5 flex-wrap-reverse mt-24   ">
          <div className=" text_box  basis-80  mt-16 ">
            <div className="flex  justify-self-start items-center gap-5  ">
                <IoIosArrowDropleft className=" bg-slate-50 text-black  text-2xl   " />

            <h2>Carl Hanson_</h2>
            </div>
            <h1>Web Developer & Growth Consultant</h1>
            <p className="paragraph">
              Sometimes five Imprimaturs are seen together dialogue-wise in the
              piazza of one title-page, complimenting and ducking each to other
              with their shaven reverences, whether the author, who stands by in
              perplexity at the foot of his epistle, shall to the press or to
              the sponge.
            </p>

          
            <Button value="Download Resume" />


   
          </div>

          <div className=" full_image basis-80 ">
            <LazyImage
                src={Imag1}
                alt="Hero 2"
                hash="L*H3ui${YFr^_Hs.XMj0rvRoaMWX"
        
                
              />
          </div>
        </div>
      </div>
    </BaseContainerBox>
  );
}

export default  transitonsPage( NextHome);
