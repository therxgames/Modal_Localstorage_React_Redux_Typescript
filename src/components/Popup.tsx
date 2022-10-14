import { FC, Dispatch, ChangeEvent, SetStateAction, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NEW_SUBSCRIBE, OLD_SUBSCRIBE } from '../config/subscribe';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ISubscribe } from '../interfaces/SubscribeInterface';
import { EmailActionTypes } from '../store/types/email';

interface PopupProps {
    setShowPopup:     Dispatch<SetStateAction<boolean>>;
    setSubscribeData: Dispatch<SetStateAction<ISubscribe>>;
    setShowSubscribe: Dispatch<SetStateAction<boolean>>;
}

const Popup: FC<PopupProps> = ({ setShowPopup, setSubscribeData, setShowSubscribe }) => {
    const [email, setEmail] = useState<string>("");
    const emails = useTypedSelector((state) => state.email.emails)
    const dispatch = useDispatch();
    
    useEffect((): void => {
        localStorage.setItem("emails", JSON.stringify(emails));
    }, [emails]);

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
        let target = event.target;
        setEmail(target.value);
    }

    const onClickSubscribe = (): void => {
        let subscribeData = isNewSubscribe() ? NEW_SUBSCRIBE : OLD_SUBSCRIBE;

        setSubscribeData(subscribeData);
        setShowSubscribe(true);
        setTimeout(() => setShowSubscribe(false), 2000);

        if(isNewSubscribe()) {
            dispatch({ 
                type: EmailActionTypes.ADD_EMAIL,
                payload: email
            });
        }

        setEmail("");
    }

    const isNewSubscribe = (): boolean => {
        return !emails.includes(email);
    }

    return(
        <div className="popup fixed" id="popup" v-if="showPopup">
            <div className="popup__body fixed__center">
                <div className="popup__content">
                    <div className="popup__container">
                        <div className="popup__close" onClick={() => setShowPopup(false)}></div>

                        <div className="popup__title">
                            10%<span>off</span>
                        </div>

                        <div className="popup__title2">
                            your first order
                        </div>

                        <div className="popup__line"></div>

                        <div className="popup__text">
                            Subscrive to recieve 10% off promocode plus exclusive <br/> offers and deals
                        </div>

                        <div className="popup__email">
                            <div className="popup__email-title">
                                Email-adress
                            </div>
                            <input type="text" name="email" id="email" className="popup__email-input"
                                   value = {email} onChange = {e => onChangeEmail(e)} />
                        </div>

                        <div className="popup__btn">
                            <button type="submit" className="btn" onClick={() => onClickSubscribe()}>
                                <a href="#">Subscribe!</a>
                            </button>
                        </div>

                        <div className="popup__agree">
                            <label className="popup__agree-label">
                                <input type="checkbox" id="agree" name="agree" className="popup__agree-checkbox" />

                                <span className="popup__agree-style"></span>
                                I'm agree with privacy policy
                            </label>
                        </div>
                    </div>
                    <div className="popup__box"></div>
                </div>
            </div>
        </div>
    )
}

export default Popup;
