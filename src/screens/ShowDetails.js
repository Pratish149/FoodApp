import React, { useEffect, useState } from "react";
import { Text, FlatList, Image, StyleSheet } from 'react-native'
import yelp from "../api/yelp";

const ShowDetails = ({ route })  => {

    const id = route.params.id;
    const [result, setResult] = useState({})

    const getResult = async ( id ) => {

        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    },[])

    if( !result ) {
        return null;
    }

    return(
        <>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={ ({ item }) => {
                    return <Image 
                        source={{ uri: item }} 
                        style={styles.imageStyle}
                    />
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 200,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})
export default ShowDetails;