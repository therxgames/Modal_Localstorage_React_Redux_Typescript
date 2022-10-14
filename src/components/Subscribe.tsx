import { FC } from 'react';
import { ISubscribe } from '../interfaces/SubscribeInterface';

interface SubscribeProps {
    subscribeData: ISubscribe;
}

const Subscribe: FC <SubscribeProps> = ({ subscribeData }) => {  
    const { color, text } = subscribeData;
    
    return(
        <div className="subscribe">
            <div className={`subscribe__popup ${color}`}>
                { text }
            </div>
        </div>
    )
}

export default Subscribe;
