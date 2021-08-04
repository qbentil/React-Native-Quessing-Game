import React, {} from 'react';


import{ View, Text, StyleSheet, Button} from 'react-native';
import NumberContainer from '../components/numberContainer';
import Cards from '../components/Cards';
import Colors from '../constants/colors';

const GameOverScreen = props =>{
    return(
        <View style = {styles.screen}>
        <Text style = {styles.title}>Game Over!</Text>
            <Cards style = {styles.card}>
                <View style = {styles.row}>
                    <Text>Number of Rounds: </Text>
                    <NumberContainer>{props.NumRounds}</NumberContainer>
                </View>
                <View style = {styles.row}>
                    <Text>Number Was: </Text>
                    <NumberContainer>{props.userNum}</NumberContainer>
                </View>
                <View style = {styles.buttonsContainer}>
                    <Button title = 'RESTART GAME' onPress = {props.onRestart} color = {Colors.primary} />
                </View>
            </Cards>
        </View>
    )
}

styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        color: Colors.secondary,
        textTransform: 'uppercase'
    },
    card:{
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
    },
    buttonsContainer:{
        width: '80%',
        justifyContent: "center",
        marginTop: 20,
        paddingHorizontal: 15,
    },
    row:{
        width: '100%',
    }
})

export default GameOverScreen;