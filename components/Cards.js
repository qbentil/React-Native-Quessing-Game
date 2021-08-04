import React from 'react';

import{ View, StyleSheet} from 'react-native';

const Cards = props => {
    return(
        <View style = {{...styles.card, ...props.style}}>{props.children}</View>
    )
}
//Applying Stlyes to header
const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 1,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    },
});

export default Cards;