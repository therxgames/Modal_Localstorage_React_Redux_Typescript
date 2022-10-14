import { EmailState, EmailActionTypes, EmailAction } from "../types/email";

const initialState: EmailState = {
    emails: [],
}

export const emailReducer = (state = initialState, action: EmailAction): EmailState  => {
    switch (action.type) {
        case EmailActionTypes.SET_EMAILS:
            return {...state, emails: action.payload}
        case EmailActionTypes.ADD_EMAIL:
            return {...state, emails: [...state.emails, action.payload]}
        default: 
            return state;
    }
}