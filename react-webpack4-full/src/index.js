import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Router />
        </ConfigProvider>
    </Provider>,
    document.getElementById('app'),
);
