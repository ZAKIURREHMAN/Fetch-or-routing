import React,{useContext} from 'react'
import { CounterContext } from '../Context/Context'
import { Link } from 'react-router-dom'


function Adtocard() {
    const result = useContext(CounterContext)
    console.log(result)
  return (
    <div>
      <Link to='/usered' ><button>Move to UseRef Funcation</button></Link>
    </div>
  )
}

export default Adtocard