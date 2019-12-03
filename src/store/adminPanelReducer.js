

const initialState = {
    product: {
        name: 'iPhone XS Ekran',
        category: 'iPhone XS',
        description: "Super Ekran z Chin"

    }
}


const adminPanelReducer = (state = initialState, action) => {

switch(action.type){
    default:
        console.log("Unknow action" + action.type);
        return state;
}

}

export default adminPanelReducer;