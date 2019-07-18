import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        payload: {
            id: uuid.v4(),
            text: text
        }
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        payload: {
            id: id
        }
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        payload: {
            id: id,
            text: text
        }
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        payload: {
            id: id
        }
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        payload: {
            id: id
        }
    }
}
