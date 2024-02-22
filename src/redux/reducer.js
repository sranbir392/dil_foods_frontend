import {GET_BAR_DATA_SUCCESS, GET_CHART_DATA_LOADING, GET_HEADER_DATA_ERROR, GET_HEADER_DATA_SUCCESS, GET_LINE_DATA_SUCCESS, GET_PIE_DATA_SUCCESS} from "./actionType";
const initState={
   headerData:[
    "hello"
   ],
   pieData:[],
   lineData:[],
   barData:[],
    loading:false,
    error:false,
}
export const reducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case GET_CHART_DATA_LOADING:{
            return {...state,loading:true,error:false}
        }
        case GET_HEADER_DATA_SUCCESS:{
            return {...state, loading:false, error:false,headerData:payload};
        }
        case GET_HEADER_DATA_ERROR:{
            return {...state,loading:false,error:true};
        }
        case GET_PIE_DATA_SUCCESS:{
            return {...state,loading:false,error:false,pieData:payload};
        }
        case GET_LINE_DATA_SUCCESS:{
            return {...state,loading:false,error:false,lineData:payload};
        }
        case GET_BAR_DATA_SUCCESS:{
            return{...state,loading:false,error:false,barData:payload};
        }
        default:{
            return state;
        }
    }
}