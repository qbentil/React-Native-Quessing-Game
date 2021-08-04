import React, {useState} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
// custom imports
import Header from './components/header';
import StartGameScreen from './screens/startScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

function App() {
    // userstates
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    // Handlers
    const restartGameHandler = () =>{
      setGuessRounds(0)
      setUserNumber(null);
    }

    const startGameHandler = (selectedNumber) =>{
      setUserNumber(selectedNumber);
    }

    const GameOverHandler = numOfRnds =>{
      setGuessRounds(numOfRnds);
    }

    let content = <StartGameScreen onStartGame = {startGameHandler} />
    if(userNumber && guessRounds <= 0){
      content = <GameScreen userChoice = {userNumber} onGameOver = {GameOverHandler} />
    }else if(guessRounds > 0){
      content = <GameOverScreen NumRounds = {guessRounds} userNum = {userNumber} onRestart = {restartGameHandler} />
    }

    return (
      <View style = {styles.screen}>
      <StatusBar  backgroundColor = {Colors.secondary} barStyle = 'light-content' />
        <Header title = "My Guess Game" />
        {content}
      </View>
    );
}

const styles = StyleSheet.create({
  screen:{
      flex: 1,
    }
});

export default App;
