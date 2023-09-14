import React,{useContext,useEffect} from 'react'
import { sample } from '../context'

const Comp3 = () => {
    const {count,setCount} = useContext(sample)

 useEffect(()=>{
      setCount(29)
 },[])

    return (
    <div className='box'>
        <h2  style={{"color":"red"}}>{count}</h2>   
        {/* <button onClick={()=>setCount(count+1)}></button> */}
    </div>
    
  )
}

export default Comp3
