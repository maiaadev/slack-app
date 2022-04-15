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
  } catch (error) {
    console.log(error.response);
  }
}

async function RetrieveMessage(data) {
  const retrieve = await axios.get(
    `/messages?receiver_id=${data.id}&receiver_class=${data.class}`,
    { headers: Token() }
  );
  console.log('data:', data)
  console.log('receiver_id:', data.id)
  console.log('receiver_class:', data.class)
  console.log('fetch:', retrieve)
  return retrieve.data.data;
}

export { Register, LogIn, CreateChannel, GetChannel, RetrieveMessage };
