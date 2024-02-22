import {GET_CHART_DATA_LOADING,GET_CHART_DATA_SUCCESS,GET_CHART_DATA_ERROR} from "./actionType";
const initState={
    data:[],
    loading:false,
    error:false,
}
export const reducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case GET_CHART_DATA_LOADING:{
            return {...state,loading:true,error:false}
        }
        case GET_CHART_DATA_SUCCESS:{
            return {...state,loading:false,error:false,data:payload}
        }
        case GET_CHART_DATA_ERROR:{
            return {...state,loading:false,error:true}
        }
        default:{
            return initState;
        }
    }
}