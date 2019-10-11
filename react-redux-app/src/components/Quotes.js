import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchQuotes } from '../actions/index';

const Quotes = props => {

    useEffect(() => {
        props.fetchQuotes();
    },[props.fetchQuotes]);

    if (props.isFetching) {
        return <h2>Loading Kanye's Quotes...</h2>;
    }

    return (
        <div className="quote">
         <h2>Kanye's Quote: {props.quote}</h2>
         <button onClick={props.fetchQuotes}>New Quote</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchQuotes}
)(Quotes);