 const intialState = {
    weather:{}
}
const weatherReducer = (state = intialState,action)=>{
    switch(action.type){
        case 'SUCCESS_WEATHER':
            return { weather:action.payload}
            
        default:
            return state    
    }
    
}
export default weatherReducer