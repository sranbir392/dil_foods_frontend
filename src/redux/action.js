import axios from "axios";
import { GET_BAR_DATA_SUCCESS,  GET_CHART_DATA_LOADING, GET_HEADER_DATA_ERROR, GET_HEADER_DATA_SUCCESS, GET_LINE_DATA_SUCCESS, GET_PIE_DATA_SUCCESS} from "./actionType";

export const getHeaderData = (year) => async (dispatch) => {
    dispatch({ type: GET_CHART_DATA_LOADING })
    try {
        let res = await axios.get(`https://dil-foods-backend.onrender.com/headerData?year=${year}`);
        // console.log(res.data)
        dispatch({ type: GET_HEADER_DATA_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_HEADER_DATA_ERROR })
    }
}

export const getPIEData = (year) => async (dispatch) => {
    dispatch({ type: GET_CHART_DATA_LOADING })
    try {
        let res = await axios.get(`https://dil-foods-backend.onrender.com/pieData/?year=${year}`);
        // console.log(res.data)
        
        dispatch({ type: GET_PIE_DATA_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_HEADER_DATA_ERROR })
    }
}
export const getLineData = (year) => async (dispatch) => {
    dispatch({ type: GET_CHART_DATA_LOADING })
    try {
        let res = await axios.get(`https://dil-foods-backend.onrender.com/LineData?year=${year}`);
        // console.log(res.data)
        
        dispatch({ type: GET_LINE_DATA_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_HEADER_DATA_ERROR })
    }
}
export const getBarData = (year) => async (dispatch) => {
    dispatch({ type: GET_CHART_DATA_LOADING })
    try {
        let res = await axios.get(`https://dil-foods-backend.onrender.com/barData?year=${year}`);
        
        dispatch({ type: GET_BAR_DATA_SUCCESS, payload: res.data })
        // console.log(res.data)
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_HEADER_DATA_ERROR })
    }
}

