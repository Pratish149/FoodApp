import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [ results, error, searchAPI ] = useResults();

    const filterResult = ( price ) => {
        return  results.filter((result) => {
            return result.price === price;
        })
    }

    return(
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchAPI} 
            />
            { error ?  <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title="Cost Effective" 
                    results={filterResult('$')} 
                    navigation={navigation} 
                />
                <ResultsList 
                    title="Bit Pricier" 
                    results={filterResult('$$')}
                    navigation={navigation} 
                />
                <ResultsList 
                    title="Big Splendid" 
                    results={filterResult('$$$')}
                    navigation={navigation}
                />
            </ScrollView>
        </>
    )
}

const styles =  StyleSheet.create({})

export default SearchScreen;