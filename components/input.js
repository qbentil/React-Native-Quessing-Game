import React from 'react';

import{ View, StyleSheet, TextInput} from 'react-native';

const Inputs = props => {
    return(
        <TextInput {...props} style = {{...styles.inputsField, ...props.style}} placeHolder = "Enter number"/>
    )
}
//Applying Stlyes to header
const styles = StyleSheet.create({
    inputsField: {
        height: 30,
        borderBottomColor: 'grey' ,
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});

export default Inputs;