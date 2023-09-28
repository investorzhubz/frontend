import { createContext,useReducer } from "react";


const ErrorContext=createContext()
const errorReducer=(state,action)=>{
    switch(action.type){
        case 'ERROR':
        return{
            error:action.payload

        }
        default:
            return{
                error:null
            }

    }
}


const ErrorContextProvider=({children})=>{
    const[state,dispatch] =useReducer(errorReducer,{
        error:null
    })
    return(
        <ErrorContext.Provider value={{...state, dispatch}}>
            {children}
        </ErrorContext.Provider>
    )
}

export {ErrorContextProvider,ErrorContext}