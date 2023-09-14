import React, { useState, useEffect,useContext } from "react";
import {sample} from "../context"


function Comp2() {
  
const {count} = useContext(sample)

  useEffect(() => {
    //   setCount("jwgdyjgdvv") 
  }, [count]);

return(


     <div className="box">
       
        <div>
<h2>helloo thendi abhiiiii</h2>
<h2  style={{"color":"red"}}>{count}</h2>
    </div>

    </div>
    
)
}

export default Comp2