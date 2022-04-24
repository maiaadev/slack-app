import React, { useContext } from 'react';
import Create from '../components/create-account/CreateAccount';
import Modal from '../components/Modal';
import UseContext from '../context/UseContext';
import AccountCreated from '../components/create-account/AccountCreated';

function CreateAccount() {
  const { isOpenCreateModal, setIsOpenCreateModal} = useContext(UseContext);
  return (
    <div>
      <Create />
      <Modal open={isOpenCreateModal}>
        <AccountCreated />
      </Modal>
    </div>
  );
}

export default CreateAccount;
