import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const values: ReadonlyArray<{
  title:string;url:string
}>=[]
root.render(
  <React.StrictMode>
    <div>
      <Header title="DRIB" sections={values}/>
      <App />
      <Footer description ="0800-000-000" title="Contacts"/>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
