import {SET_FILTER} from "../actionTypes";
import {VISIBLE_FILTERS} from "../../constants";


const initialState = VISIBLE_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
