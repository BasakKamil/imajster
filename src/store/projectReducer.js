


const initialState = {
    product: {
    
    },
    products: [],
    editMode : true,
    titleOfProductforRemoval: ""
}


const projectReducer = (state = initialState, action) => {

switch(action.type){
    case 'SEND_PRODUCT_TO_EDIT': 
    const product = action.playload;
    return {product,
            editMode: true,
            titleOfProductforRemoval: product.name
            }
    case 'LOGIN_ERROR': 
        console.log('login error');
        return {
            ...state,
            authError: 'Login failed'
        }
    case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }

    default:
        console.log("Unknow action" + action.type);
        return state;
}

}

export default projectReducer;