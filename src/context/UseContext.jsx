import { createContext, useEffect, useState } from 'react';

const UseContext = createContext({});

export function DataContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const [header, setHeader] = useState([]);
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    setChannels(JSON.parse(localStorage.getItem('channels')))
    // console.log(channels)
  }, [user])
  // setChannels(JSON.parse(localStorage.getItem('channels')))

  return <UseContext.Provider value={{user, setUser, accountCreated, setAccountCreated, header, setHeader, setChannels, channels, search, setSearch}}>{children}</UseContext.Provider>;
}

export default UseContext;
