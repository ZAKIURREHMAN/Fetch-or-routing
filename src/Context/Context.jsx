import  {createContext} from 'react'
import ContextApi from '../AddtoCard/ContextAPI'
export const CounterContext = createContext(null)

export const ContextProvider = (props)=>{
   return  <CounterContext.Provider
     value={{ContextApi}}
      >
        {props.children}
    </CounterContext.Provider>   
}