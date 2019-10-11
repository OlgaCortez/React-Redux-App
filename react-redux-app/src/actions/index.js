import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchQuotes = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios
    .get('https://api.kanye.rest')
    .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data.quote}))
    .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err.res}));
};
