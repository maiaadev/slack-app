import { createContext, useEffect, useState, useRef } from 'react';

const UseContext = createContext({});

export function DataContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [header, setHeader] = useState([]);
  const [channels, setChannels] = useState([]);
  const [message, setMessage] = useState([]);
  const [search, setSearch] = useState('');
  const [recipient, setRecipient] = useState('');
  const [users, setUsers] = useState('');
  const [userList, setUserList] = useState([]);
  const [channelMembers, setChannelMembers] = useState([]);
  const [body, setBody] = useState('');
  const [isOpenChannelModal, setIsOpenChannelModal] = useState(false)
  const [isOpenMembersModal, setIsOpenMembersModal] = useState(false)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenMessageModal, setIsOpenMessageModal] = useState(false);
  const messageEndRef = useRef(null);
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false)
  const searchRef = useRef()
  const avatar = "https://avatars.dicebear.com/api/micah/"

  useEffect(() => {
    if (localStorage.getItem('channels') === null) {
      setChannels([]);
    } else {
      setChannels(JSON.parse(localStorage.getItem('channels')));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('users') === null) {
      setUserList([])
    } else {
      setUserList(JSON.parse(localStorage.getItem('users')));
    }
  }, [])

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [message]);

  return (
    <UseContext.Provider
      value={{
        user,
        isOpenCreateModal,
        header,
        channels,
        search,
        message,
        isOpenMessageModal,
        recipient,
        users,
        userList,
        body,
        isOpenChannelModal,
        isOpenMembersModal,
        messageEndRef,
        channelMembers,
        isOpenSearchModal,
        searchRef,
        avatar,
        setChannelMembers,
        setUser,
        setIsOpenCreateModal,
        setHeader,
        setChannels,
        setSearch,
        setMessage,
        setIsOpenMessageModal,
        setRecipient,
        setUsers,
        setUserList,
        setBody,
        setIsOpenChannelModal,
        setIsOpenMembersModal,
        setIsOpenSearchModal
      }}
    >
      {children}
    </UseContext.Provider>
  );
}

export default UseContext;
