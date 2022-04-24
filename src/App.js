import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/styles/output.css';
import CreateAccount from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SlackPage from './pages/SlackPage';
import { useContext } from 'react';
import UseContext from './context/UseContext';
import Main from './components/slack-page/Main';
import Slackbot from './components/slack-page/Slackbot';

function App() {
  const { channels, userList } = useContext(UseContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<CreateAccount />} />
        <Route path='/slack' element={<SlackPage />}>
          <Route path='slack-bot' element={<Slackbot/>}/>
          {channels &&
            channels.map((prop) => {
              return (
                <Route
                  path={`${prop.id}`}
                  key={prop.id}
                  element={<Main name={prop.name} id={prop.id} data={prop}/>}
                />
              );
            })}
          {userList &&
            userList.map((prop) => {
              return (
                <Route
                  path={`${prop.id}`}
                  key={prop.id}
                  element={<Main name={prop.email} id={prop.id} data={prop}/>}
                />
              );
            })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
