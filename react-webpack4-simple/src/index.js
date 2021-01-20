import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Router />
    </ConfigProvider>,
    document.getElementById('app'),
);
