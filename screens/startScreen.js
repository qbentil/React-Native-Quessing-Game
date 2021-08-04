import React, {useState} from 'react';


import{ View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Cards from '../components/Cards';
import Colors from '../constants/colors';
import Inputs from '../components/input';
import NumberContainer from '../components/numberContainer';

const StartGameScreen = props => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputNumberHandler = inputText =>{
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
    }
    const resetHandler = () =>{
        setEnteredNumber('');
        setConfirmed(false);
    }

    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert("Invalid Number!", "Number must be between 0 and 99", [{text: 'Okay', style: 'destructive', onPress: resetHandler}])
            return;
        }
        setConfirmed(true);
        setEnteredNumber('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
            <Cards style = {styles.summaryContainer}>
                <Text>Your Chosen Number</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title = 'START GAME' color = {Colors.primary} onPress = {() => props.onStartGame(selectedNumber)} />
            </Cards>
        )
    }
    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
            <View style = {styles.screen}>
                <Text style = {styles.title}>The Game Screen</Text>
                <Cards style = {styles.inputContainer}>
                    <Text>Enter a number:</Text>
                    <Inputs 
                    style = {styles.input} 
                    keyboardType = "number-pad" 
                    blurOnSubmit 
                    autoCapitalize = "none" 
                    maxLength = {2} 
                    onChangeText = {inputNumberHandler}
                    value = {enteredNumber}
                    />
                    <View style = {styles.buttonsContainer}>
                        <View style = {styles.btn}>
                            <Button title= 'Reset' onPress = {resetHandler} color = {Colors.secondary}/>
                        </View>
                        <View style = {styles.btn}>
                            <Button title= 'Confirm' onPress = {confirmInputHandler} color = {Colors.primary} />
                        </View>
                    </View>
                </Cards>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}
//Applying Stlyes to header
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: "center",
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
    },
    buttonsContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    btn:{
        width:"40%",
        borderColor: 'white',
    },
    input:{
        width: 50,
        textAlign: 'center',
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;