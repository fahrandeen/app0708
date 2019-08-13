import {getStockists, updateToggledStockist}  from "../lib/stockistServices";

const initState = {
    stockists: []
}

const STOCKIST_ADD = 'STOCKIST_ADD'
const STOCKIST_LOAD = 'STOCKIST_LOAD'
const STOCKIST_TOGGLE = 'STOCKIST_TOGGLE'

export const loadStockists = (stockists) => ({type: STOCKIST_LOAD, payload:stockists})
export const replaceStockist = (stockist) => ({type: STOCKIST_TOGGLE, payload:stockist})



export const fetchStockists = () => {
    return(dispatch) => {
        getStockists()
            .then(stockists => dispatch(loadStockists(stockists)))
    }
}

export const toggleStockist = (id) => {
    console.log(id)
   return (dispatch, getState) => {
        const {stockists} = getState()
        const stockist = stockists.find(t => t.id === id)
        const toggled = {...stockist, isActive : !stockist.isActive}
        updateToggledStockist(toggled)
            .then(res => dispatch(replaceStockist(res)))
            
   }
}

export const getVisibleStockist = (stockists, filter) => {
    switch (filter) {
        case 'active':
            return stockists.filter(t => t.isActive)
        case 'notActive':
            return stockists.filter(t => !t.isActive)
        default:
            return stockists;
    }
}

export default(state = initState, action) => {
    switch (action.type) {
        case STOCKIST_ADD:
            return {...state, stockists:state.stockists.concat(action.payload)}
        case STOCKIST_LOAD:
            return {...state, stockists: action.payload}
        case STOCKIST_TOGGLE:
            return {...state, stockist: state.stockists.map(t =>t.id === action.payload.id ? action.payload : t)}
        default:
            return state;
    }
}