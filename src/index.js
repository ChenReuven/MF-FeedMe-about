import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';

window.renderAbout = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
    );
    unregister();
};

window.unmountAbout = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
