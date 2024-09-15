import React from 'react'
import Button from "../components/Button";

function CategroyBtn({categories,filterItem}) {
  return (
    <>
    
          {categories.map((category,index)=>{
          return (
    
        <Button className="mb-5" key={index} onClick={()=>filterItem(category)} value={category} /> 

            
          )
        })}
      
    </>
  )
}

export default CategroyBtn
