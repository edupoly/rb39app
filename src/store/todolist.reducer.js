var initialState={
    todos:['get bmw','goto goa','pay bill','get veggies']
}
function todoReducer(state=initialState,action){
    if(action.type==='ADD_TODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETE_TODO'){
        var temp = [...state.todos];
        temp.splice(action.payload,1)
        return {...state,todos:[...temp]}
    }
    return state
}
export default todoReducer;