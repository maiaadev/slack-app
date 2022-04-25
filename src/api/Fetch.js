import axios from './Axios';
import Token from './Token';

async function Register(data) {
  try {
    await axios.post('/auth', data, {
      headers: { 'Content-type': 'application/json' },
    });
    return;
  } catch (error) {
    return error.response.data.errors.full_messages[0];
  }
}

async function LogIn(data) {
  try {
    const baby = await axios.post('/auth/sign_in', data, {
      headers: { 'Content-type': 'application/json' },
    });
    return [baby.headers, baby.data.data];
  } catch (error) {
    return [error.response.data.errors, error.response.status];
  }
}

async function GetChannel() {
  const get = await axios.get('/channels', {
    headers: Token(),
  });
  return get.data.data;
}

async function CreateChannel(data) {
  try {
    const create = await axios.post('/channels', data, {
      headers: Token(),
    });
    return create.data;
  } catch (error) {}
}

async function RetrieveMessage(data) {
  const retrieve = await axios.get(
    `/messages?receiver_id=${data.id}&receiver_class=${data.class}`,
    { headers: Token() }
  );
  return retrieve.data.data;
}

async function SendMessage(data) {
  const send = await axios.post('/messages', data, {
    headers: Token(),
  });
  return send;
}

async function GetChannelMembers(data) {
  const get = await axios.get(`/channels/${data}`, {
    headers: Token(),
  });
  return get.data.data.channel_members;
}

async function AddChannelMember(data) {
  const add = await axios.post('/channel/add_member', data, {
    headers: Token(),
  });
  console.log(add.data)
  return add.data;
}

async function GetUsers() {
  const get = await axios.get('/users', {
    headers: Token(),
  });
  return get.data.data;
}

async function AddMember(data) {
  const add = await axios.get('/channel/add_member', data, {
    headers: Token(),
  });
  return add;
}

export {
  Register,
  LogIn,
  CreateChannel,
  GetChannel,
  RetrieveMessage,
  SendMessage,
  GetChannelMembers,
  GetUsers,
  AddMember,
  AddChannelMember
};
