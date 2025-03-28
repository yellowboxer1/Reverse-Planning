import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // index.css 파일 불러오기
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);