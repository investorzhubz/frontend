import {PlanContext} from '../context/PlanContext'
import {useContext} from 'react'


export const usePlanContext=()=>{

      const context=useContext(PlanContext)
      if(!context){
        throw Error('UseWorkoutContext must be used inside a workoutContextProvider')
      }
      return context


    
}

