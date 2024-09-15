import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

    <App />
    </Router>
  </StrictMode>,
)





// <!-- <div class="grid grid-cols-1 sm:grid-cols-2">
//   <div class="min-h-[100px] rounded-lg bg-black shadow"></div>
//   <div class="min-h-[100px] rounded-lg bg-purple-800 shadow"></div>
// </div> -->

// <!-- <div class="grid grid-cols-1 sm:grid-cols-2">
//   <div class="min-h-[100px] rounded-lg bg-black shadow"></div>
//   <div class="min-h-[100px] rounded-lg bg-purple-800 shadow"></div>
//   <div class="min-h-[100px] rounded-lg bg-orange-800 shadow"></div>
// </div> -->

{/* <div class="grid sm:grid-cols-12">
  <div class="min-h-[100px] rounded-lg bg-black shadow sm:col-span-3"></div>
  <div class="min-h-[100px] rounded-lg bg-purple-800 shadow sm:col-span-6"></div>
  <div class="min-h-[100px] rounded-lg bg-orange-800 shadow sm:col-span-3"></div>
</div> */}



// use together to hide any item 
// sm:block 
// hidden 





// <div className="background-gradient-color ">

      
// <div className=" grid lg:grid-cols-2  grid-col-1 gap-5 ">
//   <div className="Image-content   overflow-hidden  ">
//     <img src={Imag1}  className="transform transition-transform duration-300 group-hover:scale-110" alt="" />
//   </div>

//   <div className="text-content  ">


//     <h1 className="  group-hover:text-green-600">Crypto Website Development For Defix</h1>
//     <p>
//       The Time Traveller (for so it will be convenient to speak of him)
//       was expounding a recondite matter to us.
//     </p>
//     <div className="text-content-box">
//       <h2>Technologies</h2>
//       <div className="flex">
//         <button className="btn">Click Me</button>
//         <button className="btn">Click Me</button>
//         <button className="btn">Click Me</button>
//       </div>
//     </div>

//     <div className="text-item-box grid grid-cols-2 ">
//       <div className="sub-box">
//         <h4>Duration</h4>
//         <p>3 Weeks</p>
//       </div>

//       <div className="sub-box">
//         <h4>Atmosphere</h4>
//         <p>Cool</p>
//       </div>

//       <div className="sub-box">
//         <h4>Role</h4>
//         <p>NodeJS API Server</p>
//       </div>

//       <div className="sub-box">
//         <h4>Technology</h4>
//         <p>GRaphQL</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>