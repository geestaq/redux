import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.payload.id,
                text: action.payload.text
                votes: 0
            }
            , ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.payload.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if(comment.id === action.payload.id) {
                    return {...comment, text: action.payload.text};
                }
                return comment;
            });
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.payload.id) {
                    return {...comment, votes: comment.votes + 1};
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.payload.id) {
                    return {...comment, votes: comment.votes - 1};
                }
                return comment;
            });
        default:
            return state;
    }
}
