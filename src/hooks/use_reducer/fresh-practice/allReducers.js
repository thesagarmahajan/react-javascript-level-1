let CountReducer = (state, action) => {
    
    switch(action.type){
        case "+":
            return {count: state.count+1}
        case "-":
            return {count: state.count-1}
        default:
            return {count: 0}
    }
}

export {CountReducer}