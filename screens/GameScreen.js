import React, {useState, useRef, useEffect} from 'react';


import{ View, Text, StyleSheet, Button, Alert} from 'react-native';
import NumberContainer from '../components/numberContainer';
import Cards from '../components/Cards';
import Colors from '../constants/colors';

// Generating a random number
const generateRandomNumber = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude){
        return generateRandomNumber(min, max, exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = props =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));
    const [guessCount, setGuessCount] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const {userChoice, onGameOver} = props;

    useEffect(() =>{
        if(currentGuess === userChoice){
            onGameOver(guessCount)
        }
    }, [currentGuess,userChoice, onGameOver,  guessCount])
    const nextGuessHandler = direction =>{
        if((direction ==='lower' && currentGuess < props.userChoice) ||direction ==='greater' && currentGuess > props.userChoice ){
            Alert.alert("Don't lie!", "You gave a wrong hint", [{text: 'Sorry', style: 'cancel'}])
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess
        }
        const nextGuess = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuess);
        setGuessCount(guessCount => guessCount + 1);
    }

    return(
        <View style = {styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Cards style = {styles.buttonsContainer}>
                <Button title = 'LOWER' onPress = {nextGuessHandler.bind(this, 'lower')} color = {Colors.primary}/>
                <Button title = 'GREATER' onPress = {nextGuessHandler.bind(this, 'greater')} color = {Colors.secondary}/>
            </Cards>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonsContainer:{
        flexDirection: "row",
        marginTop: 20,
        width: 300,
        maxWidth: '800%',
        justifyContent: "space-around",
    },
})

export default GameScreen;