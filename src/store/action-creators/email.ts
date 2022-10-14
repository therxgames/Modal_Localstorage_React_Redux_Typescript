import { SetEmailsAction, EmailActionTypes, AddEmailAction } from "../types/email";

export const setEmails = (): SetEmailsAction => {
    let emails:string[] = [];

    if (localStorage.getItem("emails")) {
        emails = JSON.parse(localStorage.getItem("emails") || "");
    }

    return {
        type: EmailActionTypes.SET_EMAILS,
        payload: emails
    };
}

export const addEmail = (email: string): AddEmailAction => {
    return {
        type: EmailActionTypes.ADD_EMAIL,
        payload: email
    }
}