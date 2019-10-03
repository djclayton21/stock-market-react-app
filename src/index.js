import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App.js';
import StockDataProvider from './context/StockDataProvider.js'
import WatchLIstProvider from './context/WatchListProvider.js'

ReactDOM.render(

    <BrowserRouter>
        <StockDataProvider>
            <WatchLIstProvider>
                <App />
            </WatchLIstProvider>
        </StockDataProvider>
    </BrowserRouter>

    ,document.getElementById('root')
)