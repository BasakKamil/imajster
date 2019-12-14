export const createProduct = (product) => {
    return (dispatch,getState) => {
        // łaczymy bazedanych 
        dispatch({type: 'CREATE_PRODUCT', product});
    }
}