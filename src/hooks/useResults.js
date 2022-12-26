import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults]  = useState([]);
    const [error,setError] = useState('');

    const searchAPI = async ( searchedTerm ) => {
        try{
            const response  = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchedTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
            setError('');
        }
        catch(e) {
            setError('Something went wrong');
        }
    }

    useEffect(() => {
        searchAPI('pasta')
    },[])

    return [ results, error, searchAPI ];
}