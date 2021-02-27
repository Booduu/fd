import * as actions from './actions.lives';

const initialState = {
    lives: [],
};

const livesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.CREATE_LIVE:
            return state
        case actions.CREATE_LIVE_SUCCESS:
            const upadtedLivesList = [...state.lives];
            return {
                ...state,
                lives: upadtedLivesList.concat(action.result),
            }
        case actions.CREATE_LIVE_FAIL:
            return state

        case actions.EDIT_LIVE_SUCCESS: 
        console.log('edit red', action.live);
        const newListLives = [...state.lives];
        const index = newListLives.findIndex(l => l._id === action.live._id);
        newListLives[index] = action.live;
        return {
            ...state,
            lives: newListLives,
        };

        case actions.DELETE_LIVES:
            return state

        case actions.DELETE_LIVES_SUCCESS:
            const livesAfterDeleteOne = [...state.lives.filter(l => l._id !== action.live._id)]
            return {
                ...state,
                lives: livesAfterDeleteOne,
            }
        case actions.DELETE_LIVES_FAIL:
            return state
            
        case actions.GET_LIVES_SUCCESS:
            const livesList = [...action.result];
            return {
                ...state,
                lives: livesList,
            };

        default: return state;
    }
}

export default livesReducer;