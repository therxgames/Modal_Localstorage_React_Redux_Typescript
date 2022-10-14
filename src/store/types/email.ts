export interface EmailState {
    emails: string[];
}

export enum EmailActionTypes {
    SET_EMAILS = 'SET_EMAILS',
    ADD_EMAIL  = 'ADD_EMAIL',
}

export interface SetEmailsAction {
    type: EmailActionTypes.SET_EMAILS;
    payload: string[];
}

export interface AddEmailAction {
    type: EmailActionTypes.ADD_EMAIL;
    payload: string;
}

export type EmailAction = SetEmailsAction | AddEmailAction;