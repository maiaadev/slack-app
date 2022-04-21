import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/styles/output.css';
import CreateAccount from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SlackPage from './pages/SlackPage';
import { useContext } from 'react';
import UseContext from './context/UseContext';
import Main from './components/slack-page/Main';

function App() {
  const { channels } = useContext(UseContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<CreateAccount />} />
        <Route path='/slack' element={<SlackPage />}>
          {channels &&
            channels.map((prop) => {
              return (
                <Route
                  path={`${prop.id}`}
                  key={prop.id}
                  element={<Main name={prop.name} id={prop.id} />}
                />
              );
            })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
