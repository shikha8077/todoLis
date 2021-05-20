import { useState } from "react"

const initialData ={
    list:[]
}
export  const todoReducer =(state=initialData,action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TODO":

         const{id,data} = action.payload;

         return{
             ...state,
             list:[...state.list,{
                id:id, 
                data:data
             }
            ]
         }
         case "DELETE_TODO":
             const newList = state.list.filter((elem) => elem.id != action.id)

         return{
             ...state,
             list:newList
         }
         default:return state;

    }
}