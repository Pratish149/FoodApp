import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return(
        <View style={styles.searchStyle}>
            <Feather name="search" size={30} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textStyle}
                placeholder="Search"
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchStyle: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#F0EEEE',
        margin: 15,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 10
    },
    textStyle:  {
        fontSize: 20,
        padding: 10,
        flex: 1
    }
})

export default SearchBar;