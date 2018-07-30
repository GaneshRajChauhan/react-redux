import * as actionTypes from './actionTypes';

export const saveResult=(res)=>{
    const updatedResult=res*2;
    return{
        type:actionTypes.STORE_RESULT,
        result:updatedResult
    }
}
export const storeResult=(res)=>{
    return (dispatch,getstate)=>{
     setTimeout(()=>{
         const oldCounter=getstate().ctr.counter;
         console.log('Async'+oldCounter);
        dispatch(saveResult(res))
     },2000);
    } 
}
export const deleteResult=(resElId)=>{

    return{
        type:actionTypes.DELETE_RESULT,
        resultElId:resElId
    }
}