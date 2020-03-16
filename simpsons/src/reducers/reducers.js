import * as actions from '../actions/actions';

export const initialState = {
    quizData: null,
    correctAnswers: 0,
    currentQuestion: 0,
};

export const updateState = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUIZ_QUESTIONS':
            return Object.assign({}, state, {
                quizData: action.quizData
            });
        case 'INCREMENT_SCORE':
            return Object.assign({}, state, {
                correctAnswers: state.correctAnswers+1
            });
        case 'UPDATE_CURRENT_QUESTION':
            return Object.assign({}, state, {
                currentQuestion: state.currentQuestion+1
            });
        case 'RESET_GAME':
            return Object.assign({}, initialState);
        default:
            return state;
    }
};






