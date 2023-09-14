import React, { useState, useEffect,useContext } from "react";
import{sample} from '../context'


function Comp1(){
    const {count} = useContext(sample)

  return (
    <div className='box'>
      <h2>hello </h2>
      <h2  style={{"color":"red"}}>{count}</h2>
    </div>
  )
}

export default Comp1
