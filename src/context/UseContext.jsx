import { createContext, useEffect, useState } from 'react';

const UseContext = createContext({});

export function DataContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const [header, setHeader] = useState([]);
  const [channels, setChannels] = useState([]);
  const [message, setMessage] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (channels !== undefined) {
      setChannels(JSON.parse(localStorage.getItem('channels')));
    } else {
      setChannels([]);
    }
    // console.log(channels)
  }, []);
  // setChannels(JSON.parse(localStorage.getItem('channels')))

  return (
    <UseContext.Provider
      value={{
        user,
        accountCreated,
        header,
        channels,
        search,
        message,
        setUser,
        setAccountCreated,
        setHeader,
        setChannels,
        setSearch,
        setMessage
      }}
    >
      {children}
    </UseContext.Provider>
  );
}

export default UseContext;
