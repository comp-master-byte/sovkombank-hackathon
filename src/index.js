import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Theme preset={presetGpnDefault}>
                <App />
            </Theme>
        </Provider>
    </BrowserRouter>
);