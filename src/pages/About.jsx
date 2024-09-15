import React from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import transitonsPage from '../components/transitonsPage';
import ProgressBar from '../components/ProgressBar';
import { skills } from '../data';
import BaseContainerBox from '../components/BaseContainerBox';
import Image from "../../public/images/Group 36.png"
import LazyImage from '../components/LazyImage';
import { useTypewriter } from 'react-simple-typewriter';

function About() {
 




  const [text] = useTypewriter({
    words: ["Front-end","Back-end", "Full-stack"],

    loop: true,
    delaySpeed: 1500,
    typeSpeed: 200,
    deleteSpeed: 150,
    });
  
  
  return (

      
    <BaseContainerBox>
      <div className=" mt-8  ">
        <div className="flex  justify-center gap-10 flex-wrap">
          <div className="full_image " style={{flexBasis:"28rem"}} >
          <LazyImage
                src={Image}
                alt="Group 5"
                hash="L78XIHRj00xu00t7~paeIT%2%3Io"
        
                
              />
          </div>

          <div className="text_box basis-2/5">
            <h2>I Specialize in _</h2>
            <div className="flex justify-self-start items-center gap-5">
              <IoIosArrowDropleft className="bg-slate-50 text-black text-2xl" />
              <h1>{text}</h1>
            </div>
        
            <div className="relative">
      {/* Slide Navigation */}

      <div>
      {skills.map((skill, index) => (
        <div className='background_element mb-4' key={index}>
          <div className="about-stats">
            <h4 className=" sm:text-2xl mb-2 ">{skill.title}</h4>
            <div className="progress-bars">
              {skill?.items?.map((item, idx) => (
                <>
        <ProgressBar
                  key={idx}
                  icon={item.icon}
                  percentage={item.percentage}
                  title={item.title}
                  color={item.color}
                  />
     
                  </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>






{/* 
            <div className='background_element mb-4'>
      <div className="about-stats">
        <h4 className="stat-title">Front-End  & Back-End Languges </h4>
        <div className="progress-bars">
          <div className="progress-bar">
            <h3 className="prong-title">
              <FaHtml5 />
            </h3>
            <div className="progress-con">
              <p className="prong-text">100%</p>
              <div className="progress">
                <span className="html" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
              <FaCss3Alt />
            </h3>
            <div className="progress-con">
              <p className="prong-text">100%</p>
              <div className="progress">
                <span className="css" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
              <FaBootstrap />
            </h3>
            <div className="progress-con">
              <p className="prong-text">80%</p>
              <div className="progress">
                <span className="bootstrap" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
              <SiTailwindcss />
            </h3>
            <div className="progress-con">
              <p className="prong-text">75%</p>
              <div className="progress">
                <span className="tailwind" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
              <FaJsSquare />
            </h3>
            <div className="progress-con">
              <p className="prong-text">60%</p>
              <div className="progress">
                <span className="javascript" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className='background_element  '>
      <div className="about-stats">
        <h4 className="stat-title">Front-End Development & Frame Works </h4>
        <div className="progress-bars">
          <div className="progress-bar">
            <h3 className="prong-title">
            <FaGithub />

            </h3>
            <div className="progress-con">
              <p className="prong-text">100%</p>
              <div className="progress">
                <span className="html" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
            <TbBrandRedux />

            </h3>
            <div className="progress-con">
              <p className="prong-text">100%</p>
              <div className="progress">
                <span className="css" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
              <FaBootstrap />
            </h3>
            <div className="progress-con">
              <p className="prong-text">80%</p>
              <div className="progress">
                <span className="bootstrap" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
              <SiTailwindcss />
            </h3>
            <div className="progress-con">
              <p className="prong-text">75%</p>
              <div className="progress">
                <span className="tailwind" />
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <h3 className="prong-title">
            <FaReact/>
            </h3>
            <div className="progress-con">
              <p className="prong-text">60%</p>
              <div className="progress">
                <span className="javascript" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div> 
 */}


           
          </div>
          </div>
          </div>
        </div>

    </BaseContainerBox>
  );
}

export default transitonsPage(About);
