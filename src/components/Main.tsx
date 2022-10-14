import { FC, Dispatch, SetStateAction } from 'react';

interface MainProps {
    setShowPopup: Dispatch<SetStateAction<boolean>>;
}

const Main: FC<MainProps> = ({ setShowPopup }) => {
    return(
        <div className="main fixed">
            <div className="main__container fixed__center">
                <button className="main__btn" onClick={() => setShowPopup(true)}>
                    Открыть модальное окно
                </button>
            </div>
        </div>
    )
}

export default Main;
