

const initialState = {
    product: {
        name: 'iPhone XS Ekran',
        category: 'iPhone XS',
        description: "Super Ekran z Chin"

    },
    editMode : false,
    titleOfProductforRemoval: ""
}


const adminPanelReducer = (state = initialState, action) => {

switch(action.type){
    case 'SEND_PRODUCT_TO_EDIT': 
    const product = action.playload;
    return {product,
            editMode: true,
            titleOfProductforRemoval: product.name
            }

    default:
        console.log("Unknow action" + action.type);
        return state;
}

}

export default adminPanelReducer;