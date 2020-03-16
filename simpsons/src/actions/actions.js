import Questions from '../utils/Questions';

export const setQuizQuestions = () => {
    return {
        type: 'SET_QUIZ_QUESTIONS',
        quizData: Questions
    };
};

export const incrementScore = () => {
    return {
        type: 'INCREMENT_SCORE'
    };
};

export const updateCurrentQuestion = currentQuestion => {
    return {
        type: 'UPDATE_CURRENT_QUESTION',
        currentQuestion
    };
};

export const resetGames = () => {
    return {
        type: 'RESET_GAME'
    };
};