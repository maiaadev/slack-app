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
    console.log('get', get.data.data)
    return get.data.data;
}

async function CreateChannel(data) {
 try {
  const create = await axios.post('/channels', data, {
    headers: Token(),
  });
  return create.data;
 } catch (error) {
   console.log(error.response)
 }
}

export { Register, LogIn, CreateChannel, GetChannel };
