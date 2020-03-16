import React from 'react';
import App from '../App';
import { connect } from 'react-redux';
import { setQuizQuestions, 
            resetGame, 
            incrementScore, 
            updateCurrentQuestion } from '../actions/actions';


const mapStateToProps = state => {
    return {
        quizData: state.quizData,
        currentQuestion: state.currentQuestion,
        rightAnswers: state.rightAnswers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setQuizData: quizData => dispatch(setQuizQuestions(quizData)),
        resetGame: () => dispatch(resetGame()),
        incrementScore: () => dispatch(incrementScore()),
        updateCurrentQuestion: () => dispatch(updateCurrentQuestion())
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;