import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

const iconMap = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    bootstrap: <FaBootstrap />,
    tailwind: <SiTailwindcss />,
    javascript: <FaJsSquare />,
    react: <FaReact />,
    github: <FaGithub />,
    redux: <TbBrandRedux />
  };
function ProgressBar({title, icon, percentage,color}) {

    return (
        <div className="progress-bar">
          <div className=' flex text-sm justify-start gap-1 items-center'>

          <h3 className="prong-title" style={{color: color, fontSize:"18px" }} >
            {iconMap[icon]}
          </h3>
            <span className=''>{title}</span>
          </div>
          <div className="progress-con">
            <p className="prong-text">{percentage}%</p>
            <div className="progress">
              <span className={`${icon}  `} style={{ width: `${percentage}%`,  backgroundColor: color   }} />
            </div>
          </div>
        </div>
  )
}

export default ProgressBar
