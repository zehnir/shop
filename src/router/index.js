import React from 'react';
import App from '../pages/App';
import { FragmentPanel ,MainMenu} from '../components';
export default function SimpleContainer() {
    return (
        <React.Fragment>
            <MainMenu />
            <FragmentPanel>
                <App />
            </FragmentPanel>
        </React.Fragment>
    );
}