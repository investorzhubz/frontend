import { ErrorContext } from '../context/ErrorContext'
import {useContext} from 'react'


export const useErrorContext=()=>{

      const context=useContext(ErrorContext)
      if(!context){
        throw Error('UseWorkoutContext must be used inside a workoutContextProvider')
      }
    
      return context


    
}

