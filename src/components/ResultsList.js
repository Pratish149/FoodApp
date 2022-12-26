import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const ResultsList = ({ title, results, navigation }) => {

    if( !results.length ) {
        return null;
    }
    
    return(
        <View style={{ marginVertical: 10, marginLeft: 10}}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Details', { id: item.id })}
                        >
                            <View style={styles.viewStyle}>
                                <Image 
                                    style={styles.imageStyle}
                                    source={{
                                        uri: `${item.image_url}`,
                                    }}
                                />
                                <Text style={styles.nameStyle}>{item.name}</Text>
                                <Text style={styles.ratingStyle}>{`${item.rating} Rating, ${item.review_count} Reviews`}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    imageStyle: {
        width: 200,
        height: 100,
        borderRadius: 5
    },
    viewStyle: {
        padding: 10
    },
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    ratingStyle: {
        color: 'gray'
    }
})

export default ResultsList;