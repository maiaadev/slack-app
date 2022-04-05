import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/styles/output.css';
import CreateAccount from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SlackPage from './pages/SlackPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<CreateAccount />} />
        <Route path='/slack' element={<SlackPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
