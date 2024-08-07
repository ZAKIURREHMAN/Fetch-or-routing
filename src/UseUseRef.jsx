import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './UseUseRef.css'
function UseUseRef() {
    const EmptyString = ['','','','']
    const [data,setdata] = useState(EmptyString)
    let val;

    const useUseRefss = [useRef(),useRef(),useRef(),useRef(),]

    useEffect(()=>{
        useUseRefss[0].current.focus()
    },[])
    const ChangeHandler = (e,i)=>{

        if(i<data.length-1){
            useUseRefss[i+1].current.focus() 
        }



        val = e.target.value;

        let CopyString = [...data]
        CopyString[i] = val
        setdata(CopyString)


    }
  return (
    <div className='container' >
        {
            data.map((item,index)=>(
                <div  key={index} >
                <input type="text" value={data[index]}  ref = {useUseRefss[index]} onChange={(e)=>ChangeHandler(e,index)} maxLength={1} /> <br />
                </div>
            ))
        }
        <Link to='/axios' ><button>Move to ADD TO CARD </button></Link>
    </div>
  )
}

export default UseUseRef