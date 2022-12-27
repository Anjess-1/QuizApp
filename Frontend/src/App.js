import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminDashboard from './component/admin-dashboard';
import QuizTable from './component/admin-dashboard/quiz-table';
import LoginForm from './component/admin/login-form';
import './app.css';
import LandingPage from './component/user/landing-page';
import Game from './component/game';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginForm /> } />
      <Route path='admin-dashboard' element={< AdminDashboard/>} />
      <Route path='quizGame' element={<LandingPage />}/>
      <Route path='gamePage' element={<Game />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
