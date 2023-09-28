import { createContext,useReducer } from "react";


const PlanContext=createContext()
const planReducer=(state,action)=>{
    switch(action.type){
        case 'BUYPLAN':
        return{
            plan:action.payload

        }
        case'SETERROR':
        return{
            plan:action.payload

        }
        default:
            return{
                plan:state
            }

    }
}


const PlanContextProvider=({children})=>{
    const[state,dispatch] =useReducer(planReducer,{
        plan:JSON.parse(localStorage.getItem('plan'))
    })
    return(
        <PlanContext.Provider value={{...state, dispatch}}>
            {children}
        </PlanContext.Provider>
    )
}

export {PlanContextProvider,PlanContext}