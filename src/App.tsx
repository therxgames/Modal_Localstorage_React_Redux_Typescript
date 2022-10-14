import { FC, Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEmails } from './store/action-creators/email'; 
import Main from './components/Main';
import Popup from './components/Popup';
import { ISubscribe } from './interfaces/SubscribeInterface';
import Subscribe from './components/Subscribe';

const App: FC = () => {    
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showSubscribe, setShowSubscribe] = useState<boolean>(false);
    const [subscribeData, setSubscribeData] = useState<ISubscribe>({
        color: '',
        text: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEmails());
    });

    return(
        <Fragment>
            <Main setShowPopup={setShowPopup} />
            {showPopup     && <Popup setShowPopup={setShowPopup} setSubscribeData={setSubscribeData} setShowSubscribe={setShowSubscribe} />}
            {showSubscribe && <Subscribe subscribeData={subscribeData} />}
        </Fragment>
    )
}

export default App;
