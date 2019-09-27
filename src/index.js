import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App.js';
import StockDataProvider from './context/StockDataProvider.js'

ReactDOM.render(

    <BrowserRouter>
        <StockDataProvider>
            <App />
        </StockDataProvider>
    </BrowserRouter>

    ,document.getElementById('root')
)