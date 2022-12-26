import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuizTable from './component/admin-dashboard/quiz-table';
import LoginForm from './component/admin/login-form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <LoginForm />
    // <QuizTable />
);

