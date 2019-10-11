import { START_FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions/index';

const initialState = {
    quote: null, 
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                quote: action.payload
            }; 
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;