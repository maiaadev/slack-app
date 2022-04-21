import { createContext, useEffect, useState } from 'react';

const UseContext = createContext({});

export function DataContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const [header, setHeader] = useState([]);
  const [channels, setChannels] = useState([]);
  const [message, setMessage] = useState([]);
  const [search, setSearch] = useState('');
  const [createMessage, setCreateMessage] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [users, setUsers] = useState('');
  const [userList, setUserList] = useState([]);
  const [body, setBody] = useState('');


  useEffect(() => {
    if (channels !== undefined) {
      setChannels(JSON.parse(localStorage.getItem('channels')));
    } else {
      setChannels([]);
    }
  }, []);

  return (
    <UseContext.Provider
      value={{
        user,
        accountCreated,
        header,
        channels,
        search,
        message,
        createMessage,
        recipient,
        users,
        userList,
        body,
        setUser,
        setAccountCreated,
        setHeader,
        setChannels,
        setSearch,
        setMessage,
        setCreateMessage,
        setRecipient,
        setUsers,
        setUserList,
        setBody
      }}
    >
      {children}
    </UseContext.Provider>
  );
}

export default UseContext;
